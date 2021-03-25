import React from 'react'
import { LaporanInventory } from './Component/LaporanInventory'

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Laporan Inventory Yang Keluar</h2>
        </div>

        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12">
            <LaporanInventory />
          </div>
        </div>
      </div>
    </div>
  )
}
