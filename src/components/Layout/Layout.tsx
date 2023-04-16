import React from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

export default function Layout(props: any) {
  return (
    <section className="dashboardLayout">
      <section className="sideNav">
        <SideNav />
      </section>
      <section className="pageContent">
        <Header />
        <div>{props.children}</div>
      </section>
    </section>
  );
}
