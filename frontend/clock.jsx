import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.title = "Time";
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.setId);
    this.setId = 0;
  }

  componentDidMount() {
    this.setId = setInterval(this.tick, 100);
  }

  render() {
    const title = this.title;
    const date = this.state.date.toDateString();
    const time = this.state.date.toLocaleTimeString();
    return (
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
    );
  }
}

export default Clock;
