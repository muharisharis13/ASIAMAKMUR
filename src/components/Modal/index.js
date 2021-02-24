import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from '..'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { MethodPost } from '../../Config/Method'
import { Context } from '../../Config/Context'
import { encrypt } from '../../Config/Crypto'



export default function Index({
  show,
  handleClose,
  amount,
  onChangePassword,
  valuePassword,
  setAmount,
  setValuePassword
}) {

  const token = sessionStorage.getItem('token')
  const { dispatch } = useContext(Context)


  const CheckPassword = async (e) => {

    e.preventDefault();

    const data = { password: valuePassword }

    dispatch({
      type: 'LOADING', loading: true
    })

    await fetch(
      `${process.env.REACT_APP_API_PASSWORD}`,
      MethodPost(token, data)
    )
      .then(response => response.json())
      .then(res => {
        if (res.success) {
          dispatch({
            type: 'PASSWORDCHECK',
            password: res.success
          })

          alert(res.success)

        }
        else {
          alert('Password Incorrect')
          setAmount('')
        }
        dispatch({
          type: 'LOADING', loading: false
        })

        setValuePassword('')

      })
      .catch(err => {
        console.error(err)
      })
    handleClose()
  }


  return (
    <Modal show={show} onHide={handleClose} animation={false} >
      <Modal.Header>
        <Modal.Title>
          Please Input Password for Continue
          </Modal.Title>
      </Modal.Header>
      <form onSubmit={CheckPassword}>

        <Modal.Body>
          <div className="row">
            {
              amount !== null || amount !== '' ?
                <div className="col-md-12" style={{ textAlign: 'center' }}>
                  <h3>
                    <NumberFormat
                      value={amount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp. '}
                    />
                  </h3>
                </div>
                : null
            }
            <div className="col-md-12">
              <input
                type="password"
                className="form-control"
                required="required"
                placeholder="Password"
                value={valuePassword}
                onChange={onChangePassword}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            name="Confirm"
            className="btn"
            bgColor='#DB1F48'
            padding='5px 20px'
            fontSize={15}
            color='white'
            onClick={CheckPassword}
          />
        </Modal.Footer>

      </form>
    </Modal>

  )
}
