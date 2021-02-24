import React, { useContext, useState, useEffect } from 'react'
import Datepicker from 'react-datepicker'
import { BtnProses, InputQTY } from '../../../styles'
import { FaPrint } from "react-icons/fa";
import { Context } from '../../../../components/Store'
import { format, parseISO } from 'date-fns'

export const InputData = () => {

  const { data2, dispatch } = useContext(Context)
  const [data, setData] = useState({
    tanggal: new Date(),
    qty: null,
    jenis: '',
    harga: 12000,
    total: null,
    kepada: '',
    alamat: '',
    catatan: ''
  })

  const onChangeValue = (e, value) => {
    const value2 = e.target.value
    if (value === 'tanggal') {
      setData({ ...data, tanggal: value2 })
    }
    else if (value === 'qty') {
      setData({ ...data, qty: value2 })
    }
    else if (value === 'jenis') {
      setData({ ...data, jenis: value2 })
    }
    else if (value === 'total') {
      setData({ ...data, total: 0 })
    }
    else if (value === 'kepada') {
      setData({ ...data, kepada: value2 })
    }
    else if (value === 'alamat') {
      setData({ ...data, alamat: value2 })
    }
    else if (value === 'catatan') {
      setData({ ...data, catatan: value2 })
    }
  }

  const Tambahkan = () => {
    console.log('aaaa')
    dispatch({
      type: 'DATA',
      data2: data
    })
  }
  console.log(data2)
  return (
    <>
      <div className="row">
        <div className="col-md-6">

          <table style={{ width: '300px' }}>
            <tr>
              Tanggal dan Waktu
            </tr>
            <tr>
              <td>
                <Datepicker
                  selected={data.tanggal}
                  dateFormat="dd MMMM yyyy"
                  disabled
                  className="form-control"
                />

              </td>
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Qty
            </tr>
            <tr>
              <InputQTY
                value={data.qty}
                onChange={(e) => onChangeValue(e, 'qty')}
                type="number"
                className="form-control" />
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Jenis
            </tr>
            <tr>
              <select
                onClick={(e) => onChangeValue(e, 'jenis')}
                className="form-control">
                <option value="Botol">
                  Botol
                </option>
                <option value="Cup">
                  Cup
                </option>
              </select>
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              @ (Harga)
            </tr>
            <tr>
              <input
                disabled
                type="number"
                className="form-control"
                value={data.harga}
              />
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Total
            </tr>
            <tr>
              <input
                disabled
                value={data.total = data.harga * data.qty}
                type="number"
                className="form-control" />
            </tr>
          </table>
        </div>

        <div className="col-md-6">
          <table style={{ width: '300px' }}>
            <tr>
              Kepada
            </tr>
            <tr>
              <input
                type="text"
                className="form-control"
                value={data.kepada}
                onChange={(e) => onChangeValue(e, 'kepada')}
              />
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Alamat
            </tr>
            <tr>
              <textarea
                rows="3"
                className="form-control"
                value={data.alamat}
                onChange={(e) => onChangeValue(e, 'alamat')}
              >

              </textarea>
            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Catatan
            </tr>
            <tr>
              <textarea
                rows="5"
                className="form-control"
                value={data.catatan}
                onChange={(e) => onChangeValue(e, 'catatan')}
              >

              </textarea>
            </tr>
          </table>
          <table style={{ marginTop: '10px' }}>
            <tr>
              <td style={{ paddingRight: '10px' }}>
                <BtnProses
                  disabled={data.kepada === '' ? true : false}
                  className="btn btn-primary">
                  Print &nbsp;
                    <span>
                    <FaPrint />
                  </span>
                </BtnProses>
              </td>
              <td>
                <BtnProses
                  className="btn btn-primary"
                  onClick={Tambahkan}
                  disabled={data.kepada === '' ? true : false}
                >
                  Tambahkan
                  </BtnProses>
              </td>

            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
