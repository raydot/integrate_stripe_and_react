class PaymentRequestForm extends React.Component {
  constructor (props) {
    super(props)

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000
      }
    })

    paymentRequest.on('token', ({ complete, token, ...data }) =>{
      console.log('Received Stripe token:', token)
      console.log('Received customer info:', data)
      complete('Success!')
    })

    paymentRequest.canMakePayment().then((result) => {
      this.setState({ canMakePayment: !!result })
    })

    this.state = {
      canMakePayment: false,
      paymentRequest
    }
  } //constructor

  render() {
    return this.state.canMakePayment 
      ? (
        <PaymentRequestButtonElement
          paymentRequest={this.state.paymentRequest}
          className='PaymentRequestButton'
          style={{
            // https://stripe.com/docs/elements/payment-request-button#styling-the-element
            PaymentRequestButton: {
              theme: 'light',
              height: '64px'
            }
          }}
        />
      ) : null
  }
} //class

export default injectStripe(PaymentRequestForm)