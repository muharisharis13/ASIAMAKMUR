import React from 'react'
import Home from './Component/Home'

export default function index() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>
            Dashboard
          </h2>
        </div>
      </div>
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-12 col-sm-12">
          <Home />
        </div>
      </div>
    </div>
  )
}
