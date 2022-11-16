import React from 'react'
import './index.scss'
import './App.scss'
import { getAllPF , getAuxRecPF , getAuxBusPF , getAuxOferecidos, getEmpOferecidos, getQuantAuxOferecidos } from './backend/requisitions'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      list: [],
      creatingAux: false,
      creatingEmp: false,
      propsAux: {
        valor_mensal: 0,
        valor_total: 0,
        duracao: 0
      },
      propsEmp: {

      }
    }
  }

  changeList = (getNewList) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.list = getNewList()
      return newState
    })
  }

  createEmp = () => {

  }

  createAux = () => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.createAux = true
      return newState
    })
  }

  changeProp = (typeProp, fieldProp, value) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState[typeProp][fieldProp] = value
      return newState
    })
  }

  saveAux = () => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.createAux = false
      return newState
    })
  }

  render() {
    return (
      <div className="container">
        <section className='menu'>
          <button onClick={() => this.changeList(getAllPF)}>Pessoas físicas</button>
          <button onClick={() => this.changeList(getAuxRecPF)}>Relação de pessoas físicas e auxílios recebidos</button>
          <button onClick={() => this.changeList(getAuxBusPF)}>Relação de pessoas físicas e auxílios buscados</button>
          <button onClick={() => this.changeList(getEmpOferecidos)}>Vagas de emprego oferecidas</button>
          <button onClick={() => this.changeList(getQuantAuxOferecidos)}>Quantidade de auxílios oferecidos</button>
          <button onClick={() => this.changeList(getAuxOferecidos)}>Auxílios oferecidos</button>
          <button onClick={() => this.createEmp()}>Criar vaga de emprego</button>
          <button onClick={() => this.createAux()}>Criar auxílio</button>
        </section>

        <form submit = {() => this.saveAux()}>
          <label>Valor mensal: </label>
          <input onChange={(value) => this.changeProp("propsAux", "valor_mensal", value.target.value)}/>
          <label>Valor total: </label>
          <input onChange={(value) => this.changeProp("propsAux", "valor_total", value.target.value)}/>
          <label>Duração (em meses): </label>
          <input type = "number" onChange={(value) => this.changeProp("propsAux", "duracao", value.target.value)}/>
        </form>
      </div>
    )
  }
}
