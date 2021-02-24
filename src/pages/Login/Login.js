import React, { useState, useContext, useEffect } from 'react'
import './Component/Login.scss'
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { Context } from '../../Config/Context';
import Loader from "react-loader-spinner";
import { Redirect } from 'react-router-dom'
import { MethodPost } from '../../Config/Method';
import { decrypt, encrypt } from '../../Config/Crypto';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { redirect, dispatch } = useContext(Context)
  const token = sessionStorage.getItem('token')

  const onChangeUsername = (e) => {
    var x = document.getElementById('alertError')
    x.style.display = "none"

    const value = e.target.value
    setUsername(value)
  }
  const onChangePassword = (e) => {
    var x = document.getElementById('alertError')
    x.style.display = "none"

    const value = e.target.value
    setPassword(value)
  }


  const SubmitLogin = async (e) => {
    e.preventDefault()
    const data = {
      username: username,
      password: password
    }
    dispatch({
      type: 'REDIRECT',
      redirect: true,

    })

    await fetch(
      `${process.env.REACT_APP_API_LOGIN}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    )
      .then((response => response.json()))
      .then(result => {
        console.log(result)
        if (result) {
          sessionStorage.setItem('role', encrypt(result.success.role))
          sessionStorage.setItem('token', result.success.token)

          sessionStorage.setItem('name', result.success.name)


          // redirect && (
          //   <Redirect to="/" />
          // )

          window.location.href = '/'
          dispatch({
            type: 'REDIRECT',
            redirect: false,

          })

        }
      })
      .catch(e => {
        dispatch({
          type: 'REDIRECT',
          redirect: false,

        })

        console.error('Test Error :', e);
        var x = document.getElementById('alertError')
        x.style.display = "block"
      })
  }

  if (token) {
    return <Redirect to="/" />

  }



  return (
    <div className="background">
      <div className="container">
        <table className="table">
          <tr>
            <td>
              <h3>
                Welcome to HAVAH Payment Gateway
              </h3>
            </td>
          </tr>
        </table>
        <table className="gridTableLogin">
          <tr>
            <td>
              <form className="form form-login">
                <div style={{ display: 'none', position: 'absolute', alignItems: 'center', justifyContent: 'center', marginTop: '-70px', marginLeft: '40px' }} className="alert alert-danger pesanError" id="alertError">

                  <p>Username atau Password Salah!</p>

                </div>
                <form >
                  <table className="table" >
                    <tr>
                      <td>
                        <div className="wrapper-icon">
                          <FaUserCircle style={{ marginTop: '5px' }} />
                        </div>
                      </td>
                      <td>
                        <input
                          className="form-control input-login"
                          type="text"
                          placeholder="Username"
                          required="required"
                          value={username}
                          onChange={onChangeUsername}
                        />
                      </td>
                    </tr>
                  </table>
                  <table className="table" >
                    <tr>
                      <td>
                        <div className="wrapper-icon">
                          <FaLock style={{ marginTop: '5px' }} />
                        </div>
                      </td>
                      <td>
                        <input
                          className="form-control input-login"
                          type="password"
                          placeholder="Password"
                          required="required"
                          value={password}
                          onChange={onChangePassword}
                        />
                      </td>
                    </tr>
                  </table>


                  <table className="table">
                    <tr>
                      <td>
                        {
                          redirect === true ?
                            <Loader
                              type="TailSpin"
                              color="#868B8E"
                              height={40}
                              width={40}
                            />
                            :

                            <button
                              className="btn  btn-login"
                              type="submit"
                              onClick={SubmitLogin}
                            >
                              Masuk
                         </button>


                        }

                      </td>
                    </tr>
                  </table>
                </form>
              </form>

            </td>
          </tr>
        </table>

      </div>
    </div>
  )
}
