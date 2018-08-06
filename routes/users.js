var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {id: 1, firstName: 'Rafael', lastName: 'Lopez'},
    {id: 2, firstName: 'Corrie', lastName: 'Johnson'},
    {id: 3, firstName: 'Trevor', lastName: 'James'}
  ];

  res.json(users);
});

module.exports = router;
