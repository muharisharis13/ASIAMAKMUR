import React from 'react'
import LaporanHasilProduksi from './Component/LaporanHasilProduksi'

export default function Reports() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>
            Laporan Produksi
            </h2>
        </div>

      </div>

      <div className="row" style={{ marginTop: '40px' }}>
        <div className="col-md-12 col-sm-12">
          <LaporanHasilProduksi />
        </div>
      </div>
    </div>
  )
}
