import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import {
  sil,
  giriş,
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  link2,
} from "../actions";
import Canvas from "./Canvas";
import Deneme from "./Deneme";

const Işlemler = (props) => {
  return (
    <div>
      <div
        style={{
          width: "95%",
          border: "1px, solid, black",
          margin: "auto",
        }}
      >
        <h2
          style={{
            backgroundColor: "#00FFFF",
            marginBottom: "0px",
            padding: "5px",
          }}
        >
          Yapılan Alış İşlemlerin Listesi
        </h2>
        <div>
          <table className="table" style={{ backgroundColor: "#7FFFD4" }}>
            <thead>
              <tr>
                <th scope="col">Belge No</th>
                <th scope="col">Alınan Şirket</th>
                <th scope="col">Tarih</th>
                <th scope="col">Belgeleyen</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.yapılanAlışlar.map((item) => (
                <tr key={Math.random()}>
                  <Link
                    className="linked"
                    to={`/işlemler/alış_${item[0].belgeNo.toLowerCase()}`}
                  >
                    <th
                      className="linked"
                      onClick={() => props.link(`${item[0].belgeNo}`)}
                    >
                      {item[0].belgeNo}
                    </th>{" "}
                  </Link>
                  <td>{item[0].alınanŞirket}</td>
                  <td>{item[0].tarih}</td>
                  <td>{item[0].onayVerenKullanıcı}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          width: "95%",
          border: "1px, solid, black",
          margin: "auto",
        }}
      >
        <h2
          style={{
            backgroundColor: "#f08080",
            marginBottom: "0px",
            padding: "5px",
          }}
        >
          Yapılan Satış İşlemlerin Listesi
        </h2>
        <div>
          <table className="table" style={{ backgroundColor: "#f08090" }}>
            <thead>
              <tr>
                <th scope="col">Belge No</th>
                <th scope="col">Satılan Şirket</th>
                <th scope="col">Tarih</th>
                <th scope="col">Belgeleyen</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.yapılanSatışlar.map((item) => (
                <tr key={Math.random()}>
                  <Link
                    className="linked"
                    to={`/işlemler/satış_${item[0].belgeNo.toLowerCase()}`}
                  >
                    <th
                      className="linked"
                      onClick={() => props.link2(`${item[0].belgeNo}`)}
                    >
                      {item[0].belgeNo}
                    </th>{" "}
                  </Link>
                  <td>{item[0].alınanŞirket}</td>
                  <td>{item[0].tarih}</td>
                  <td>{item[0].onayVerenKullanıcı}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {
  sil,
  giriş,
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  link2,
})(Işlemler);
