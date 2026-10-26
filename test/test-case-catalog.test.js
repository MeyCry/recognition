const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const {testPages} = require('../server/test-case-catalog');

const pagesDir = path.join(__dirname, '..', 'pages');
const nonTestPageViews = ['index', 'submit'];
const sharedSubmitPath = '/submit';
const localOrigin = 'http://localhost';

const viewFilePath = view => path.join(pagesDir, `${view}.ejs`);
const catalogPaths = new Set(testPages.map(page => page.path));
const catalogDirectories = new Set(testPages.map(page => path.posix.dirname(page.path)).filter(dir => dir !== '/'));

const listViews = dir =>
  fs.readdirSync(path.join(pagesDir, dir), {withFileTypes: true}).flatMap(entry => {
    const relativePath = path.posix.join(dir, entry.name);
    if (entry.isDirectory()) return relativePath === 'common' ? [] : listViews(relativePath);
    return entry.name.endsWith('.ejs') ? [relativePath.replace(/\.ejs$/, '')] : [];
  });

const findInGroupReferences = page => {
  const markup = fs.readFileSync(viewFilePath(page.view), 'utf8');
  return [...markup.matchAll(/<(?:form|iframe)\b[^>]*?\s(?:action|src)="([^"]*)"/g)]
    .map(([, reference]) => new URL(reference, localOrigin + page.path))
    .filter(url => url.origin === localOrigin && catalogDirectories.has(path.posix.dirname(url.pathname)))
    .map(url => url.pathname);
};

test('every catalog page has a view file', () => {
  const missing = testPages.filter(page => !fs.existsSync(viewFilePath(page.view))).map(page => page.view);
  assert.deepStrictEqual(missing, []);
});

test('every view file is in the catalog', () => {
  const catalogViews = new Set(testPages.map(page => page.view));
  const uncatalogued = listViews('').filter(view => !nonTestPageViews.includes(view) && !catalogViews.has(view));
  assert.deepStrictEqual(uncatalogued, []);
});

test('every in-group form action and iframe src points to a catalog page', () => {
  const broken = testPages.flatMap(page =>
    findInGroupReferences(page)
      .filter(target => target !== sharedSubmitPath && !catalogPaths.has(target))
      .map(target => `${page.path} -> ${target}`),
  );
  assert.deepStrictEqual(broken, []);
});
