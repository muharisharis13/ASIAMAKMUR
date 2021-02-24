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
    <table style={{ width: '500px' }}>
      <tr>
        <td>
          <span>Nama</span>
        </td>
        <td>
          :
      </td>
        <td>

          <input type="text" className="form-control" value="Budiman" disabled />
        </td>
      </tr>
      <tr>
        <td>
          <span>Tanggal</span>
        </td>
        <td>
          :
      </td>
        <td>

          <Datepicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="dd MMM yyyy"
            disabled
          />

        </td>
      </tr>
      <tr>
        <td>
          <span>Items</span>
        </td>
        <td>
          :
      </td>
        <td>

          <select className="form-control">
            <option>
              Cup
            </option>
            <option>
              Botol
            </option>
          </select>

        </td>
      </tr>
      <tr>
        <td>
          <span>
            Qty
        </span>
        </td>
        <td>
          :
      </td>
        <td>

          <InputQTY
            type="number"
            placeholder="QTY"
            className="form-control" />


        </td>
      </tr>
      <tr>
        <td>
          <span>
            Keterangan
        </span>
        </td>
        <td>
          :
      </td>
        <td>

          <textarea
            className="form-control"
            placeholder="Keterangan"
            rows={5}
            style={{ resize: 'none' }}
          >
          </textarea>

        </td>
      </tr>
    </table>
  )
}
