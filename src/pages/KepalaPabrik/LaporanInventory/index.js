import React from 'react'
import { LaporanInventory } from './Component/LaporanInventory'

export default function index() {
  return (
    <div className="container" style={{ background: 'red' }}>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Laporan Inventory</h2>
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
