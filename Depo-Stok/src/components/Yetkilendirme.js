
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { Alert } from "react-bootstrap";
import { girişDeğiş, çıkışDeğiş, işlemDeğiş, kullanıcıEkle } from "../actions";

const Yetkilendirme = (props) => {
  const [kullanıcı, setKullanıcı] = useState("")
  
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

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header " id="flush-headingOne">
            <button
              style={{
                width: "200px",
                backgroundColor: "blue",
                color: "white",
              }}
              class="accordion-button collapsed btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Personel Ekle
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse "
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="p-4 personelEkle">
              <p>
                {" "}
                Lütfen yeni personelin kullanıcı adını ve yetkilerini giriniz.
                Personelin şifresi "asdfasdf" olacaktır ve isterse kendisi
                değiştirebilir.
              </p>
              <input
                type="name"
                style={{ width: "300px" }}
                placeholder="kullanıcı Adı"
                onChange={(e) => setKullanıcı(e.target.value)}
              />

              <div class="form-check">
                <input
                  class="form-check-input1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Giriş
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault12"
                />
                <label class="form-check-label" for="flexCheckDefault12">
                  Çıkış
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault23"
                />
                <label class="form-check-label" for="flexCheckDefault23">
                  İşlemler
                </label>
              </div>
              <button className="btn btn-primary"
              onClick={()=>{
                if (kullanıcı === ""){alert("Lütfen Kullanıcı Adı giriniz")} else if (
                  props.mydata.personel.find((pers)=> pers.kullanıcıAdı=== kullanıcı))
{ alert(
            "Bu Kullanıcı Adı zaten kullanılıyor. Lütfen yeni bir Kullanıcı Adı giriniz."
          )} else {props.kullanıcıEkle(kullanıcı, )}



                
              }}
              
              >Personeli Ekle</button>
            </div>
          </div>
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
})(Yetkilendirme);
