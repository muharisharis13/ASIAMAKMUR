import React from 'react'
import { BackgroundImage, Inputan, LayerImage, Icon, TextWelcome, BtnMasuk } from '../../styles'
import { FaUserCircle, FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <BackgroundImage className='row'>
      <div className="col-md-12 col-sm-12">
        <h3>
          Login Admin
            </h3>
      </div>
      <div className="col-md-12 col-sm-12">
        <LayerImage>
          <section style={{ paddingTop: '20px' }}>
            <TextWelcome>
              Selamat Datang Di PT. Asia Tirta Makmur
              </TextWelcome>
          </section>
          <section style={{ display: 'flex', paddingTop: '20px' }}>
            <Icon>
              <FaUserCircle />
            </Icon>
            <Inputan className="form-control" placeholder="username" />
          </section>
          <section style={{ display: 'flex', paddingTop: '20px' }}>
            <Icon>
              <FaKey />
            </Icon>
            <Inputan type="password" className="form-control" placeholder="password" />
          </section>
          <section style={{ paddingTop: '20px' }}>
            <Link to={{ pathname: '/' }}>
              <BtnMasuk className="btn btn-primary">
                Masuk
              </BtnMasuk>
            </Link>
          </section>
        </LayerImage>
      </div>
    </BackgroundImage>
  )
}
