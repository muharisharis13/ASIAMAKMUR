import React from 'react'
import FilterDate from '../../../../components/FilterDate'
import { Pagination } from '../../../../components/Pagination'
import { Search } from '../../../../components/Search'
import { BtnProses } from '../../../styles'
import { TableData } from './TableData'

export const LaporanInventory = () => {
  return (
    <>



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
