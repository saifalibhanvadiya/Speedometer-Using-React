// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(prevState)
        return {speed: prevState.speed + 10}
      })
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(prevState)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="Container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h2 className="subtitle">Speed is {speed}mph</h2>
        <p className="peregraph">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button className="btn btn-blue" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn btn-trasperant" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
