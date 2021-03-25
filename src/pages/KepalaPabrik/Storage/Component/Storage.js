import React, { useState } from 'react'
import styled from 'styled-components'


const Th = styled.th`
text-align : center;
`

export const Storage = () => {
  const [dataPersediaan] = useState([
    {
      id: 1,
      name: 'Karton',
      Jumlah: '200',
      updateAt: '20 feb 2021'
    },
    {
      id: 2,
      name: 'Pipet',
      Jumlah: '200',
      updateAt: '20 feb 2021'
    },
    {
      id: 3,
      name: 'Cup',
      Jumlah: '200',
      updateAt: '20 feb 2021'
    },
  ])

  console.log(dataPersediaan)
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3>
            Sisa Persediaan
          </h3>
        </div>
      </div>

      <div className="row" style={{ textAlign: 'center' }} >
        <div className="col-md-12">
          <table className="table">
            <thead >
              <tr>
                <Th>
                  No
                </Th>
                <Th>
                  Nama Produk
                </Th>
                <Th>
                  Jumlah
                </Th>
                <Th>
                  Terakhir Update
                </Th>
              </tr>
            </thead>

            <tbody>
              {
                dataPersediaan.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.id}

                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.Jumlah}
                    </td>
                    <td>
                      {item.updateAt}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
