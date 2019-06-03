import React from 'react'
//import { CardElement, injectStripe, Elements } from 'react-stripe-elements'
import CardForm from './CardForm'
import { Elements } from 'react-stripe-elements'

//const CardForm = injectStripe(_CardForm)

class CheckoutForm extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { complete: false }
  //   //this.submit = this.submit.bind(this)
  // }

 

  render() {
    //if (this.state.complete) return <h1>Purchase Complete!</h1>

    return (
        <div className='checkout'>
          <h1>Available Elements</h1>
            <Elements>
              <CardForm />
            </Elements>
        </div>
    )
  }



}

export default CheckoutForm