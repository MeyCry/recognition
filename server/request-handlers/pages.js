const app = require('../app');

const generateTitlePrefix = title => `Recognition: ${title}`;

app.get('/', (req, res) => {
  res.render('index', {title: generateTitlePrefix('Describe test cases')});
});
app.get('/hidden-elements', (req, res) => {
  res.render('hidden-elements', {title: generateTitlePrefix('Hidden elements')});
});

// separate-page
app.get('/separate-page/signup-email-pass', (req, res) => {
  res.render('separate-page/signup-email-pass', {title: generateTitlePrefix('Sign up with email and password')});
});
app.get('/separate-page/login-email-pass', (req, res) => {
  res.render('separate-page/login-email-pass', {title: generateTitlePrefix('Log in with email and password')});
});
app.get('/separate-page/signup-username-pass', (req, res) => {
  res.render('separate-page/signup-username-pass', {title: generateTitlePrefix('Sign up with username and password')});
});
app.get('/separate-page/login-username-pass', (req, res) => {
  res.render('separate-page/login-username-pass', {title: generateTitlePrefix('Log in with username and password')});
});
app.get('/separate-page/signup-username-email-pass', (req, res) => {
  res.render('separate-page/signup-username-email-pass', {
    title: generateTitlePrefix('Sign up with username, email and password'),
  });
});
app.get('/separate-page/login-username-email-pass', (req, res) => {
  res.render('separate-page/login-username-email-pass', {
    title: generateTitlePrefix('Log in with username, email and password'),
  });
});
app.get('/separate-page/signup-uncertain-email', (req, res) => {
  res.render('separate-page/signup-uncertain-email', {
    title: generateTitlePrefix('Sign up with uncertain email'),
  });
});
app.get('/separate-page/credit-card', (req, res) => {
  res.render('separate-page/credit-card', {title: generateTitlePrefix('Credit card')});
});
// separate-page end

// one-page
app.get('/one-page/login-signup', (req, res) => {
  res.render('one-page/login-signup', {title: generateTitlePrefix('One page login and signup')});
});
app.get('/one-page/login-signup-signup', (req, res) => {
  res.render('one-page/login-signup-signup', {title: generateTitlePrefix('One page login signup login')});
});
app.get('/one-page/several-forms', (req, res) => {
  res.render('one-page/several-forms', {title: generateTitlePrefix('One page several forms')});
});
app.get('/one-page/ajax-signup', (req, res) => {
  res.render('one-page/ajax-signup', {title: generateTitlePrefix('One page ajax signup')});
});
// one-page end

// two-pages
app.get('/two-pages/signup-email-pass', (req, res) => {
  res.render('two-pages/signup-email-pass', {title: generateTitlePrefix('Signup first page enter email')});
});
app.get('/two-pages/signup-second-page', (req, res) => {
  res.render('two-pages/signup-second-page', {title: generateTitlePrefix('Signup second page enter password')});
});
app.get('/two-pages/signup-username-pass', (req, res) => {
  res.render('two-pages/signup-username-pass', {title: generateTitlePrefix('Signup first page enter username')});
});
app.get('/two-pages/login-email-pass', (req, res) => {
  res.render('two-pages/login-email-pass', {title: generateTitlePrefix('Login with email and password')});
});
app.get('/two-pages/login-second-page', (req, res) => {
  res.render('two-pages/login-second-page', {title: generateTitlePrefix('Login second page enter password')});
});
app.get('/two-pages/login-username-pass', (req, res) => {
  res.render('two-pages/login-username-pass', {
    title: generateTitlePrefix('Login first page with username and password'),
  });
});
// two-pages end

// iframe
app.get('/iframe/iframe-forms', (req, res) => {
  res.render('iframe/iframe-forms', {title: generateTitlePrefix('Iframe forms')});
});
app.get('/iframe/iframe-login', (req, res) => {
  res.render('iframe/iframe-login', {title: generateTitlePrefix('Iframe login')});
});
app.get('/iframe/iframe-signup', (req, res) => {
  res.render('iframe/iframe-signup', {title: generateTitlePrefix('Iframe signup')});
});
// iframe end

