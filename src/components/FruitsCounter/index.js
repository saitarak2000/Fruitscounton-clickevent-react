// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  Mango = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  Banana = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1>
            Bob ate <span>{mangocount}</span> mangoes <span>{bananacount}</span>{' '}
            bananas
          </h1>
          <div className="fruits">
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="submit" onClick={this.Mango}>
                Eat Mango
              </button>
            </div>
            <div className="item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="submit" onClick={this.Banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
