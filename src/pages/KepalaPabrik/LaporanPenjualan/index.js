import React from 'react'
import { LaporanPenjualan } from './Component/LaporanPenjualan'

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Laporan Penjualan
          </h2>
        </div>
      </div>

      <div className="col-md-12" style={{ marginTop: '40px' }}>
        <LaporanPenjualan />
      </div>
    </div>
  )
}
