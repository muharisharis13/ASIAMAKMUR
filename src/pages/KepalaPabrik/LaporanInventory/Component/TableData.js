import React from 'react'
import styled from 'styled-components'


const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
`

export const TableData = () => {
  return (
    <table className="table table-bordered">
      <Thead>
        <tr>
          <th>Tanggal Dan Waktu</th>
          <th>Jumlah Sedotan</th>
          <th>Jumlah Kardus</th>
          <th>Jumlah Botol</th>
          <th>Jumlah Cup</th>
          <th>Jumlah Lakban</th>
          <th>Jumlah Kardus</th>

        </tr>
      </Thead>
      <tbody>
        <tr>
          <td>
            07 Feb 2021
          </td>

          <td>
            200 pcs
          </td>
          <td>
            150 pcs
          </td>
          <td>
            150 pcs
          </td>
          <td>
            150 pcs
          </td>
          <td>
            150 pcs
          </td>
          <td>
            150 pcs
          </td>

        </tr>

      </tbody>
    </table>
  )
}
