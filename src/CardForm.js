// https://github.com/stripe/react-stripe-elements/issues/38


import React from 'react'
import { injectStripe } from 'react-stripe-elements'

import AddressSection from './AddressSection'
import CardSection from './CardSection'


class CardForm extends React.Component {
  
  // constructor(props) {
  //   super(props)
  //   this.submit = this.submit.bind(this)
  // }

  // async submit(ev) {
  //   // User clicked submit
  // }
  // Create token to securely transmit card info
  handleSubmit = (ev) => {
    ev.preventDefault()
    
    // this.props.stripe.createToken({ name: 'Tesset Uzer'}).then(({token}) => {
    //   if (result.error)
    //   console.log('Received Stripe token:', token)
    // })
    this.props.stripe.createToken( {name: 'Tesset Uzer'}).then(function(result) {
      if (result.error) {
        console.error('ERROR:', result.error.message)
      } else {
        console.log('Received Stripe token:', result.token)
      }
    })

    //console.log('submit!')
    //let { token } = this.props.stripe.createToken({ name: 'Test User' })
    //this.props.stripe.createToken({ type: 'card', name: 'Test User'})
    //console.log(token.id)
    // let response = fetch('/charge', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'text/plain'}
    //})

    // if (response.ok)  {
    //   // TESTING
    //   console.log('Purchase Complete!')
    //   this.setState({ complete: true })
    // }
  } // submit

  render() {
    //if (this.setState.complete) return (<h1>FORM SUBMITTED!</h1>)
    return (
        <form onSubmit={this.handleSubmit}>
          <p>Would you like to complete the purchase, sir?</p>
            <AddressSection />
            <CardSection />
          <button>Send</button>
        </form>
    )
  }
}

export default injectStripe(CardForm)