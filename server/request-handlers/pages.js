const app = require('../app');
const {groups, testPages} = require('../test-case-catalog');

const generateTitlePrefix = title => `Recognition: ${title}`;

app.get('/', (req, res) => {
  res.render('index', {title: generateTitlePrefix('Describe test cases'), groups});
});

testPages.forEach(({path, view, method, title}) => {
  app[method](path, (req, res) => {
    res.render(view, {title: generateTitlePrefix(title)});
  });
});
