import React from 'react'
import TableData from './TableData'
import { BtnProses } from "../../../styles";
import { InputData } from "./InputData";
import { Pagination } from '../../../../components/Pagination';

export const LaporanPembelian = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4>
            Request Pembelian
          </h4>
        </div>
        <div className="col-md-12 col-sm-12">
          <InputData />
        </div>
        <div className="col-md-12">
          <BtnProses className="btn btn-primary">
            Kirim
          </BtnProses>
        </div>
      </div>

      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-6">
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
