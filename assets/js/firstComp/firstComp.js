import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div>
      <h1>Welcome</h1>
      <h2>Tfinity</h2>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
