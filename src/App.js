import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/KepalaPabrik/Dashboard/index';
import LaporanHasilProduksi from './pages/KepalaPabrik/LaporanHasilProduksi';
import LaporanPemeblian from './pages/KepalaPabrik/LaporanPembelian/index'
import LaporanInventory from './pages/KepalaPabrik/LaporanInventory/index'
import LaporanPenjualan from './pages/KepalaPabrik/LaporanPenjualan/index'
import Storage from './pages/KepalaPabrik/Storage/index'
import DashboardAdmin from './pages/Admin/Dashboard/index'


import './style/director-style.css'
import './style/director-style.scss'

import { Layout, Menu } from 'antd';
import { InputData } from './pages/KepalaPabrik/LaporanHasilProduksi/Component/InputData';
import { InputDataPenjualan } from './pages/KepalaPabrik/LaporanPenjualan/Component/InputData'
import { InputDataRequestPembelian } from './pages/KepalaPabrik/LaporanPembelian/Component/InputDataReq';
import { InputDataInventory } from './pages/KepalaPabrik/LaporanInventory/Component/InputData';
import { Pelanggan } from './pages/Admin/Pelanggan/Pelanggan';
import { InputDataPembelian } from './pages/KepalaPabrik/LaporanPembelian/Component/InputDataPembelian';
import { Context } from './components/Store';
import { TableDataPembelian } from './pages/KepalaPabrik/LaporanPembelian/Component/TableDataPembelian';
import { Supplier } from './pages/Admin/Supplier/Supplier';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const { collapsed } = useContext(Context)
  return (
    <>
      <Router>
        <Navbar />
        <Layout style={{
          minHeight: '100vh',
          paddingTop: '50px',
        }}
          className={collapsed ? 'unActive' : 'active'}
        >
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/laporanProduksi' component={LaporanHasilProduksi} />
            <Route path='/InputDataProduksi' component={InputData} />

            <Route path='/laporanPenjualan' component={LaporanPenjualan} />
            <Route path='/InputDataPenjualan' component={InputDataPenjualan} />


            <Route path='/laporanReqPembelian' component={LaporanPemeblian} />
            <Route path='/InputDataReqPembelian' component={InputDataRequestPembelian} />
            <Route path='/InputDataPembelian' component={InputDataPembelian} />
            <Route path='/laporanPembelian' component={TableDataPembelian} />


            <Route path='/laporanInventory' component={LaporanInventory} />
            <Route path='/InputDataInventory' component={InputDataInventory} />


            <Route path='/Pelanggan' component={Pelanggan} />
            <Route path='/Supplier' component={Supplier} />


            <Route path='/DashboardAdmin' component={DashboardAdmin} />
            <Route path='/Storage' component={Storage} />



        </Switch>

        </Layout>
      </Router>
    </>
  );
}

export default App;
