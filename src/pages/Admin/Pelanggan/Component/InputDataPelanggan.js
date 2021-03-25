
import React from 'react'

export const InputDataPelanggan = () => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>
            Nama Pelanggan
          </th>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="Nama Pelanggan" className="form-control" />
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
            <textarea type="text" placeholder="Alamat Lengkap" className="form-control" />
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
            <input type="text" placeholder="No. Telepon" className="form-control" />
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
