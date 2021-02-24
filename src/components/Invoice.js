import React, { useContext } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-bootstrap'
import { Context } from './Store'

import { format } from 'date-fns'


const TitleName = styled.span`
font-weight: 700;
font-size:25px;
text-transform : uppercase;
`

const TextInvoice = styled.span`
float:right;
text-transform : uppercase;
font-size:30px;
font-weight: 700;
padding:20px;
`

const TextBill = styled.span`
font-weight:700;
text-transform:uppercase;
font-size:15px;
`

const Thead = styled.thead`
background-color:#11698e;
color:white;
`
const Background = styled.div`
background-color:#f6f6f6;
`

export const Invoice = ({ openInvoice }) => {
  const { data2, qty } = useContext(Context)


  return (
    <Background>

      <Collapse in={openInvoice}>
        <div id="example-collapse-text">
          <div className="row">
            <div className="col-md-6">
              <table>

                <tr>
                  <td>
                    <TitleName>
                      PT. Asia Tirta Makmur
                </TitleName>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      Tanjung Morawa No. 38 B
                </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      Tanjung Morawa
                </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-6">
              <TextInvoice>
                invoice
              </TextInvoice>
            </div>
          </div>

          {
            data2.slice(0, 1).map(item => (
              <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-md-7">

                  <table>
                    <tr>
                      <td>
                        <TextBill>
                          Pembayaran Untuk :
                      </TextBill>
                      </td>
                    </tr>
                  </table>

                  <table style={{ marginTop: '10px' }}>
                    <tr>
                      <td>
                        <span>
                          {item.kepada}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          {item.alamat}
                        </span>
                      </td>
                    </tr>

                  </table>
                </div>

                <div className="col-md-5">
                  <table>
                    <tr>
                      <th>
                        <span>Invoice Date</span>
                      </th>
                      <td>
                        <span>
                          {format(item.tanggal, 'YYYY MMMM DD')}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Jatuh Tempo</span>
                      </th>
                      <td>
                        <span>
                          {format(new Date().setMonth(new Date().getMonth() + 1), 'YYYY MMMM DD')}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

            ))
          }


          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <Thead>
                  <tr>
                    <th>Deskripsi Produk</th>
                    <th>Qty</th>
                    <th>Jenis</th>
                    <th>@</th>
                    <th>Total</th>
                  </tr>
                </Thead>
                <tbody>
                  {
                    data2.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.catatan}
                        </td>
                        <td>
                          {item.qty}
                        </td>
                        <td>
                          {item.jenis}
                        </td>
                        <td>
                          {item.harga}
                        </td>
                        <td>
                          {item.total}
                        </td>
                      </tr>


                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </Collapse>
    </Background>
  )
}
