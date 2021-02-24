import React, { useState } from 'react'
import Datepicker from 'react-datepicker'

export const InputData = () => {

  const [date, setDate] = useState(new Date())

  return (
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
          />
        </td>
      </tr>
      <tr>
        <td>

            <textarea
              className="form-control"
              placeholder="Keterangan"
            rows="5"
            >
          </textarea>
        </td>
      </tr>

    </table>
  )
}
