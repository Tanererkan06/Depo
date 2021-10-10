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
} from "../actions";
import Canvas from "./Canvas";
import Deneme from "./Deneme";

const DepoGiriş = (props) => {
  const [belgeNo, setBelgeNo] = useState("");
  const [alınanŞirket, setAlınanŞirket] = useState("");
  const [satıcı, setSatıcı] = useState("");
  const [alıcı, setAlıcı] = useState("");
  const [açıklama, setAçıklama] = useState("");
  const [tarih, setTarih] = useState("");


  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;


  return (
    <div>
      <br />
      <h2 className="anaBaşlık">Satın Alma Belgesi Girişi</h2>
      <div
        style={{
          margin: "20px",
          border: "2px solid black",
          borderRadius: "3px",
        }}
      >
        <form className="m-2">
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                for="exampleInputE1"
                class="form-label d-inline"
                style={{ text: "center" }}
              >
                Belge Numarası *
              </label>
            </span>
            <span>
              <input
                type="text"
                class="form-control d-inline exampleInputEmail1"
                id="exampleInputE1"
                value={belgeNo}
                onChange={(e) => setBelgeNo(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                for="exampleInputEmail1"
                class="form-label d-inline"
                style={{ text: "center" }}
              >
                Ürünlerin Alındığı Şirket *
              </label>
            </span>
            <span>
              <input
                type="text"
                class="form-control d-inline exampleInputEmail1"
                id="exampleInputEmail1"
                value={alınanŞirket}
                onChange={(e) => setAlınanŞirket(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPassword1" class="form-label">
              Satcının İsmi
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPassword1"
              value={satıcı}
              onChange={(e) => setSatıcı(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPassword" class="form-label">
              Alıcının İsmi
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPassword"
              value={alıcı}
              onChange={(e) => setAlıcı(e.target.value)}
            />
          </div>
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPasswo" class="form-label">
              Açıklama
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPasswo"
              value={açıklama}
              onChange={(e) => setAçıklama(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPasswoq" class="form-label">
              Alış Tarihi *
            </label>
            <input
              min="1899-01-01"
              max={today}
              type="date"
              class="form-control exampleInputEmail1"
              id="exampleInputPasswoq"
              value={tarih}
              onChange={(e) => setTarih(e.target.value)}
            />
          </div>
          <span style={{ color: "rgba(0, 0, 0, 0.452)" }}>
            * işaretli olanlar doldurulması mecburi alanlardır
          </span>
        </form>
        <Canvas />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sil</th>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody lassName="idid1" className="deneme2">
            {props.mydata.alınıyor.map((item) => (
              <tr key={Math.random()}>
                <th className="idid1">
                  <svg
                    lassName="idid1"
                    onClick={() => props.sil(item.id)}
                    style={{ cursor: "pointer" }}
                    color="red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </th>
                <th className="idid1">{item.id}</th>
                <td className="idid1">{item.ürün}</td>
                <td className="idid1">
                  <img className="listemm" width={"40"} src={item.fotograf} />
                </td>
                <td className="idid1">{item.sınıf}</td>
                <td className="idid1">
                  <Deneme props={props} item={item} />
                </td>

                <td className="idid1">{item.birim}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            margin: "20px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Belgeleyen:</h4>
          <div>
            <h4>{props.mydata.kullanıcı.kullanıcıAdı}</h4>
            <h5>{new Date().toLocaleDateString()} </h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={(enn) => {
            let boş = 0;

            const adım = () => {
              for (let i = 1; i < props.mydata.alınıyor.length + 1; i++) {
                if (
                  document.querySelector(
                    `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                  ).value === ""
                ) {
                  alert(
                    "lütfen eklediğiniz ürünlere ne kadar ekleme yapacaksanız yazınız"
                  );
                  boş = 1;
                  break;
                }
                if (
                  document.querySelector(
                    `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                  ).value === "0"
                ) {
                  alert(
                    "lütfen eklediğiniz ürünlere 0'dan yüksek bir sayı yazınız"
                  );
                  boş = 1;
                  break;
                }
              }

              if (boş === 1) {
                boş = 0;
              } else {
                let onay = window.confirm(
                  "Satın Alma İşlemini Onaylıyor Musunuz ?"
                );

                if (onay == true) {
                  for (let i = 1; i < props.mydata.alınıyor.length + 1; i++) {
                    props.artılarıEkleme(
                      enn,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > th:nth-child(2)`
                      ).innerHTML,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                      ).value
                    );
                  }

                  props.sonEkleme(
                    enn,
                    alıcı,
                    alınanŞirket,
                    açıklama,
                    belgeNo,
                    satıcı,
                    tarih
                  );

                  setBelgeNo("");
                  setAlınanŞirket("");
                  setSatıcı("");
                  setAlıcı("");
                  setAçıklama("");
                  setTarih("");
                }
              }
            };
            let BelgeVarMı = 0;

            props.mydata.yapılanAlışlar.find((alış) =>
              alış[0].belgeNo === belgeNo
                ? props.mydata.yapılanAlışlar.find((alış) =>
                    alış[0].belgeNo === belgeNo
                      ? (BelgeVarMı = 1)
                      : console.log(BelgeVarMı)
                  )
                : console.log(BelgeVarMı)
            );

            if (BelgeVarMı === 1) {
              alert("Bu Belge Numarası İle Zaten Evrak Düzenlenmiş");
              BelgeVarMı = 0;
            } else {
              belgeNo === ""
                ? alert("Lütfen Belge Numarası Giriniz")
                : alınanŞirket === ""
                ? alert("Lütfen Şirket Adı Giriniz")
                : tarih === ""
                ? alert("Lütfen Alış Tarihi Giriniz")
                : document.querySelector(
                    `.deneme2 > tr:nth-child( 1 ) > th:nth-child(2)`
                  ) === null
                ? alert("Lütfen Depodan Ekle butonu ile ürün ekleyiniz")
                : adım();
            }
          }}
        >
          Belgeyi Onayla
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setBelgeNo("");
            setAlınanŞirket("");
            setSatıcı("");
            setAlıcı("");
            setAçıklama("");
            setTarih("");

            props.belgeyiTemizle();
          }}
        >
          {" "}
          Belgeyi Temizle{" "}
        </button>
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
})(DepoGiriş);
