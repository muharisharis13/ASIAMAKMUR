import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
import { BtnProses } from '../../../styles'

export const InputDataRequestPembelian = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>
            Request Pembelian
        </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <table style={{ width: '400px' }}>
            <tr>
              <td>
                <h6>Deskripsi</h6>
              </td>

            </tr>
            <tr>
              <td>
                <Datepicker
                  selected={date}
                  dateFormat="dd MMM yyyy"
                  disabled
                  className='form-control'
                />
              </td>
            </tr>
            <tr>
              <td>
                <div class="input-group input-group-sm mb-1 mt-1">
                  <textarea
                    className="form-control"
                    placeholder="Keterangan"
                    rows={5}
                    style={{ resize: 'none' }}
                  >
                  </textarea>
                </div>
              </td>
            </tr>
          </table>

        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="col-md-12">
            <BtnProses className="btn btn-primary">
              Kirim
          </BtnProses>
          </div>
        </div>
      </div>

    </div>
  )
}
