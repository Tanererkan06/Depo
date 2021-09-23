
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { Alert } from "react-bootstrap";

const Yetkilendirme = (props) => {

  return (
    <div>

     
     
     
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {  })(Yetkilendirme);
