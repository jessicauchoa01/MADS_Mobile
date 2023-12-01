import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import logo from "../assets/logo.svg";
import "./Menu.css";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import { Link } from "react-router-dom";
import menu from "../assets/Menu.svg";
import { PATH, PATH_imagem } from "./apiConfig";

const Menu: React.FC = () => {
  return (
    <IonPage className="homePage">
      <img className="menuPizza" src={menu} alt="menu" />
      <IonContent className="bodyMenu">
        <IonGrid>
          <IonRow>
            <IonCol>
              <p className="pTitulo">Título</p>
              <p className="pDescricao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit
                similique saepe odio, ea soluta quam cum cumque esse rerum,
                ipsum animi. Nam earum amet, placeat iste molestias sequi id.
                milique saepe odio, ea soluta quam cum cumque esse rerum, ipsum
                animi. Nam earum amet, placeat iste molestias sequi id
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton className="btnMenu" size="large" shape="round" type="button">
          Adicionar ao Carrinho
        </IonButton>
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

export default Menu;
