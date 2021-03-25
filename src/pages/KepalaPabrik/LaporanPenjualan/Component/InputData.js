import React, { useContext, useState, useEffect, useRef } from 'react'
import Datepicker from 'react-datepicker'
import { BtnProses, InputQTY } from '../../../styles'
import { FaPrint } from "react-icons/fa";
import { Context } from '../../../../components/Store'
import { format, parseISO } from 'date-fns'
import Invoice from '../../../../components/Invoice';
import CurrencyInput from 'react-currency-input-field';
import { useReactToPrint } from 'react-to-print';
import Select from 'react-select'



const options = [
  { value: 'Muharis', label: 'Muharis' },
  { value: 'Sisy', label: 'Sisy' },
  { value: 'JohnDoe', label: 'JohnDoe' },
]
export const InputDataPenjualan = () => {

  const { data2, dispatch } = useContext(Context)
  const [openInvoice, setOpenInvoice] = useState(true)
  const [data, setData] = useState({
    tanggal: new Date(),
    qty: null,
    jenis: '',
    harga: 11000,
    total: null,
    kepada: null,
    alamat: '',
    catatan: ''
  })

  const [selectedOption, setSelectedOption] = useState(null)
  const [changebtn, setChangebtn] = useState(false)

  const ComponentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => ComponentRef.current
  })

  const BtnChange = () => {

    setChangebtn(true)
  }


  const onChangeValue = (e, value) => {
    let value2
    if (value !== 'kepada') {
      value2 = e.target.value

    }
    else {
      value2 = e
    }

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

      setData({ ...data, kepada: value2.value })

      setSelectedOption(value2);
    }
    else if (value === 'alamat') {
      setData({ ...data, alamat: value2 })
    }
    else if (value === 'catatan') {
      setData({ ...data, catatan: value2 })
    }
  }

  const Tambahkan = () => {

    dispatch({
      type: 'DATA',
      data2: data
    })
  }

  const BtnSimpan = () => {
    alert('Berhasil di Simpan Atas Nama : ', data.kepada)

  }


  console.log(data2)




  return (
    <div className="container-fluid" style={{ paddingBottom: '100px' }}>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>
            Input Data Invoice
          </h2>
        </div>
      </div>

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
              Qty (Dus)
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
              <CurrencyInput
                id="validation-example-2-field"
                placeholder="$1,234,567"
                allowDecimals={false}
                className={`form-control `}
                prefix={'Rp. '}
                step={10}
                value={data.harga}
              />

            </tr>
          </table>

          <table style={{ width: '300px' }}>
            <tr>
              Total
            </tr>
            <tr>
              <CurrencyInput
                id="validation-example-2-field"
                placeholder="$1,234,567"
                allowDecimals={false}
                className={`form-control `}
                // onValueChange={validateValue}
                prefix={'Rp. '}
                step={10}
                value={data.total = data.harga * data.qty}
              />
            </tr>
          </table>
        </div>

        <div className="col-md-6">
          <table style={{ width: '300px' }}>
            <tr>
              Kepada
            </tr>
            <tr>
              <Select
                value={selectedOption}
                onChange={(e) => onChangeValue(e, 'kepada')}
                options={options}
                isDisabled={data.kepada !== '' ? true : false}
              />
              {/* <input
                type="text"
                className="form-control"
                value={data.kepada}
                onChange={(e) => onChangeValue(e, 'kepada')}
              /> */}
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
                disabled={data.kepada !== '' ? true : false}
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
          <div>
            <small style={{ color: 'red' }}>
              *Jika sudah Selesai Menambahkan Harap Klik print untuk <br /> membuat invoice dan Klik Simpan Untuk ke DataBase.
            </small>
          </div>
          <table style={{ marginTop: '10px' }}>
            <tr>
              <td style={{ paddingRight: '10px' }}>
                <BtnProses
                  disabled={data.kepada === '' ? true : false}
                  className="btn btn-primary"
                  onClick={data.kepada === '' ? '' : () => { handlePrint(); BtnChange() }}
                >
                  Print &nbsp;
                    <span>
                    <FaPrint />
                  </span>
                </BtnProses>
              </td>
              <td>
                <BtnProses
                  className="btn btn-primary"
                  onClick={changebtn ? BtnSimpan : Tambahkan}
                  disabled={data.kepada === '' ? true : false}
                >
                  {changebtn ? 'Simpan' : 'Tambahkan'}

                  </BtnProses>
              </td>

            </tr>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <BtnProses
            onClick={() => setOpenInvoice(!openInvoice)}
            aria-controls="example-collapse-text"
            aria-expanded={openInvoice}
            className="btn btn-primary">
            Preview
          </BtnProses>
        </div>

      </div>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-md-12 col-sm-12">
          <Invoice
            openInvoice={openInvoice}
            ref={ComponentRef}
            changebtn={changebtn}
          />
        </div>
      </div>
    </div>
  )
}
