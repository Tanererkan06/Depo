import React from 'react'
import { connect } from "react-redux";

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
                <th>{item.id}</th>
                <td>{item.ürün}</td>
                <td>{item.stok}</td>
                <td>{item.birim}</td>
                <td>{item.sınıf}</td>
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

export default connect(mapStateToProps, {  })(Depo);
