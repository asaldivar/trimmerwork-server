const paymentsRouter = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

paymentsRouter.route('/charge')
	.post((req, res) => {
		const amount = 2500

	  stripe.customers.create({
	     email: req.body.email,
	    source: req.body.token
	  })
	  .then(customer =>
	    stripe.charges.create({
	      amount,
	      description: "$25 Featured Job Post",
				currency: "usd",
				customer: customer.id
	    }))
	  .then(charge => {
	  	res.status(200).json({ message: 'success, card charged' });
	  });
	});

module.exports = paymentsRouter