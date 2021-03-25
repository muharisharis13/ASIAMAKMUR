import React from 'react'
import { Storage } from './Component/Storage'

export default function index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Informasi Persediaan
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Storage />
        </div>
      </div>
    </div>
  )
}

