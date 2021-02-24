import React from "react";
import { LaporanPembelian } from "./Component/LaporanPembelian";

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Laporan Pemebelian</h2>
        </div>
      </div>



      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-12 col-sm-12">
          <LaporanPembelian />
        </div>
      </div>
    </div>
  );
}
