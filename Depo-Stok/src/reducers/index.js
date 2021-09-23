import { Component } from "react";
import {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
  bilgiler,
  yapılanAlışlar,
  alınıyor2,
  satılıyor,
  yapılanSatışlar,
} from "../data";

const INITIAL_STATE = {
  data,
  giriş,
  personel,
  kullanıcıGeçici,
  kullanıcı,
  alınıyor,
  sınıflar,
  birimler,
  bilgiler,
  yapılanAlışlar,
  alınıyor2,
  satılıyor,
  yapılanSatışlar,
};


export const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "GİRİŞ":
      {
        state.personel.find((perns) => perns.kullanıcıAdı === action.gkullanıcı)
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? console.log("giriş başarılı")
            : alert("şifre hatalı")
          : alert("kullanıcı adı hatalı");
      }

      return {
        ...state,

        kullanıcı: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? state.personel.find(
                (perns) => perns.kullanıcıAdı === action.gkullanıcı
              )
            : { ...state.kullanıcı }
          : { ...state.kullanıcı },

        giriş: state.personel.find(
          (perns) => perns.kullanıcıAdı === action.gkullanıcı
        )
          ? state.personel.find(
              (perns) => perns.kullanıcıAdı === action.gkullanıcı
            ).şifre === action.gşifre
            ? true
            : false
          : false,
      };

    case "KALK":
      return {
        ...state,
        giriş: false,
      };

    case "SIL":
      return {
        ...state,
        alınıyor: state.alınıyor.find((sil) => sil.id === action.payload)
          ? state.alınıyor.filter((filt) => filt.id !== action.payload)
          : [...state.alınıyor],
      };
    case "SIL2":
      return {
        ...state,
        satılıyor: state.satılıyor.find((sil) => sil.id === action.payload)
          ? state.satılıyor.filter((filt) => filt.id !== action.payload)
          : [...state.satılıyor],
      };

    case "ALINIYOR":
      console.log(action);
      return {
        ...state,
        alınıyor: [...state.alınıyor, { ...action.payload, artı: 0 }],
      };
    case "SATILIYOR":
      console.log(action);
      return {
        ...state,
        satılıyor: [...state.satılıyor, { ...action.payload, eksi: 0 }],
      };

    case "YENI_URUN":
      return {
        ...state,

        alınıyor: [alınıyor.filter((saas) => saas.id !== action.payload.id)],
      };

    case "SINIF":
      return {
        ...state,

        sınıflar: [...sınıflar, action.payload],
      };
    case "BİRİM":
      return {
        ...state,

        birimler: [...birimler, action.payload],
      };

    case "YENİ_ÜRÜN_EKLE":
      console.log(action);

      action.id === ""
        ? alert("Lütfen Seri No giriniz")
        : state.data.find((item) => item.id === action.id)
        ? alert(
            "Bu Seri No zaten kullanılıyor. Lütfen Benzersiz bir Seri No giriniz."
          )
        : action.ad === ""
        ? alert("Lütfen Ürün Adı giriniz")
        : action.snf === ""
        ? alert(
            "Lütfen Birim seçiniz. Listede yoksa Yeni Birim ekleyip seçiniz."
          )
        : action.brm === ""
        ? alert(
            "Lütfen Sınıf seçiniz. Listede yoksa Yeni Sınıf ekleyip seçiniz."
          )
        : action.foto === ""
        ? alert("Lütfen Fotoğraf Linki giriniz")
        : console.log("oldu");

      return {
        ...state,

        data:
          action.id === ""
            ? [...data]
            : state.data.find((item) => item.id === action.id)
            ? [...data]
            : action.ad === ""
            ? [...data]
            : action.snf === ""
            ? [...data]
            : action.brm === ""
            ? [...data]
            : action.foto === ""
            ? [...data]
            : [
                ...data,
                {
                  id: action.id,
                  ürün: action.ad,
                  sınıf: action.snf,
                  birim: action.brm,
                  fotograf: action.foto,
                  stok: 0,
                },
              ],
      };

    case "BELGE_EKLE":
      console.log(action);

      return {
        ...state,
      };

    case "ARTILARI_EKLEME":
      return {
        ...state,

        alınıyor: state.alınıyor.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                artı: Number(action.değer),
              }
            : { ...içerik }
        ),

        data: state.data.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                stok: içerik.stok + Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "ARTILARI_EKLEME2":
      return {
        ...state,

        satılıyor: state.satılıyor.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                eksi: Number(action.değer),
              }
            : { ...içerik }
        ),

        data: state.data.map((içerik) =>
          içerik.id === action.item
            ? {
                ...içerik,
                stok: içerik.stok - Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "SON_EKLEME":
      console.log("son ekleme");
      return {
        ...state,

        yapılanAlışlar: [
          ...state.yapılanAlışlar,
          [
            {
              alıcı: action.alıcı,
              alınanŞirket: action.alınanŞirket,
              açıklama: action.açıklama,
              belgeNo: action.belgeNo,
              satıcı: action.satıcı,
              tarih: action.tarih,
              onayVerenKullanıcı: state.kullanıcı.kullanıcıAdı,
              onayTarihi: new Date().toLocaleDateString(),
            },
            state.alınıyor,
          ],
        ],

        alınıyor: [],
      };
    case "SON_EKLEME2":
      console.log("son ekleme");
      return {
        ...state,

        yapılanSatışlar: [
          ...state.yapılanSatışlar,
          [
            {
              alıcı: action.alıcı,
              alınanŞirket: action.alınanŞirket,
              açıklama: action.açıklama,
              belgeNo: action.belgeNo,
              satıcı: action.satıcı,
              tarih: action.tarih,
              onayVerenKullanıcı: state.kullanıcı.kullanıcıAdı,
              onayTarihi: new Date().toLocaleDateString(),
            },
            state.satılıyor,
          ],
        ],

        satılıyor: [],
      };

    case "EKLEME_HATASI":
      console.log("hata");

      return {
        ...state,
      };
    case "EKLEME_HATASI2":
      console.log("hata2");

      return {
        ...state,
      };
    case "BELGEYİ_TEMİZLE":
      return {
        ...state,
        alınıyor: [],
      };
    case "BELGEYİ_TEMİZLE2":
      return {
        ...state,
        satılıyor: [],
      };

    case "LİNK":
      console.log(action.payload);
      return {
        ...state,
        alınıyor2: action.payload,
      };

    case "LİNK2":
      console.log(action.payload);
      return {
        ...state,
        satılıyor2: action.payload,
      };

    case "ALIŞ_İŞLEMİ_SİLME":
      return {
        ...state,

        yapılanAlışlar: state.yapılanAlışlar.filter(
          (alış) => alış[0].belgeNo !== state.alınıyor2
        ),

        alınıyor2: [],
      };

    case "SATIŞ_İŞLEMİ_SİLME":
      return {
        ...state,

        yapılanSatışlar: state.yapılanSatışlar.filter(
          (alış) => alış[0].belgeNo !== state.satılıyor2
        ),

        satılıyor2: [],
      };

    case "ARTILARI_SİLME":
      console.log(action);
      return {
        ...state,
        data: state.data.map((içerik) =>
          içerik.id === action.id
            ? {
                ...içerik,
                stok: içerik.stok - Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    case "ARTILARI_SİLME2":
      console.log(action);
      return {
        ...state,
        data: state.data.map((içerik) =>
          içerik.id === action.id
            ? {
                ...içerik,
                stok: içerik.stok + Number(action.değer),
              }
            : { ...içerik }
        ),
      };

    default:
      return state;
  }
};
