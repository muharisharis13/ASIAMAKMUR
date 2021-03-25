import React, { useState } from 'react'
import styled from 'styled-components'
import Datepicker from 'react-datepicker'
import '../../../../App.css'
import { BtnProses } from '../../../styles'


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

export const InputDataInventory = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Bahan Baku Yang Keluar
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <table className="table">
            <tr>
              <th>
                Jenis
              </th>
            </tr>
            <tr>
              <td>
                <select name="Jenis" id="Jenis" className="form-control">
                  <option value="Botol">Botol</option>
                  <option value="Cup">Cup</option>
                </select>
              </td>
            </tr>

          </table>
          <table className="table">
            <tr>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>
                Jumlah Kardus
              </th>
            </tr>
            <tr>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>
                Jumlah Sedotan
              </th>
            </tr>
            <tr>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>
                Jumlah Lakban
              </th>
            </tr>
            <tr>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>
                Jumlah Lid
              </th>
            </tr>
            <tr>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </table>
          {/* <table className="table">


            <tr>
              <td>
                <span>
                  Jumlah Botol / Cup
              </span>
              </td>
              <td>
                :
            </td>
              <td >
                <input type="text" className="form-control" />
              </td>
            </tr>

          </table> */}

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 ">
          <BtnProses className="btn btn-primary" style={{ float: 'right' }}>
            Tambahkan
          </BtnProses>
        </div>
      </div>

    </div>
  )
}
