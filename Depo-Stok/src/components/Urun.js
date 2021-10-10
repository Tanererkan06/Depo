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
  urun2,
} from "../actions";

const Urun = (props) => {

  console.log(
                    

  )

 
  return (
    <div>
      <br />
      <h2>{props.mydata.urun2}</h2>

      {props.mydata.data.find((item) => item.id === props.mydata.urun2) ? (
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column  justify-content-around">
            <p>
             <b>Seri No: </b> {" "}
              {
                props.mydata.data.find((item) => item.id === props.mydata.urun2)
                  .id
              }
            </p>
            <p>
             <b> Ürün Adı:</b> {" "}
              {
                props.mydata.data.find((item) => item.id === props.mydata.urun2)
                  .ürün
              }
            </p>
            <p>
            <b>Birimi: </b>  {" "}
              {
                props.mydata.data.find((item) => item.id === props.mydata.urun2)
                  .birim
              }
            </p>
            <p>
            <b> Sınıfı:</b>  {" "}
              {
                props.mydata.data.find((item) => item.id === props.mydata.urun2)
                  .sınıf
              }
            </p>
          </div>
          <div>
            <img
              width="300px"
              src={
                props.mydata.data.find((item) => item.id === props.mydata.urun2)
                  .fotograf
              }
              alt=""
            />
          </div>

          <div className="özet">
              {/* {
                props.mydata.yapılanAlışlar.map((item)=>
                    item.[1].filter((items)=>items.id ===props.mydata.urun2) ? (
                    item.[1].filter(
                      
                      (items)=>items.id=== props.mydata.urun2 ) ? (
                      <p>alınan miktar: {items.artı}</p>

                    ) : ("")) : ("")

                )
              } */}
          </div>

        </div>
      ) : (
        ""
      )}
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
})(Urun);
