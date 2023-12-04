import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import "../pages/Profile.css";
import { logOutOutline } from "ionicons/icons";
import profileImg from "../assets/profileImg.svg";
import food from "../assets/food.svg";
import { Link } from "react-router-dom";
import { PATH, PATH_imagem } from "./apiConfig";

const Profile: React.FC = () => {
  console.log(localStorage.getItem("token"));
  const logout = async () => {
    localStorage.clear();
    window.location.href = "/homepage";
  };

  return (
    <IonPage className="encomendasPage">
      <div className="containerEncomendas">
        <IonRow className="ion-justify-content-end">
          <IonCol size="auto">
            <IonButton className="buttonProfile" onClick={() => logout()}>
              <IonIcon slot="end" icon={logOutOutline}></IonIcon>Logout
            </IonButton>
          </IonCol>
        </IonRow>

        <div className="image">
          <img src={profileImg} alt="" width={"100px"} />
        </div>

        <h1 className="encomendas">Encomendas</h1>

        <div className="cardEncomendas">
          <div className="linhaEncomendas"></div>
          <div className="contentCardEncomendas">
            <img className="imgPizzaEncomendas" src={food} alt="imagem pizza" />
            <p className="pizzaEncomendas">Nome</p>
            <p className="precoEncomendas">Preço€</p>
          </div>
          <div className="linhaEncomendas"></div>
        </div>
      </div>
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
