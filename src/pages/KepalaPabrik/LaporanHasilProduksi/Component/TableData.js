import React from 'react'
import styled from 'styled-components'


const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
`

export default function TableData() {
  return (
    <table className="table table-bordered">
      <Thead>
        <tr>
          <th>No</th>
          <th>Tgl / Waktu</th>
          <th>Item's</th>
          <th>QTY</th>
          <th>Nama</th>
          <th>Keterangan</th>

        </tr>
      </Thead>
      <tbody>
        <tr>
          <td>
            1
          </td>
          <td>
            15 jan 2021 / 12.40
          </td>
          <td>
            Cup
          </td>
          <td>
            2500 pcs
          </td>
          <td>
            Budiman
          </td>
          <td>
            2 cup rusak
          </td>

        </tr>

      </tbody>
    </table>
  )
}
