import React from 'react'
import styled from 'styled-components'

const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
text-align:center;
`
const Table = styled.table`
position: relative;
left:25%;
display:block;
@media (max-width: 1280px ){
  left:0%;
}
`
export const TableDataPembelian = () => {
  return (
    <Table className="table table-bordered">
      <Thead>
        <tr>
          <th>Tanggal dan Waktu</th>
          <th>Nama Supplier</th>
          <th>Informasi Pembelian</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </Thead>
      <tbody>
        <tr>
          <td>{'27 apri 2021'}</td>
          <td>{'PT. Jaya Abadi'}</td>
          <td>
            <table>
              <tr>
                <th>Jenis</th>
                <td>: {'Botol'}</td>
              </tr>
              <tr>
                <th>Qty</th>
                <td>: {'27'} {'Pcs'} </td>
              </tr>
              <tr>
                <th>Harga</th>
                <td>: {'1200'} {'Pcs'} </td>
              </tr>
              <tr>
                <th>Ppn</th>
                <td>: {'10'} {'%'} </td>
              </tr>
            </table>
          </td>
          <td>{'35640'}</td>
          <td>{'Belum Lunas'}</td>
        </tr>
      </tbody>
    </Table>
  )
}
