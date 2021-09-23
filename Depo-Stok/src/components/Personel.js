import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { giriş } from "../actions";

const Personel = (props) => {
  const [kulla, setKulla] = useState("");
  const [şifr, setŞifr] = useState("");


  return (
    <div>
      <form onSubmit={(e)=> {
        e.preventDefault()
        props.giriş(e, kulla, şifr)
        setKulla("")
        setŞifr("")
      }
        }>
        <input
          className="d-block"
          type="name"
          placeholder="kullanıcı Adı"
          value={kulla}
          onChange={(e) => setKulla(e.target.value)}
        />

        <input
          className="d-block"
          type="password"
          placeholder="Şifre"
          value={şifr}
          onChange={(e) => setŞifr(e.target.value)}
        />

        <button type="submit" className="w-100 btn btn-primary">
          Gönder
        </button>


    
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, { giriş })(
  Personel
);
