import React from 'react'
import { Pagination } from '../../../components/Pagination/Pagination'
import { Search } from '../../../components/Search/Search'
import { DataTable } from './Component/DataTable'
import { InputDataPelanggan } from './Component/InputDataPelanggan'

export const Pelanggan = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Daftar Pelanggan</h2>
        </div>
      </div>



      <div className="row">
        <div className="col-md-5 col-sm-10">
          <InputDataPelanggan />
        </div>
      </div>

      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-12 col-sm-12">
          <Search />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <DataTable />
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
