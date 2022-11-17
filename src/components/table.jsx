import React from 'react'

// {"id":1,"valor_mensal":769.33,"valor_total":4714.07,"duracao_meses":12}
// {"id":1,"nome":"Anissa Paolone","cpf":"954.766.333-35","email":"apaolone0@ameblo.jp","federacao":"CZ","renda_familiar":"R$63.22","vaga_emprego":null}

const auxiliosPrint = ['ID', 'Valor Mensal', 'Duracao Meses']
const auxiliosFields = ['id', 'valor_mensal', 'duracao_meses']
const pessoasPrint = ['ID', 'Nome', 'CPF', 'E-mail', 'Federação', 'Renda Familiar', 'Vaga Emprego']
const pessoasFields = ['id', 'nome', 'cpf', 'email', 'federacao', 'renda_familiar', 'vaga_emprego']

export default function Table({ type, data }) {
  if (type === 'auxilios')
    return (
      <table>
        <tr>
          {auxiliosPrint.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {data.map((auxilio) => (
          <tr>
            {auxiliosFields.map((field) => (
              <td>{auxilio[field]}</td>
            ))}
          </tr>
        ))}
      </table>
    )
  else if (type === 'pessoas')
    return (
      <table>
        <tr>
          {pessoasPrint.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {data.map((pessoa) => (
          <tr>
            {pessoasFields.map((field) => (
              <td>{pessoa[field]}</td>
            ))}
          </tr>
        ))}
      </table>
    )
}
