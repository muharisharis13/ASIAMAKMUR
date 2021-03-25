import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'

const Labelimage = styled.label`
margin-top:20px;
background-color:none;
border:1px solid black;
padding:10px;
border-radius:5px;
cursor:pointer;
font-weight:300;
`

const options = [
  { value: 'PT. Jaya Kesuma', label: 'PT. Jaya Kesuma' },
  { value: 'PT. Jadi Aja', label: 'PT. Jadi Aja' },
  { value: 'CV. XaXa', label: 'CV. XaXa' },
]

export const InputDataPembelian = () => {
  const [data, setData] = useState({
    selectedOption: null,
    supplier: '',
    tanggal: new Date(),
    jenis: 'Botol',
    satuan: '',
    qty: '0',
    harga: '0',
    subtotal: '0',
    ppn: '0',
    total: '0'
  })

  const [dataImage, setDataimage] = useState({
    bukti: ''
  })

  const onChangeValue = (e, value) => {
    let value2

    if (value !== 'supplier') {
      value2 = e.target.value
    }
    else {
      value2 = e
    }

    if (value === 'supplier') {
      setData({ ...data, selectedOption: value2 })
    }
    else if (value === 'jenis') {
      setData({ ...data, jenis: value2 })
    }
    else if (value === 'qty') {
      setData({ ...data, qty: value2 })
    }
    else if (value === 'satuan') {
      setData({ ...data, satuan: value2 })
    }
    else if (value === 'harga') {
      setData({ ...data, harga: value2 })
    }
    else if (value === 'ppn') {
      setData({ ...data, ppn: value2.replace(/[^0-9]+/g, '') })
    }

  }

  const onChangeImage = (e, type) => {
    const Reader = new FileReader();

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (type === 'bukti') {
          setDataimage({ ...dataImage, bukti: Reader.result })
        }
      }
    }

    Reader.readAsDataURL(e.target.files[0])
    setDataimage({ ...dataImage, bukti: e.target.files[0] })
  }

  const BtnSimpan = () => {
    alert('Berhasil Di tambah')
  }

  useEffect(() => {
    if (data.jenis === 'Botol' || data.jenis === 'Cup' || data.jenis === 'Kardus') {
      setData({ ...data, satuan: 'Pcs' })
    }
    else if (data.jenis === 'Pipet' || data.jenis === 'Lid') {
      setData({ ...data, satuan: 'Kg' })
    }
    else if (data.jenis === 'Lakban') {
      setData({ ...data, satuan: 'Roll' })
    }
  }, [data.jenis])

  useEffect(() => {
    if (data.selectedOption !== null) {

      setData({ ...data, supplier: data.selectedOption.value })
    }
  }, [data.selectedOption])


  let ppn = data.qty * data.harga * (data.ppn / 100)

  console.log('ini data :', data)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Input Data Pembelian</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-5">
          <table style={{ width: '100%' }} >
            <tr>
              Tanggal
            </tr>
            <tr>
              <DatePicker
                className="form-control"
                selected={data.tanggal}
                dateFormat="yyyy MMM dd"
                onChange='#'
                disabled
              />
            </tr>
            <tr>
              Supplier
            </tr>
            <tr>
              <Select
                value={data.selectedOption}
                options={options}
                onChange={(e) => onChangeValue(e, 'supplier')}

              />
            </tr>
            <tr>
              Jenis Produk
            </tr>
            <tr>
              <select name="Jenis" id="JenisProduk" className="form-control" required
                onClick={(e) => onChangeValue(e, 'jenis')}
              >
                <option value="Botol"> {'Botol'} </option>
                <option value="Cup"> {'Cup'} </option>
                <option value="Pipet"> {'Pipet'} </option>
                <option value="Kardus"> {'Kardus'} </option>
                <option value="Lakban"> {'Lakban'} </option>
                <option value="Lid"> {'Lid'} </option>
              </select>
            </tr>
            <tr>
              Qty
            </tr>
            <tr>

              <td>
                <input type="text" className="form-control" placeholder="Qty" required
                  value={data.qty}
                  onChange={(e) => onChangeValue(e, 'qty')}
                />

              </td>

              <td>
                <label>
                  &nbsp;&nbsp;/&nbsp;&nbsp;{
                    data.jenis === 'Botol' || data.jenis === 'Cup' || data.jenis === 'Kardus' ?
                      'Pcs'
                      : data.jenis === 'Pipet' || data.jenis === 'Lid' ?
                        'Kg'
                        : data.jenis === 'Lakban' ?
                          'Roll'
                          : null
                  }

                </label>

              </td>
            </tr>
            <tr>
              Harga
            </tr>
            <tr>
              <input type="text" className="form-control" placeholder="harga" required
                value={data.harga}
                onChange={(e) => onChangeValue(e, 'harga')}
              />
            </tr>
            <tr>
              Ppn
            </tr>
            <tr>
              <input type="text" className="form-control" required
                value={data.ppn <= 100 ? data.ppn : setData({ ...data, ppn: '100' })}
                onChange={(e) => onChangeValue(e, 'ppn')}
              />
            </tr>
            <tr>
              SubTotal
            </tr>
            <tr>
              <input type="text" className="form-control" required disabled
                value={data.subtotal = data.qty * data.harga + ppn}
              />
            </tr>
            {console.log(ppn)}

          </table>

        </div>
        <div className="col-md-4 col-sm-5">
          <div style={{ marginTop: '20px' }}>

            {
              dataImage.form !== '' ?
                <img width={400} src={dataImage.bukti} />
                : null
            }
          </div>
          <div style={{ paddingBottom: '50px' }}>
            <input type="file" id="bukti" accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => onChangeImage(e, 'bukti')}
            />
            <Labelimage for="bukti">
              Upload Bukti Faktur Pembelian
            </Labelimage>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <span className={data.subtotal !== '' && dataImage.bukti !== '' ? 'btn btn-primary' : 'btn btn-secondary'}
            disabled={data.subtotal !== '' && dataImage.bukti !== '' ? false : true}

            onClick={data.subtotal !== '' && dataImage.bukti !== '' ? BtnSimpan : ''}
          >
            Simpan Data Pembelian
          </span>
        </div>
      </div>

    </div>
  )
}
