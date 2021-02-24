import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const role = sessionStorage.getItem('role')


export const SidebarData = [
  {
    title: 'Dashboard Kepala Pabrik',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan Produksi',
    path: '/laporanProduksi',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan Pembelian',
    path: '/laporanPembelian',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan Inventory',
    path: '/laporanInventory',
    icon: <FaIcons.FaDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan Penjualan',
    path: '/laporanPenjualan',
    icon: <FaIcons.FaMoneyBillWave />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/DashboardAdmin',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
