var express = require('express');
var router = express.Router();

/* GET rating listing. */
router.get('/', function(req, res, next) {
  const rating = [
    {id: 1, name: 'Rafael Lopez', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 2, name: 'Corrie Johnson', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 3, name: 'Trevor James', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'},
    {id: 4, name: 'Megan Brown', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dictum eros. Pellentesque ac enim ex.'}
  ];

  res.json(rating);
});

module.exports = router;
