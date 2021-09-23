import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { kalk } from "../actions";

const Kalk = (props) => {
  return (
    <div className="m-3">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-person-fill me-2"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <span
          style={{
            position: "relative",
            bottom: "5px",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          {props.mydata.kullanıcı.kullanıcıAdı}
        </span>
      </div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <button
          className="btn btn-danger d-block w-100"
          onClick={() => props.kalk()}
        >
          Çıkış Yap
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, { kalk })(Kalk);
