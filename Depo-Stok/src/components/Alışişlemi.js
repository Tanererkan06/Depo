import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  sil,
  giriş,
  belgeEkle,
  artılarıEkleme,
  sonEkleme,
  eklemeHatası,
  belgeyiTemizle,
  link,
  alışİşlemiSilme,
  artılarıSilme,
} from "../actions";

const Alışişlemi = (props) => {


 let alış = props.mydata.yapılanAlışlar.find((alış)=>
   alış[0].belgeNo === props.mydata.alınıyor2
  )

  return (
    <div>
      <h3> Satın Alma Belgesi</h3>
      <br />
      <div style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <div style={{ padding: "5px" }}>
          <h4>
            {" "}
            <b>Belge No:</b> {alış[0].belgeNo}
          </h4>
          <h6>
            {" "}
            <b> Tarih:</b> {alış[0].tarih}
          </h6>
          <h6>
            {" "}
            <b>Satın Alan:</b> {alış[0].alıcı}
          </h6>
          <h6>
            {" "}
            <b>Satışı Yapan:</b> {alış[0].satıcı}
          </h6>
          <h6>
            {" "}
            <b>Açıklama:</b> {alış[0].açıklama}
          </h6>
          <h6>
            {" "}
            Bu belge <b>{alış[0].onayVerenKullanıcı}</b> tarafından{" "}
            <b>{alış[0].onayTarihi} </b> tarihinde sisteme girilmiştir
          </h6>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody className="deneme3">
            {alış[1].map((item) => (
              <tr key={Math.random()}>
                <th>{item.id}</th>
                <td>{item.ürün}</td>
                <td>
                  <img width={"40"} src={item.fotograf} />
                </td>
                <td>{item.sınıf}</td>
                <td>{item.artı}</td>
                <td>{item.birim}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-4">
        <Link
          to="/işlemler"
          className={` ${
            props.mydata.kullanıcı.yetkilendirme ? "" : "disabled"
          } `}
        >
          <button
            className={`m-2 btn btn-danger ${
              props.mydata.kullanıcı.yetkilendirme ? "" : "disabled"
            } `}
            onClick={(enn) => {
              if (
                window.confirm("Belgeyi silmek istediğinizden emin misiniz ?")
              ) {
                for (let i = 1; i < alış[1].length + 1; i++) {
                  props.artılarıSilme(
                    enn,
                    document.querySelector(
                      `.deneme3 > tr:nth-child( ${i} ) > th:nth-child(1)`
                    ).innerHTML,
                    document.querySelector(
                      `.deneme3 > tr:nth-child( ${i} ) > td:nth-child(5)`
                    ).innerHTML
                  );
                }

                props.alışİşlemiSilme();
                window.location.href = "/işlemler";
              }
            }}
          >
            Belgeyi Sil
          </button>
        </Link>

        <p style={{ color: "grey" }}>
          {" "}
          <b className="m-2 ">Bu belgeyi yalnızca Admin silebilir.</b>{" "}
        </p>
      </div>
    </div>
  );
};

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
  alışİşlemiSilme,
  artılarıSilme,
})(Alışişlemi);