// unsupported-properties
app.get('/unsupported-properties', (req, res) => {
  res.render('unsupported-properties/index', {title: generateTitlePrefix('Unsupported properties')});
});
// unsupported-properties end

// position-fixed
app.get('/position-fixed/fixed-elements', (req, res) => {
  res.render('position-fixed/fixed-elements', {title: generateTitlePrefix('Fixed elements')});
});
// position-fixed end

// change-password
app.get('/change-password/signup-email', (req, res) => {
  res.render('change-password/signup-email', {title: generateTitlePrefix('Change password forms email')});
});
app.get('/change-password/change-password', (req, res) => {
  res.render('change-password/change-password', {title: generateTitlePrefix('Change password forms')});
});
// change-password end

// change-password-login
app.get('/change-password-login/login-email', (req, res) => {
  res.render('change-password-login/login-email', {title: generateTitlePrefix('Login with email and password')});
});
app.get('/change-password-login/change-password', (req, res) => {
  res.render('change-password-login/change-password', {title: generateTitlePrefix('Change password forms')});
});
// change-password-login end

// form-other
app.get('/form-other/signup-email', (req, res) => {
  res.render('form-other/signup-email', {title: generateTitlePrefix('Form other. Signup with email')});
});
app.get('/form-other/signup-username', (req, res) => {
  res.render('form-other/signup-username', {title: generateTitlePrefix('Form other. Signup with username')});
});
app.get('/form-other/signup-email-first-page', (req, res) => {
  res.render('form-other/signup-email-first-page', {
    title: generateTitlePrefix('Form other. Signup with email first page'),
  });
});
app.get('/form-other/login-email-second-page', (req, res) => {
  res.render('form-other/login-email-second-page', {
    title: generateTitlePrefix('Form other. Login with email second page'),
  });
});
app.get('/form-other/signup-username-first-page', (req, res) => {
  res.render('form-other/signup-username-first-page', {
    title: generateTitlePrefix('Form other. Signup with username first page'),
  });
});
app.get('/form-other/login-username-second-page', (req, res) => {
  res.render('form-other/login-username-second-page', {
    title: generateTitlePrefix('Form other. Login with username second page'),
  });
});
app.get('/form-other/form-fill-inputs', (req, res) => {
  res.render('form-other/form-fill-inputs', {
    title: generateTitlePrefix('Form other. Form fill inputs'),
  });
});
// form-other end

// new-pass-without-old
app.get('/new-pass-without-old/signup-email', (req, res) => {
  res.render('new-pass-without-old/signup-email', {title: generateTitlePrefix('Signup first page enter email')});
});
app.get('/new-pass-without-old/signup-username', (req, res) => {
  res.render('new-pass-without-old/signup-username', {title: generateTitlePrefix('Signup first page enter username')});
});
app.get('/new-pass-without-old/change-pass-second-page', (req, res) => {
  res.render('new-pass-without-old/change-pass-second-page', {title: generateTitlePrefix('New password without old password')});
});
// new-pass-without-old end

// login-with-2fa
app.get('/login-with-2fa/login-with-2fa-page-reload', (req, res) => {
  res.render('login-with-2fa/login-with-2fa-page-reload', {title: generateTitlePrefix('Login with 2fa page reload')});
});
app.all('/login-with-2fa/login-with-2fa-page-reload-2fa-page', (req, res) => {
  res.render('login-with-2fa/login-with-2fa-page-reload-2', {title: generateTitlePrefix('Login with 2fa page reload 2fa page')});
});
app.all('/login-with-2fa/login-with-2fa-page-reload-password-page', (req, res) => {
  res.render('login-with-2fa/login-with-2fa-page-reload-3', {title: generateTitlePrefix('Login with 2fa page reload password page')});
});
app.get('/login-with-2fa/login-with-2fa-single-page', (req, res) => {
  res.render('login-with-2fa/login-with-2fa-single-page', {title: generateTitlePrefix('Login with 2fa single page')});
});
// login-with-2fa end
