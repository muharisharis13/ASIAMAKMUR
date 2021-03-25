import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import 'antd/dist/antd.css';


import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  DatabaseOutlined,
  DropboxOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  InsertRowRightOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Context } from './Store';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const LogOut = () => {
    window.location.href = '/login'
  }

  // const [collapsed, setCollapsed] = useState(true)
  const { dispatch, collapsed } = useContext(Context)

  const onCollapse = collapsed => {
    dispatch({
      type: 'COLLAPS',
      collapsed: collapsed
    })
    // setCollapsed(collapsed)
  }

  return (
    <>

      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 20,
        top: 0
      }} >
        <div className="logo"  >
          Hello, Muharis
        </div>
        <Menu theme="dark" mode="inline">

          {/* kepala pabrik */}
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              Dashboard
              </Link>
          </Menu.Item>

          <Menu.Item key="222" icon={<UserOutlined />}>
            <Link to="/Pelanggan">
              Pelanggan
              </Link>
          </Menu.Item>
          <Menu.Item key="223" icon={<UserOutlined />}>
            <Link to="/Supplier">
              Supplier
              </Link>
          </Menu.Item>

          {/* <SubMenu key="Produksi" icon={<DropboxOutlined />} title="Produksi" >
            <Menu.Item key="2">
              <Link to="/laporanProduksi">
                Data Table
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/InputDataProduksi">
                Input Produksi
                </Link>
            </Menu.Item>
          </SubMenu> */}

          <SubMenu key="penjualan" icon={<DollarCircleOutlined />} title="Penjualan" >
            <Menu.Item key="4">
              <Link to="/laporanPenjualan">
                Data Table
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/InputDataPenjualan">
                Input Pejualan
                </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="Pembelian" icon={<ShoppingCartOutlined />} title="Pembelian" >
            <Menu.Item key="6">
              <Link to="/laporanReqPembelian">
                Data Table Req Pemb
                </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to="/InputDataReqPembelian">
                Input Request Pembelian
                </Link>
            </Menu.Item>
            <Menu.Item key="77">
              <Link to="/InputDataPembelian">
                Input Pembelian
                </Link>
            </Menu.Item>
          </SubMenu>


          <SubMenu key="Bahan Baku" icon={<InsertRowRightOutlined />} title="Bahan Baku" >
            <Menu.Item key="8">
              <Link to="/LaporanInventory">
                Data Table
                </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/InputDataInventory">
                Input Inventory
                </Link>
            </Menu.Item>

          </SubMenu>



          {/* end kepala pabrik */}


          {/* Admin */}
          {/* <Menu.Item key="10" icon={<HomeOutlined />}>
            <Link to="/DashboardAdmin">
              Dashboard Admin
              </Link>
          </Menu.Item> */}
          <Menu.Item key="11" icon={<DatabaseOutlined />}>
            <Link to="/Storage">
              Storage
              </Link>
          </Menu.Item>

          {/* end Admin */}





        </Menu>
      </Sider>
    </>
  );
}

export default Navbar;
