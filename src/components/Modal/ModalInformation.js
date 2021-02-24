import React, { useContext } from 'react'
import { Context } from '../../Config/Context'
import { Modal } from 'react-bootstrap'
import { Button } from '..'
import { FaRegCheckCircle } from "react-icons/fa";
import styled from 'styled-components'
import NumberFormat from 'react-number-format'


const LabelIcon = styled.h1`
font-size:100px
`

export const ModalInformation = ({
  handleCloseInfo,

}) => {
  const { data, show, dispatch } = useContext(Context)
  console.log('ini dia', data)
  return (
    <Modal show={show} onHide={handleCloseInfo} animation={false} >
      <Modal.Body>
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-md-12">
            <LabelIcon>
              <FaRegCheckCircle />
            </LabelIcon>
          </div>
          <div className="col-md-12">
            <h2>
              Top Up Berhasil !
            </h2>
          </div>
          <div className="col-md-12">
            <h3>
              <NumberFormat
                value={data}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp. '}
              />
            </h3>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
