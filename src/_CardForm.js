// https://github.com/stripe/react-stripe-elements/issues/38


import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'


class _CardForm extends React.Component {
  
  // constructor(props) {
  //   super(props)
  //   this.submit = this.submit.bind(this)
  // }

  // async submit(ev) {
  //   // User clicked submit
  // }
  // Create token to securely transmit card info
  submit = (ev) => {
    ev.preventDefault()
    //console.log('submit!')
    //let { token } = this.props.stripe.createToken({ name: 'Test User' })
    this.props.stripe.createToken({ type: 'card', name: 'Test User'})
    //console.log(token.id)
    let response = fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain'}
    })

    if (response.ok)  {
      // TESTING
      console.log('Purchase Complete!')
      this.setState({ complete: true })
    }
  } // submit

  render() {
    if (this.setState.complete) return (<h1>FORM SUBMITTED!</h1>)
    return (
        <form>
          <p>Would you like to complete the purchase, sir?</p>
            <CardElement />
          <button onClick={ this.submit }>Send</button>
        </form>
    )
  }
}

export default injectStripe(_CardForm)