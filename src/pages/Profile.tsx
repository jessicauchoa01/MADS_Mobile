import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenu,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import "../pages/Profile.css";
import {
  arrowBackOutline,
  arrowUp,
  image,
  logOutOutline,
} from "ionicons/icons";
import profileImg from "../assets/profileImg.svg";
import food from "../assets/food.svg";
import { Link } from "react-router-dom";
import { PATH, PATH_imagem } from "./apiConfig";
import { pencilOutline } from "ionicons/icons";

const Profile: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop(500);
  };

  const [ultimaEncomenda, setUltimaEncomenda] = useState<any[]>([]);
  const [encomendas, setPratos] = useState<any[]>([]);
  const token = localStorage.getItem("token");
  const nome = localStorage.getItem("nomePerfil");
  const [profileImage, setProfileImage] = useState<string | null>(profileImg);

  const logout = async () => {
    localStorage.clear();
    window.location.href = "/homepage";
  };

  const listarUltimaEncomenda = async () => {
    try {
      const response = await fetch(
        `${PATH}ultimaEncomendaMobile.php?token=` + token
      );

      const ultimaEncomenda = await response.json();

      setUltimaEncomenda(ultimaEncomenda);
    } catch (error) {
      console.error("Erro na solicitação de encomendas:", error);
    }
  };

  const listarEncomendas = async () => {
    try {
      const response = await fetch(
        `${PATH}HistoricoEncomendasMobile.php?token=` + token
      );

      const encomendas = await response.json();

      setPratos(encomendas);
    } catch (error) {
      console.error("Erro na solicitação de encomendas:", error);
    }
  };

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setProfileImage(imageUrl);

        const GuardarImgPerfil = async () => {
          try {
            const formData = new FormData();
            formData.append(
              "imgPerfil",
              new Blob([selectedFile], { type: selectedFile.type }),
              selectedFile.name
            );

            const response = await fetch(`${PATH}GuardarImgPerfilMobile.php`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formData,
            });

            if (response.ok) {
              console.log("Imagem Guardada");
              localStorage.setItem(
                "imgPerfil",
                "assets/imagensPerfil/" + selectedFile.name
              );
            } else {
              console.error("Falha a guardar a imagem");
            }
          } catch (error) {
            console.error("Erro na solicitação:", error);
          }
        };

        GuardarImgPerfil();
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    listarUltimaEncomenda();
  }, []);

  useEffect(() => {
    listarEncomendas();
  }, []);

  useEffect(() => {
    const savedProfileImage =
      `${PATH_imagem}` + localStorage.getItem("imgPerfil");
    setProfileImage(savedProfileImage);
  }, []);

  function getColorForStatus(status: string): string {
    switch (status) {
      case "Submetida":
        return "green";
      case "Em Processamento":
        return "blue";
      case "Por Levantar":
        return "orange";
      case "Entregue":
        return "purple";
      case "Cancelada":
        return "red";
      default:
        return "black";
    }
  }

  return (
    <IonPage className="encomendasPage">
      <IonHeader className="header">
        <IonRow className="rowProfile">
          <IonCol className="setaPerfil">
            <Link to="/homepage">
              <IonIcon id="setaPerfil" icon={arrowBackOutline} />
            </Link>
          </IonCol>
          <IonCol className="colImgName">
            <img
              src={profileImage || profileImg}
              alt=""
              className="profile-image"
              onClick={() => document.getElementById("fileInput")?.click()}
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              style={{ display: "none" }}
            />
            <h1 className="nomePerfil">{nome}</h1>
          </IonCol>
          <IonCol className="colButton">
            <IonButton className="buttonProfile" onClick={() => logout()}>
              <IonIcon icon={logOutOutline}></IonIcon>Logout
            </IonButton>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent>
        <h1 className="encomendas">Encomendas ativas</h1>
        {encomendas != null && encomendas.length > 0 && (
          <p className="quantidades">Quant.</p>
        )}
        {ultimaEncomenda != null && ultimaEncomenda.length > 0 ? (
          ultimaEncomenda.map((encomenda) => (
            <div className="cardEncomendas">
              <div className="contentCardEncomendas">
                <p className="pizzaEncomendas">{encomenda.nome}</p>
                <p className="precoEncomendas">{encomenda.quantidade}</p>
                <p
                  className="situacaoEncomendas"
                  style={{ color: getColorForStatus(encomenda.situacao) }}
                >
                  {encomenda.situacao}
                </p>
              </div>
              <div className="linhaEncomendas"></div>
            </div>
          ))
        ) : (
          <div className="noPratos">
            <h4>Desculpe, nenhuma encomenda foi encontrada.</h4>
          </div>
        )}
        <h1 className="encomendas">Histórico de encomendas</h1>
        {encomendas != null && encomendas.length > 0 && (
          <p className="quantidades">Quant.</p>
        )}
        {encomendas != null && encomendas.length > 0 ? (
          encomendas.map((encomenda) => (
            <div className="cardEncomendas">
              <div className="contentCardEncomendas">
                <p className="pizzaEncomendas">{encomenda.nome}</p>
                <p className="precoEncomendas">{encomenda.quantidade}</p>
                <p
                  className="situacaoEncomendas"
                  style={{ color: getColorForStatus(encomenda.situacao) }}
                >
                  {encomenda.situacao}
                </p>
              </div>
              <div className="linhaEncomendas"></div>
            </div>
          ))
        ) : (
          <div className="noPratos">
            <h4>Desculpe, nenhuma encomenda foi encontrada.</h4>
          </div>
        )}
      </IonContent>
      <IonFooter className="footer">
        <IonToolbar class="footer-icons ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <div className="icons">
                  <Link to="/homepage">
                    <IonIcon icon={homeFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/restaurants">
                    <IonIcon icon={restauranteFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/carrinho">
                    <IonIcon icon={carrinhoFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  {localStorage.getItem("token") === null ? (
                    <Link to="/login">
                      <IonIcon icon={perfilFooter} size="large" />
                    </Link>
                  ) : (
                    <Link to="/Profile">
                      <IonIcon icon={perfilFooter} size="large" />
                    </Link>
                  )}
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
