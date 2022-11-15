import React from 'react';
import './index.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  showAllPF() {
    this.setState(prevState => {
      const newState = {...prevState}
      newState.count = newState.count + 1
      return newState
    })
  }

  render() {
    const c = this.state.count
    return (
      <div>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        <button onClick={this.showAllPF}>Listar pessoas físicas</button>
      </div>
    );
  }
}