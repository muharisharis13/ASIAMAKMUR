import React, { useContext } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-bootstrap'
import { Context } from './Store'
import CurrencyInput from 'react-currency-input-field';
import moment from 'moment'
import { ConsoleSqlOutlined, DatabaseOutlined, DeleteOutlined } from '@ant-design/icons';
import { List } from 'antd';


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
padding:20px 10px;
position: relative;
`

const FieldTotal = styled(CurrencyInput)`
border:none ;
font-size:19px;
font-weight:600;
color:white;
`

const TextTotal = styled.span`
font-weight:600;
font-size:18px;
color:white;
`

export default class Invoice extends React.Component {
  static contextType = Context
  render() {
    const { openInvoice, changebtn } = this.props
    const { data2, qty, dispatch } = this.context


    let sum = data2.reduce(function (prev, current) {
      return prev + current.total
    }, 0)


    const DeleteData = (index) => {
      console.log(data2[0])
      let deleteArr = data2.splice(index, 0)

      dispatch({
        type: 'REMOVE_DATA',
        data2: deleteArr
      })
      console.log('ini data : ', deleteArr)
    }


  return (
    <Background className="container-fluid">

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
                      Jln. Sei Belumai Medan - Tanjung Morawa Km 16.5, Limau Manis Kab. Deli Serdang, Sumatera Utara 20362
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
                          {moment(item.tanggal).format('YYYY MMMM DD')}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Jatuh Tempo</span>
                      </th>
                      <td>
                        <span>
                          {moment(new Date().setMonth(new Date().getMonth() + 1)).format('YYYY MMMM DD')}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

            ))
          }


          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-md-12">
              <table className="table">
                <Thead>
                  <tr>
                    <th>Deskripsi Produk</th>
                    <th>Qty</th>
                    <th>Jenis</th>
                    <th>@</th>
                    <th>SubTotal</th>
                  </tr>
                </Thead>
                <tbody style={{ position: 'relative' }}>
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
                        {
                          changebtn ? null :
                            <div style={{ position: 'absolute', right: 60 }}>
                              <span className="btn" onClick={() => DeleteData(index)}>
                                <DeleteOutlined />
                              </span>
                            </div>
                        }
                      </tr>


                    ))
                  }
                </tbody>
              </table>


            </div>
          </div>
          <table style={{ position: 'absolute', background: 'grey', right: '20px' }}>
            <tr>
              <td style={{ paddingLeft: '20px' }}>
                <TextTotal>Total</TextTotal>
              </td>
              <td>
                <FieldTotal
                  id="validation-example-2-field"
                  placeholder="$1,234,567"
                  allowDecimals={false}
                  className={`form-control `}
                  prefix={'Rp. '}
                  step={10}
                  value={sum}
                  disabled
                />
              </td>

            </tr>
          </table>

        </div>
      </Collapse>
    </Background>

)
  }
}
