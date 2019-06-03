import React, { Component } from 'react'
//import { render } from 'react-dom'
import { StripeProvider } from 'react-stripe-elements'

import CheckoutForm from './CheckoutForm'

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_JJbMfkIUGHOHwr8xwxByQv1A00rfXJMkHx'>
      
        <div className="bar">
            <CheckoutForm />
        </div>
      </StripeProvider>
    )
  }
}

export default App
