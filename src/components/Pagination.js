import React from 'react'
import styled from 'styled-components'
import { BtnPag } from '../pages/styles'

const Table = styled.table`
position: relative;
left:40%;
@media (max-width: 1280px ){
  left:25%;
}
`


export const Pagination = () => {
  return (
    <Table style={{ padding: '0px 10px' }}>
      <tr >
        <td>
          <BtnPag className="btn">
            Prev
          </BtnPag>
        </td>
        <td>
          1 of 2
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
