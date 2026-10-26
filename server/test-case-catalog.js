const twoPagesSignupSecondPage = {path: '/two-pages/signup-second-page', title: 'Signup second page enter password'};
const twoPagesLoginSecondPage = {path: '/two-pages/login-second-page', title: 'Login second page enter password'};
const newPassWithoutOldSecondPage = {
  path: '/new-pass-without-old/change-pass-second-page',
  title: 'New password without old password',
};

const singleCaseGroup = (label, pages) => ({label, testCases: [{label, pages}]});

const groups = [
  {
    label: 'On the separate page',
    testCases: [
      {
        label: 'Signup with email and password',
        pages: [{path: '/separate-page/signup-email-pass', title: 'Sign up with email and password'}],
      },
      {
        label: 'Login with email and password',
        pages: [{path: '/separate-page/login-email-pass', title: 'Log in with email and password'}],
      },
      {
        label: 'Signup with username and password',
        pages: [{path: '/separate-page/signup-username-pass', title: 'Sign up with username and password'}],
      },
      {
        label: 'Login with username and password',
        pages: [{path: '/separate-page/login-username-pass', title: 'Log in with username and password'}],
      },
      {
        label: 'Signup with email, password and username',
        pages: [
          {path: '/separate-page/signup-username-email-pass', title: 'Sign up with username, email and password'},
        ],
      },
      {
        label: 'Login with email, password and username',
        pages: [{path: '/separate-page/login-username-email-pass', title: 'Log in with username, email and password'}],
      },
      {
        label: 'Uncertain email or username',
        pages: [{path: '/separate-page/signup-uncertain-email', title: 'Sign up with uncertain email'}],
      },
      {
        label: 'Card',
        pages: [{path: '/separate-page/credit-card', title: 'Credit card'}],
      },
    ],
  },
  {
    label: 'Signup and Login on one page',
    testCases: [
      {
        label: 'Signup and login forms',
        pages: [{path: '/one-page/login-signup', title: 'One page login and signup'}],
      },
      {
        label: 'Two signup and login forms',
        pages: [{path: '/one-page/login-signup-signup', title: 'One page login signup login'}],
      },
      {
        label: 'Several forms',
        pages: [{path: '/one-page/several-forms', title: 'One page several forms'}],
      },
      {
        label: 'Ajax signup one page (single page)',
        pages: [{path: '/one-page/ajax-signup', title: 'One page ajax signup'}],
      },
    ],
  },
  {
    label: 'Two-pages',
    testCases: [
      {
        label: 'Signup: email - password',
        pages: [
          {path: '/two-pages/signup-email-pass', title: 'Signup first page enter email'},
          twoPagesSignupSecondPage,
        ],
      },
      {
        label: 'Signup: username - password',
        pages: [
          {path: '/two-pages/signup-username-pass', title: 'Signup first page enter username'},
          twoPagesSignupSecondPage,
        ],
      },
      {
        label: 'Login: email - password',
        pages: [{path: '/two-pages/login-email-pass', title: 'Login with email and password'}, twoPagesLoginSecondPage],
      },
      {
        label: 'Login: username - password',
        pages: [
          {path: '/two-pages/login-username-pass', title: 'Login first page with username and password'},
          twoPagesLoginSecondPage,
        ],
      },
    ],
  },
  singleCaseGroup('iFrames', [
    {path: '/iframe/iframe-forms', title: 'Iframe forms'},
    {path: '/iframe/iframe-login', title: 'Iframe login'},
    {path: '/iframe/iframe-signup', title: 'Iframe signup'},
  ]),
  singleCaseGroup('Unsupported properties', [
    {path: '/unsupported-properties', view: 'unsupported-properties/index', title: 'Unsupported properties'},
  ]),
  singleCaseGroup('With position fixed', [{path: '/position-fixed/fixed-elements', title: 'Fixed elements'}]),
  {
    label: 'Change password',
    testCases: [
      {
        label: 'Change password with signup',
        pages: [
          {path: '/change-password/signup-email', title: 'Change password forms email'},
          {path: '/change-password/change-password', title: 'Change password forms'},
        ],
      },
      {
        label: 'Change password with login',
        pages: [
          {path: '/change-password-login/login-email', title: 'Login with email and password'},
          {path: '/change-password-login/change-password', title: 'Change password forms'},
        ],
      },
    ],
  },
  {
    label: 'Form.Other',
    testCases: [
      {
        label: 'Signup: email - password',
        pages: [{path: '/form-other/signup-email', title: 'Form other. Signup with email'}],
      },
      {
        label: 'Signup: username - password',
        pages: [{path: '/form-other/signup-username', title: 'Form other. Signup with username'}],
      },
      {
        label: 'Signup with email first page',
        pages: [{path: '/form-other/signup-email-first-page', title: 'Form other. Signup with email first page'}],
      },
      {
        label: 'Login: email - password',
        pages: [{path: '/form-other/login-email-second-page', title: 'Form other. Login with email second page'}],
      },
      {
        label: 'Signup with username first page',
        pages: [{path: '/form-other/signup-username-first-page', title: 'Form other. Signup with username first page'}],
      },
      {
        label: 'Login: username - password',
        pages: [{path: '/form-other/login-username-second-page', title: 'Form other. Login with username second page'}],
      },
      {
        label: 'Form fill: all inputs',
        pages: [{path: '/form-other/form-fill-inputs', title: 'Form other. Form fill inputs'}],
      },
    ],
  },
  {
    label: 'New password without old password',
    testCases: [
      {
        label: 'Signup with email',
        pages: [
          {path: '/new-pass-without-old/signup-email', title: 'Signup first page enter email'},
          newPassWithoutOldSecondPage,
        ],
      },
      {
        label: 'Signup with username',
        pages: [
          {path: '/new-pass-without-old/signup-username', title: 'Signup first page enter username'},
          newPassWithoutOldSecondPage,
        ],
      },
    ],
  },
  singleCaseGroup('Hidden elements', [{path: '/hidden-elements', title: 'Hidden elements'}]),
  {
    label: 'Login with 2fa',
    testCases: [
      {
        label: 'Page reload',
        pages: [
          {path: '/login-with-2fa/login-with-2fa-page-reload', title: 'Login with 2fa page reload'},
          {
            path: '/login-with-2fa/login-with-2fa-page-reload-2fa-page',
            view: 'login-with-2fa/login-with-2fa-page-reload-2',
            method: 'all',
            title: 'Login with 2fa page reload 2fa page',
          },
          {
            path: '/login-with-2fa/login-with-2fa-page-reload-password-page',
            view: 'login-with-2fa/login-with-2fa-page-reload-3',
            method: 'all',
            title: 'Login with 2fa page reload password page',
          },
        ],
      },
      {
        label: 'Single page (without reload)',
        pages: [{path: '/login-with-2fa/login-with-2fa-single-page', title: 'Login with 2fa single page'}],
      },
    ],
  },
  {
    label: 'Iframe testing',
    testCases: [
      {
        label: 'Iframe with form',
        pages: [{path: '/iframe-testing/iframe-with-form', title: 'Iframe testing'}],
      },
    ],
  },
];

const withDefaults = page => ({view: page.path.slice(1), method: 'get', ...page});

const testPages = [
  ...new Map(
    groups.flatMap(group => group.testCases.flatMap(testCase => testCase.pages)).map(page => [page.path, page]),
  ).values(),
].map(withDefaults);

module.exports = {groups, testPages};
