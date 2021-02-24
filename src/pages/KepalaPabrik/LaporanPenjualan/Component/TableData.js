import React from 'react'
import styled from 'styled-components'
import { RowTable } from '../../../styles'


const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
text-align:center;
`

export const TableData = () => {
  return (
    <table className="table" >
      <Thead>
        <tr>
          <th>Tanggal</th>
          <th>Jenis</th>
          <th>Jumlah</th>
          <th>Harga</th>
          <th>Total</th>
          <th>Informasi Customer</th>
          <th>Catatan</th>


        </tr>
      </Thead>

      <tr>
        <td>
          07 Feb 2021
          </td>
        <td>
          <span>
            Botol
            </span>
        </td>
        <td>
          <span>
            200
            </span>
        </td>
        <td>
          <span>
            12000
            </span>
        </td>
        <td>
          <span>
            120000
            </span>
        </td>
        <td>
          <tr>
            <td>
              Kepada
            </td>
            <td>
              : Muharis
            </td>
          </tr>
        </td>

        <td>
          Produk Sudah Di hitung Ulang semua total 600 pcs tanpa rusak
          </td>
      </tr>
    </table>
  )
}