import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {

  urun2,
} from "../actions";

 const Depo = (props) => {

    return (
      <div className="depoo">
        <br />

        <h2 className="anaBaşlık">Depoda Bulunan Envanterler</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Stok</th>
              <th scope="col">Birim</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Fotograf</th>
            </tr>
          </thead>

          <tbody>
            {props.mydata.data.map((item) => (
              <tr key={Math.random()}>
                <Link className="idid" to={`/${item.id}`.toLowerCase()}>
                  <th className="idid" onClick={() => props.urun2(item.id)}>
                    {item.id}
                  </th>
                </Link>
                <td className="idid1">{item.ürün}</td>
                <td className="idid1">{item.stok}</td>
                <td className="idid1">{item.birim}</td>
                <td className="idid1">{item.sınıf}</td>
                <td>
                  <img className="listemm" width={"40"} src={item.fotograf} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {  urun2})(Depo);
