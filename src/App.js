import Reakt from 'react';
import './App.css';

class Timer extends Reakt.Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0}
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentDidUpdate() {
    clearInterval(this.interval)
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>
  }
}
export default Timer;
 