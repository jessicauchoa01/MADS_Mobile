import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
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
import React, { useEffect, useState } from "react";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import "../pages/Profile.css";
import { arrowBackOutline, arrowUp, logOutOutline } from "ionicons/icons";
import profileImg from "../assets/profileImg.svg";
import food from "../assets/food.svg";
import { Link } from "react-router-dom";
import { PATH, PATH_imagem } from "./apiConfig";
import { pencilOutline } from "ionicons/icons";

const Profile: React.FC = () => {
  const [ultimaEncomenda, setUltimaEncomenda] = useState<any[]>([]);
  const [encomendas, setPratos] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  const logout = async () => {
    localStorage.removeItem("profileImage");
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

  useEffect(() => {
    listarUltimaEncomenda();
  }, []);

  useEffect(() => {
    listarEncomendas();
  }, []);

  const [profileImage, setProfileImage] = useState<string | null>(profileImg);

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setProfileImage(imageUrl);

        // Armazenamento no localStorage
        localStorage.setItem("profileImage", imageUrl);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    } else {
      setProfileImage(profileImg); // Define a imagem padrão se não houver uma imagem salva
    }
  }, []);

  return (
    <IonPage className="encomendasPage">
      <div className="seta">
        <Link to="/homepage">
          <IonIcon id="seta" icon={arrowBackOutline} />
        </Link>
      </div>
      <IonRow className="ion-justify-content-end">
        <IonCol size="auto">
          <IonButton className="buttonProfile" onClick={() => logout()}>
            <IonIcon slot="end" icon={logOutOutline}></IonIcon>Logout
          </IonButton>
        </IonCol>
      </IonRow>
      <div
        className="image"
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <img
          src={profileImage || profileImg}
          alt=""
          className="profile-image"
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          style={{ display: "none" }}
        />
      </div>
      <IonContent>
        <h1 className="encomendas">Última Encomenda</h1>
        {ultimaEncomenda != null && ultimaEncomenda.length > 0 ? (
          ultimaEncomenda.map((encomenda) => (
            <div className="cardEncomendas">
              <div className="linhaEncomendas"></div>
              <div className="contentCardEncomendas">
                <p className="pizzaEncomendas">{encomenda.nome}</p>
                <p className="precoEncomendas">
                  {encomenda.quantidade} unidade(s)
                </p>
                <p>{encomenda.situacao}</p>
              </div>
              <div className="linhaEncomendas"></div>
            </div>
          ))
        ) : (
          <div className="noPratos">
            <h4>Desculpe, nenhuma encomenda foi encontrada.</h4>
          </div>
        )}
        <IonGrid>
          <IonRow></IonRow>
          <IonCol>
            <div id="fantasma"></div>
          </IonCol>
        </IonGrid>
        <h1 className="encomendas">Histórico</h1>
        {encomendas != null && encomendas.length > 0 ? (
          encomendas.map((encomenda) => (
            <div className="cardEncomendas">
              <div className="linhaEncomendas"></div>
              <div className="contentCardEncomendas">
                <p className="pizzaEncomendas">{encomenda.nome}</p>
                <p className="precoEncomendas">
                  {encomenda.quantidade} unidade(s)
                </p>
                <p>{encomenda.situacao}</p>
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
