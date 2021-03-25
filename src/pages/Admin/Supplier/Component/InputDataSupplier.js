import React from 'react'

export const InputDataSupplier = () => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>
            Nama Supplier
          </th>
        </tr>
        <tr>
          <td>
            <input type="text" className="form-control" />
          </td>
        </tr>
      </table>
      <table className="table">
        <tr>
          <th>
            Alamat
          </th>
        </tr>
        <tr>
          <td>
            <input type="text" className="form-control" />
          </td>
        </tr>
      </table>
      <table className="table">
        <tr>
          <th>
            No. Telepon
          </th>
        </tr>
        <tr>
          <td>
            <input type="text" className="form-control" />
          </td>
        </tr>
      </table>
      <table className="table">
        <tr>
          <td>
            <span className="btn btn-primary">
              Tambahkan
            </span>
          </td>
        </tr>
      </table>
    </div>
  )
}
