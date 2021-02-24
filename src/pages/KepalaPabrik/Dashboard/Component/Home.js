import React from 'react';
import { TableData as LaporanInventory } from '../../LaporanInventory/Component/TableData';
import LaporanPembelian from '../../LaporanPembelian/Component/TableData';
import LaporanHasilProduksi from '../../LaporanHasilProduksi/Component/TableData'
import { TableData as LaporanPenjualan } from '../../LaporanPenjualan/Component/TableData'

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>
            Laporan Hasil Produksi
        </h3>
        </div>
        <div className="col-md-12 col-sm-12">
          <LaporanHasilProduksi />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <h3>
            Laporan Penjualan
        </h3>
        </div>
        <div className="col-md-12">
          <LaporanPenjualan />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <h3>
            Laporan Pembelian
        </h3>
        </div>
        <div className="col-md-6">
          <LaporanPembelian />
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <h3>
            Laporan Inventory
        </h3>
        </div>
        <div className="col-md-12">
          <LaporanInventory />
        </div>
      </div>


    </>
  );
}

export default Home;
