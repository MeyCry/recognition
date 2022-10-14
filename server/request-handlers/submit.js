const app = require('../app');

app.post('/submit', function (req, res) {
  res.render('submit', {title: 'Recognition: Submit'});
  /*
  <form class="form-inline my-2 my-lg-0 offset-md-7 js-submit" method="post" action="/submit">
      <input class="form-control mr-sm-2" type="email" placeholder="Email" aria-label="email">
      <input class="form-control mr-sm-2" type="password" placeholder="Password" aria-label="password">
      <button class="btn btn-primary my-2 my-sm-0" id="nav-login" type="submit">Login</button>
  </form>
  */
});

app.get('/submit', function (req, res) {
  res.render('submit', {title: 'Recognition: Submit'});
});
