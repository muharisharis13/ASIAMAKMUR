import React from 'react'
import styled from 'styled-components'


const Table = styled.table `
width:250px;
`
const BtnPag = styled.span `
background-color: #1687a7;
font-weight:700;
color:white;

`

export default function Pagination() {
  return (
    <Table  style={{marginLeft:'40%'}}>
      <tr>
        <td>
          <BtnPag className="btn">
            Prev
          </BtnPag>
        </td>
        <td>
          1
        </td>
        <td>
           of 
        </td>
        <td>
          2
        </td>
        <td>
          <BtnPag className="btn">
            Next
          </BtnPag>
        </td>
      </tr>
    </Table>
  )
}
