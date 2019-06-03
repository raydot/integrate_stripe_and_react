//AddressSection.js
import React from 'react'
//import { AddressSection } from 'react-stripe-elements'

class AddressSection extends React.Component {
  render() {
    return (
      <label>
        
          Address: 
          <input type="text" name="address" placeholder="address" />
        
      </label>
    )
  }
}

export default AddressSection