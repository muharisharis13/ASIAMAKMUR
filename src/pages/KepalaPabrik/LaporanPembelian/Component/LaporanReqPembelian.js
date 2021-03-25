import React from 'react'
import TableData from './TableData'
import { BtnProses } from "../../../styles";
import { InputData } from "./InputDataReq";
import { Pagination } from '../../../../components/Pagination';

export const LaporanReqPembelian = () => {
  return (
    <>


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
