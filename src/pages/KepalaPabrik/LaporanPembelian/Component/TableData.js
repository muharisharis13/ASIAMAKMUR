import React from 'react'
import styled from 'styled-components'


const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
text-align:center;
`
const Table = styled.table`
position: relative;
left:50%;
@media (max-width: 1280px ){
  left:0%;
}
`

export default function TableData() {
  return (
    <Table className="table table-bordered">
      <Thead>
        <tr>
          <th>Tanggal Dan Waktu</th>
          <th>Deskripsi</th>
          <th>
            Status
          </th>

        </tr>
      </Thead>
      <tbody>
        <tr>
          <td>
            15 jan 2021 / 12.40
          </td>
          <td style={{ width: '60%' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam unde repudiandae labore modi molestias dolorem corporis quaerat rem obcaecati ullam?
          </td>
          <td>
            Pending
          </td>


        </tr>

      </tbody>
    </Table>
  )
}
