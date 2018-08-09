import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'AznVietKenny',
      level: 99,
      classes: 'monk',
      subclass: 'warrior'
    }
  } 
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
    
    <div id={"parent"}>
      <div className={"blue-bg"}>
        {/* <Header /> */}
        <h3>Name: {this.state.name}</h3>
        <h3>Level: {this.state.level}</h3>
        <h3>Class: {this.state.classes}</h3>
      </div>
    </div>
    
    )
  }
}

// --------------------------
var Header = function () {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>
  )
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
