import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sil, giriş, alınıyor, yeniUrun } from "../actions";
import Upcanvas from "./Upcanvas"


const Canvas = (props) => {

  return (
    <div>
      <div style={{}}>
        <button
          style={{ float: "right", marginRight: "10px" }}
          class="btn btn-primary sticky"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor "
            class="bi bi-chevron-left me-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>{" "}
          Depodan Ekle
        </button>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <div>
            <div style={{}}>
              <Upcanvas />
            </div>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Ekle</th>
                      <th scope="col">Seri No</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Sınıf</th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.mydata.data.map((item) => (
                      <tr key={Math.random()}>
                        <th>
                          <div>
                            {props.mydata.alınıyor.find(
                              (checkle) => item.id === checkle.id
                            ) ? (
                              props.mydata.alınıyor.map(
                                (checkle) => item.id === checkle.id
                              ) ? (
                                <svg
                                  onClick={() => props.sil(item.id)}
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
                                ""
                              )
                            ) : (
                              <svg
                                onClick={() => props.alınıyor(item)}
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
                          </div>
                        </th>
                        <th>{item.id}</th>
                        <td>{item.ürün}</td>
                        <td>{item.sınıf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ekle</th>
                <th scope="col">Seri No</th>
                <th scope="col">Ürün</th>
                <th scope="col">Sınıf</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.data.map((item) => (
                <tr key={Math.random()}>
                  <th>
                    <div>
                      {props.mydata.alınıyor.find(
                        (checkle) => checkle.id === item.id
                      ) ? (
                        props.mydata.alınıyor.map(
                          (checkle) => checkle.id === item.id
                        ) ? (
                          <svg
                            onClick={() => props.sil(item.id)}
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
                          ""
                        )
                      ) : (
                        <svg
                          onClick={() => props.alınıyor(item)}
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
                    </div>
                  </th>
                  <th>{item.id}</th>
                  <td>{item.ürün}</td>
                  <td>{item.sınıf}</td>
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

export default connect(mapStateToProps, { sil, giriş, alınıyor, yeniUrun })(
  Canvas
);
