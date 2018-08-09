import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'AznVietKenny',
      health: 56,
      lowerHealth: 'danger-red',
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
      <div className={`blue-bg ${(this.state.health <= 55) ? this.state.lowerHealth : ''}`}>
        {/* <Header /> */}
        <h3>Name: {this.state.name}</h3>
        <h3>Level: {this.state.level}</h3>
        <h3>Class: {this.state.classes}</h3>

        <img src="https://banner2.kisspng.com/20180404/gde/kisspng-goku-dragon-ball-z-dokkan-battle-trunks-dragon-bal-goku-5ac564cd8919d7.8279094215228858375616.jpg"/>
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
