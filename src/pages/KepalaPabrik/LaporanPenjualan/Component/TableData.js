import React, { useContext } from 'react'
import styled from 'styled-components'
import { ModalAddPicture } from '../../../../components/Modal/ModalAddPicture'
import { Context } from '../../../../components/Store'
import { RowTable } from '../../../styles'


const Thead = styled.thead`
background-color:#6AB8EE;
color:white;
text-align:center;
`

export const TableData = () => {

  const { dispatch, show } = useContext(Context)

  const handleShow = () => {
    dispatch({
      type: 'SHOW',
      show: !show
    })
  }

  return (
    <>
      <ModalAddPicture
        handleShow={handleShow}
      />
      <table className="table table-bordered" >
        <Thead>
          <tr>
            <th>Tanggal</th>
            <th>Info Produk</th>
            <th>Informasi Customer</th>
            <th>Catatan</th>
            <th>Status</th>
            <th>Take Action</th>


          </tr>
        </Thead>
        <tbody>
          <tr>
            <td style={{ width: 100 }}>
              <span>07 Feb 2021</span>
            </td>
            <td style={{ width: 200 }}>
              <table>
                <tr>
                  <th>Jenis</th>
                  <td>: <span> Botol</span></td>
                </tr>
                <tr>
                  <th> Jumlah </th>
                  <td>: <span>200</span></td>
                </tr>
                <tr>
                  <th>harga</th>
                  <td>: <span>11.000</span> </td>
                </tr>
                <tr>
                  <th>SubTotal</th>
                  <td>: <span>2.200.000</span> </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>: <span>2.200.000</span> </td>
                </tr>
              </table>
            </td>
            <td style={{ width: 400 }}>
              <table>
                <tr>
                  <th>
                    Kepada
              </th>

                <td>
                    : Muharis
              </td>
                </tr>
                <tr>
                  <th>
                    Alamat
              </th>
                  <td>
                    : jln. Lengkuas No 38 b Tebing Tinggi Sumatera Utara
              </td>
                </tr>

              </table>

            </td>

            <td style={{ width: 200 }}>
              Produk Sudah Di hitung Ulang semua total 600 pcs tanpa rusak
            </td>
            <td>
              Belum Lunas
            </td>
            <td>
              <span className="btn btn-primary"
                onClick={handleShow}
              >
                Add Image
              </span>
            </td>
        </tr>

        </tbody>

      </table>
    </>
  )
}