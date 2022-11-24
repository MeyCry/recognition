const fs = require('fs');
const path = require('path');
const app = require('../app');

const filePath = path.join(__dirname, './secret-users.json');

app.get('/get-users', (req, res) => {
  const usersTxt = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
  const users = JSON.parse(usersTxt);
  if (!users || !users.items || !users.items.length) {
    res.status(404).send('No users found');
    return;
  }

  const freeUser = users.items.find(user => user.isBusy === false);
  if (!freeUser) {
    res.status(404).send('No free users found');
    return;
  }
  const updatedUsers = users.items.map(user => {
    if (user.username === freeUser.username) {
      return {
        ...user,
        isBusy: true,
      };
    }
    return user;
  });

  users.items = updatedUsers;
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.json(freeUser);
});

app.put('/free-user', (req, res) => {
  const userName = req.body.username;
  if (!userName) {
    res.status(400).send('No username provided');
    return;
  }
  const usersTxt = fs.readFileSync(filePath, {encoding: 'utf8'});
  const users = JSON.parse(usersTxt);

  if (!users || !users.items || !users.items.length) {
    res.status(404).send('No users found');
    return;
  }

  const updatedUsers = users.items.map(user => {
    if (user.username === userName) {
      return {
        ...user,
        isBusy: false,
      };
    }
    return user;
  });
  users.items = updatedUsers;

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({success: true});
});
