import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import FilterDate from '../../../../components/FilterDate'
import { InputData } from './InputData';
import TableLaporan from './TableData'
import styled from 'styled-components'
import { BtnProses } from '../../../styles';
import { Pagination } from '../../../../components/Pagination';
import { Search } from '../../../../components/Search';







export default function LaporanHasilProduksi() {

  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <InputData />
          </div>

        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-5 col-sm-12">
            <BtnProses className="btn btn-primary" style={{ float: 'right', left: '0px' }}>
              Proses
            </BtnProses>
          </div>
        </div>

      </section>


      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-5 col-sm-6">
          <FilterDate />
        </div>
        <div className="col-md-6 col-sm-6">
          <Search />
        </div>
      </div>
      <div className="row" style={{ marginTop: '20px' }}>

        <div className="col-md-12 col-sm-12">
          <TableLaporan />
        </div>
      </div>

      <div className="row" style={{ paddingBottom: '20px' }}>
        <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
          <Pagination />
        </div>
      </div>
    </>
  )
}
