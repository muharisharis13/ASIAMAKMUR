import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const BtnSearch = styled(SearchOutlined)`
padding:5px 10px;
border-radius : 0px 10px 10px 0px;
float:left;
position:relative;
left:-2px;
color:white;
`

const FieldInput = styled.input`
border-radius : 10px 0px 0px 10px;
position:relative;
`

export const Search = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <FieldInput type="text" placeholder="Cari Nama" className="form-control" />
          </td>
          <td>
            <BtnSearch className="btn btn-primary" />
          </td>
        </tr>
      </table>
    </div>
  )
}
