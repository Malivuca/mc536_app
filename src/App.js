import React from 'react'
import './index.scss'
import './App.scss'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  showAllPF() {
    this.setState((prevState) => {
      const newState = { ...prevState }
      newState.count = newState.count + 1
      return newState
    })
  }

  render() {
    const c = this.state.count
    return (
      <div className="container">
        <section className='menu'>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
          <button onClick={this.showAllPF}>Listar pessoas físicas</button>
        </section>

        <table>
          <tr>
            <th>ID</th>
            <th>Info</th>
          </tr>
          <tr>
            <td>41421</td>
            <td>Ola porra</td>
          </tr>
        </table>
      </div>
    )
  }
}
