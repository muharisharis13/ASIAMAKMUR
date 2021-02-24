import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BtnSearch, InputSearch } from '../pages/styles';

export const Search = () => {
  return (
    <table>
      <tr>
        <td>

          <InputSearch
            type="text"
            name="search"
            className="form-control"
            placeholder="Search"
            style={{ float: 'right' }}
          />

        </td>
        <td>
          <BtnSearch className="btn btn-primary">
            <FaSearch />
          </BtnSearch>
        </td>
      </tr>
    </table>
  )
}
