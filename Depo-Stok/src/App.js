import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Route } from "react-router-dom";
import Personel from "./components/Personel";
import Depo from "./components/Depo";
import DepoGiriş from "./components/DepoGiriş";
import Stokcikis from "./components/Stokcikis";
import Işlemler from "./components/Işlemler";
import Yetkilendirme from "./components/Yetkilendirme";
import Kalk from "./components/Kalk";
import Alışişlemi from "./components/Alışişlemi";
import Satışişlemi from "./components/Satışişlemi";
import { Link } from "react-router-dom";
import depo from "../src/depo.png"

const App = (props) => {

  return (
    <div className="App">
      <div className="Apply">
        <div className="logo">
          <img src={depo} alt="" />
        </div>

        <nav className="navbar ">
          <div className="">
            <Link to="/">
              <button className="btn btn-primary">
                <span>Depo</span>
              </button>
            </Link>

            <Link
              to="/alış"
              className={props.mydata.kullanıcı.giriş ? " " : "disabled-link"}
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.kullanıcı.giriş ? " " : "disabled"
                } `}
              >
                <span>Alış</span>
              </button>
            </Link>

            <Link
              to="/satış"
              className={props.mydata.kullanıcı.çıkış ? " " : "disabled-link"}
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.kullanıcı.çıkış ? " " : "disabled"
                } `}
              >
                <span>Satış</span>
              </button>
            </Link>

            <Link
              to="/işlemler"
              className={
                props.mydata.kullanıcı.işlemler ? " " : "disabled-link"
              }
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.kullanıcı.işlemler ? "" : "disabled"
                } `}
              >
                <span>İşlemler</span>
              </button>
            </Link>

            <Link to="/yetkilendirme">
              <button
                className={`btn btn-warning ${
                  props.mydata.kullanıcı.yetkilendirme ? "" : "d-none"
                } `}
              >
                <span>Yetkilendirme</span>
              </button>
            </Link>
          </div>
        </nav>

        <div className="login">
          {props.mydata.giriş ? <Kalk /> : <Personel />}
        </div>
      </div>

      <Route
        path={`/işlemler/alış_${props.mydata.alınıyor2}`.toLowerCase()}
        exact
        component={Alışişlemi}
      />
      <Route
        path={`/işlemler/satış_${props.mydata.satılıyor2}`.toLowerCase()}
        exact
        component={Satışişlemi}
      />
      <Route path="/" exact component={Depo} />
      <Route path="/alış" exact component={DepoGiriş} />
      <Route path="/satış" exact component={Stokcikis} />
      <Route path="/işlemler" exact component={Işlemler} />
      <Route path="/yetkilendirme" exact component={Yetkilendirme} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, { sepeteEkle })(App);
