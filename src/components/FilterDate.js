import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

export default function FilterDate() {
  const [date, setDate] = useState(new Date())


  return (
    <table classname="table">
      <tr>
        <td>
          Filter by Date &nbsp; &nbsp;
        </td>
        <td>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="dd MMM yyyy"
            className="form-control"
          />
        </td>
      </tr>
    </table>
  )
}
