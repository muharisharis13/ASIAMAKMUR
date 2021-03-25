import React from 'react'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'


const BtnPaginationLeft = styled(LeftCircleOutlined)`
font-size:30px;

`

const BtnPaginationRight = styled(RightCircleOutlined)`
font-size:30px;

`




export const Pagination = () => {
  return (
    <table style={{ position: 'relative', left: '40%' }}>
      <tr>
        <td>
          <BtnPaginationLeft className="btn" />
        </td>
        <td>
          1 of 99
        </td>
        <td>
          <BtnPaginationRight className="btn" />
        </td>
      </tr>
    </table>
  )
}
