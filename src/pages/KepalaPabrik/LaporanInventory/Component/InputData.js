import React, { useState } from 'react'
import styled from 'styled-components'
import Datepicker from 'react-datepicker'
import '../../../../App.css'


const InputQTY = styled.input`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
} 
`

const TextKeterangan = styled.textarea`
resize : none;
`

export const InputData = () => {

  const [date, setDate] = useState(new Date())

  return (
    <>
      <table className="table">
        <tr>
        <span>Jenis</span>
        </tr>
        <tr>

            <span style={{ marginLeft: '50px' }} >
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                Botol
            </label>
            </span>
            <span style={{ marginLeft: '100px' }} >
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                Cup
            </label>
          </span>
        </tr>
      </table>

      <table className="table">
        <tr>
          <span>Jumlah Karton</span>
        </tr>
        <tr>
          <input type="text" className="form-control" />
        </tr>
      </table>

      <table className="table">
        <tr>
          Jumlah Sedotan
      </tr>
        <tr>
        <input type="text" className="form-control" />
        </tr>
      </table>

      <table className="table">
        <tr>
          <span>Jumlah Botol/Cup</span>
      </tr>
        <tr>
          <input type="text" className="form-control" />
        </tr>
      </table>
    </>
  )
}
