import React from 'react'
import styled from 'styled-components'

const BtnEdit = styled.span`
padding:5px 40px;
`
const BtnHapus = styled.span`
padding:5px 32px;
`

const Th = styled.th`
text-align:center;
color:white;
`

export const TableDataSupplier = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr style={{ background: '#6AB8EE' }}>
          <Th>ID Supplier</Th>
          <Th>Nama Supplier</Th>
          <Th>Alamat</Th>
          <Th>No. Telepon</Th>
          <Th>Take Action</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SUP0001</td>
          <td>PT. Asia Aja</td>
          <td>Jln. Deblod Sundoro lk. 2 Tebing tinggi</td>
          <td>0812-6033-3120</td>
          <td>
            <div>
              <BtnEdit className="btn btn-primary">
                Edit
            </BtnEdit>
            </div>
            <div style={{ marginTop: '10px' }}>
              <BtnHapus className="btn btn-danger">
                Hapus
            </BtnHapus>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
