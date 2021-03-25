import React from 'react'
import { Pagination } from '../../../../components/Pagination'
import { TableDataPembelian } from './TableDataPembelian'

export const LaporanPembelian = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <TableDataPembelian />
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
