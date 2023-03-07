// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const RandomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + RandomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="head">Count {count}</h1>
        <p className="head2">Count is {displayText}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="describe">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
