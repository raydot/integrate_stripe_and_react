const app = require('express')()
const stripe = require('stripe')(process.env.SK_TEST_KEY)
//const cors = require('cors')

app.use(require('body-parser').text())

app.post('/charge', async(req, res) => {
  console.error('CHARGE!')
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'DAVE RULES EXAMPLE FROM SERVER CHARGES',
      source: req.body
    })

    res.json({ status })
  } catch (err) {
    res.status(500).end()
  }
})

app.get('/test', function(req, res, next) {
  res.json({msg: 'Hello from the server!'})
})

app.listen(9000, () => console.log('Stripe backend test running on :9000'))