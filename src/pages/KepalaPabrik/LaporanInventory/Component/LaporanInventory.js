import React from 'react'
import FilterDate from '../../../../components/FilterDate'
import { Pagination } from '../../../../components/Pagination'
import { Search } from '../../../../components/Search'
import { BtnProses } from '../../../styles'
import { InputData } from './InputData'
import { TableData } from './TableData'

export const LaporanInventory = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4>
            Bahan Baku Yang Keluar
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <InputData />
        </div>
        <div className="col-md-12" style={{ paddingLeft: '15%' }}>
          <BtnProses className="btn btn-primary">
            Tambahkan
          </BtnProses>
        </div>
      </div>


      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-5">
          <FilterDate />
        </div>
        <div className="col-md-5">
          <Search />
        </div>
      </div>
      <div className="row" style={{ marginTop: '20px' }}>
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
