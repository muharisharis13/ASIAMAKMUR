
import React from 'react'
import { Pagination } from '../../../components/Pagination/Pagination'
import { Search } from '../../../components/Search/Search'
import { InputDataSupplier } from './Component/InputDataSupplier'
import { TableDataSupplier } from './Component/TableDataSupplier'

export const Supplier = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Data Supplier</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <InputDataSupplier />
        </div>
      </div>

      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-12 col-sm-12">
          <Search />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <TableDataSupplier />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
