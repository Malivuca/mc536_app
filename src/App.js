import React from 'react'
import './index.scss'
import './App.scss'
import { getAllPF , getAuxRecPF , getAuxBusPF , getAuxOferecidos, getEmpOferecidos, getQuantAuxOferecidos } from './backend/requisitions'
import { createAux , createVagaEmp } from './backend/inserts'

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
        tipo_vaga: "",
        n_vagas: 0,
        local: "",
        horario: "",
        contato_entrevista: "",
        experiencia_exigiga: "",
        remuneracao: 0
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

  updateCreateAux = (saving = false) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.creatingAux = !saving
      return newState
    })

    if (saving)
      createAux(this.state.propsAux)
  }

  updateCreateEmp = (saving = false) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.creatingEmp = !saving
      return newState
    })

    if (saving)
      createVagaEmp(this.state.propsEmp)
  }

  changeProp = (typeProp, fieldProp, value) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState[typeProp][fieldProp] = value
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
          <button onClick={() => this.updateCreateEmp()}>Criar vaga de emprego</button>
          <button onClick={() => this.updateCreateAux()}>Criar auxílio</button>
        </section>

        {this.state.creatingAux && <form submit = {() => this.updateCreateAux(true)}>
          <label>Valor mensal: </label>
          <input onChange={(value) => this.changeProp("propsAux", "valor_mensal", value.target.value)}/>
          <label>Valor total: </label>
          <input onChange={(value) => this.changeProp("propsAux", "valor_total", value.target.value)}/>
          <label>Duração (em meses): </label>
          <input type = "number" onChange={(value) => this.changeProp("propsAux", "duracao", value.target.value)}/>
          <input type="submit" value="Submit" />
        </form>}

        {this.state.creatingEmp && <form submit = {() => this.updateCreateEmp(true)}>
          <label>Tipo da vaga: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "tipo_vaga", value.target.value)}/>
          <label>Número de vagas: </label>
          <input type = "number" onChange={(value) => this.changeProp("propsEmp", "n_vagas", value.target.value)}/>
          <label>Local: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "local", value.target.value)}/>
          <label>Horário: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "horario", value.target.value)}/>
          <label>Contato para entrevista: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "contato_entrevista", value.target.value)}/>
          <label>Experiência exigida: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "experiencia_exigida", value.target.value)}/>
          <label>Remuneração: </label>
          <input onChange={(value) => this.changeProp("propsEmp", "remuneracao", value.target.value)}/>
          <input type="submit" value="Submit" />
        </form>}
      </div>
    )
  }
}
