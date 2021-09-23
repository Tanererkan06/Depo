import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sil, giriş, belgeEkle } from "../actions";

const Deneme2 = ({ props, item, sınır }) => {
  const [artı, setArtı] = useState("");

  return (
    <div>
      <input
        className={item.id}
        value={artı}
        style={{ width: "70px" }}
        type="number"
        min="1"
        max={sınır}
        onChange={(eventq) => {
          setArtı(document.querySelector(`.${item.id}`).value);
        }}
      />
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
})(Deneme2);
