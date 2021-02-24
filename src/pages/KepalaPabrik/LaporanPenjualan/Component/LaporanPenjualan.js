import React, { useState } from 'react'
import FilterDate from '../../../../components/FilterDate'
import { Invoice } from '../../../../components/Invoice'
import { Pagination } from '../../../../components/Pagination'
import { Search } from '../../../../components/Search'
import { BtnProses } from '../../../styles'
import { InputData } from './InputData'
import { TableData } from './TableData'

export const LaporanPenjualan = () => {
  const [openInvoice, setOpenInvoice] = useState(false)

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <InputData />
        </div>
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

      <div className="row">
        <div className="col-md-12">
          <Invoice
            openInvoice={openInvoice}
          />
        </div>
      </div>


      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-5">
          <FilterDate />
        </div>
        <div className="col-md-auto">
          <Search />
        </div>
      </div>
      <div className='row' style={{ marginTop: '20px' }}>
        <div className="col-md-12">
          <TableData />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Pagination />
        </div>
      </div>
    </>
  )
}
