
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { Alert } from "react-bootstrap";
import {
  girişDeğiş,
  çıkışDeğiş,
  işlemDeğiş,
  kullanıcıEkle,
  personeliSil,
} from "../actions";

const Yetkilendirme = (props) => {
  const [kullanıcı, setKullanıcı] = useState("")
  const [girş, setGirş] = useState(false)
  const [çıkş, setÇıkş] = useState(false);
  const [işlm, setİşlm] = useState(false);

  if (document.getElementById('flexCheckDefault') == true ){
    console.log("truuue")
  }
// console.log(document.querySelector(".girş"));

  return (
    <div>
      <h2>Personel Yetkilendirme</h2>
      <br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Personel</th>
              <th scope="col">Alış</th>
              <th scope="col">Satış</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>

          <tbody>
            {props.mydata.personel.map((person) => (
              <tr
                key={Math.random()}
                className={person.kullanıcıAdı === "Admin" ? "d-none " : ""}
              >
                <th>{person.kullanıcıAdı}</th>
                <td>
                  {person.giriş ? (
                    <svg
                      onClick={() => props.girişDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.girişDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
                <td>
                  {person.çıkış ? (
                    <svg
                      onClick={() => props.çıkışDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.çıkışDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
                <td>
                  {" "}
                  {person.işlemler ? (
                    <svg
                      onClick={() => props.işlemDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => props.işlemDeğiş(person.kullanıcıAdı)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p> Tüm personeliniz Depo içerisindeki envanteri görebilmektedir. </p>
      </div>

      <button
        class="btn btn-primary d-block m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Personel Ekle
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div>
          <div className="p-4">
            <p>
              {" "}
              Lütfen yeni personelin kullanıcı adını ve yetkilerini giriniz.
              Personelin şifresi "asdfasdf" olacaktır ve isterse kendisi
              değiştirebilir.
            </p>
            <input
              type="name"
              value={kullanıcı}
              style={{ width: "350px", marginBottom: "5px" }}
              placeholder="kullanıcı Adı"
              onChange={(e) => setKullanıcı(e.target.value)}
            />

            <div className="py-1 ">
              {girş ? (
                <svg
                  onClick={() => setGirş(!girş)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline"
                  onClick={() => setGirş(!girş)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">Giriş</p>
            </div>

            <div className="py-1 ">
              {çıkş ? (
                <svg
                  onClick={() => setÇıkş(!çıkş)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline"
                  onClick={() => setÇıkş(!çıkş)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">Çıkış</p>
            </div>

            <div className="py-1 ">
              {işlm ? (
                <svg
                  onClick={() => setİşlm(!işlm)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              ) : (
                <svg
                  className="d-inline"
                  onClick={() => setİşlm(!işlm)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              )}

              <p className="d-inline ms-2">İşlemler</p>
            </div>

            <button
              className="btn btn-primary my-2"
              onClick={() => {
                if (kullanıcı === "") {
                  alert("Lütfen Kullanıcı Adı giriniz");
                } else if (
                  props.mydata.personel.find(
                    (pers) => pers.kullanıcıAdı === kullanıcı
                  )
                ) {
                  alert(
                    "Bu Kullanıcı Adı zaten kullanılıyor. Lütfen yeni bir Kullanıcı Adı giriniz."
                  );
                } else {
                  if (
                    window.confirm(
                      kullanıcı +
                        " " +
                        "adlı personeli sisteme kaydetmek istediğinizden emin misiniz?"
                    ) == true
                  ) {
                    props.kullanıcıEkle(kullanıcı, girş, çıkş, işlm);
                    setKullanıcı("");
                    setGirş(false);
                    setÇıkş(false);
                    setİşlm(false);
                  }
                }
              }}
            >
              Personeli Ekle
            </button>
          </div>
        </div>
      </div>

      <button
        class="btn btn-danger d-block m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight1"
        aria-controls="offcanvasRight"
      >
        Personel Sil
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="m-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Seçim</th>
                <th scope="col">Personel</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.personel.map((person) => (
                <tr
                  key={Math.random()}
                  className={person.kullanıcıAdı === "Admin" ? "d-none " : ""}
                >
                  <td>
                    <svg
                      onClick={() => {
                        if (
                          window.confirm(
                            person.kullanıcıAdı +
                              " " +
                              "adlı kullanıcının sistemden silinmesini onaylıyor musunuz ?"
                          )
                        ) {
                          props.personeliSil(person.kullanıcıAdı);
                        }
                      }}
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
                  </td>

                  <th>{person.kullanıcıAdı}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
  girişDeğiş,
  çıkışDeğiş,
  işlemDeğiş,
  kullanıcıEkle,
  personeliSil,
})(Yetkilendirme);
