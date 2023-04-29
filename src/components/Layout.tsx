import React from "react";
import s from '../styles/components/Layout.module.scss'
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {

  return (<div className={s.layout}>
    <Header />
    <Outlet/>
  </div>)
}

export default Layout;