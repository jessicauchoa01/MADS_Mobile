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

const Restaurants: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="content">
        <div className="button">
          <IonButton className="buttonLogout">
            <IonIcon slot="end" icon={logOutOutline}></IonIcon>Logout
          </IonButton>
        </div>
        <div className="image">
          <img src={profileImg} alt="" width={"150px"} />
        </div>
        <div className="menus">
          <h1 className="title">Encomendas</h1>
          <div className="menu">
            <img src={food} alt="" />
            <p>Bife grelhado com batata frita</p>
            <p>15,00€</p>
          </div>
          <div className="menu">
            <img src={food} alt="" />
            <p>Bife grelhado com batata frita</p>
            <p>15,00€</p>
          </div>
          <div className="menu">
            <img src={food} alt="" />
            <p>Bife grelhado com batata frita</p>
            <p>15,00€</p>
          </div>
        </div>
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
                  <Link to="/restaurant">
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

export default Restaurants;
