import axios from 'axios'

const PORT = 4000

export const getAllPF = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

export const getAuxRecPF = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

export const getAuxBusPF = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

// -- Relação de todos os governos com suas ofertas de vagas de emprego
export const getEmpOferecidos = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

// -- Relação de todos os governos com a quantidade de auxilios oferecidos
export const getQuantAuxOferecidos = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

// -- Relação de todos os governos com seus auxílios oferecidos
export const getAuxOferecidos = () => axios
  .get(`http://localhost:${PORT}/URI`)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })