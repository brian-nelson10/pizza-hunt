const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('../api/pizza-routes.js');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

router.use('/comments', commentRoutes)

module.exports = router;