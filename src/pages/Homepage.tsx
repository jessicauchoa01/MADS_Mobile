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
import React from "react";
import logo from "../assets/logo.svg";
import entrada from "../assets/entrada.svg";
import sopa from "../assets/sopa.svg";
import peixe from "../assets/peixe.svg";
import carne from "../assets/carne.svg";
import vegetariano from "../assets/vegetariano.svg";
import sobremesa from "../assets/sobremesa.svg";
import bebida from "../assets/bebida.svg";
import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import orders from "../assets/orders.png";
import cart from "../assets/cart.svg";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <IonPage className="homePage">
      <IonHeader>
        <IonToolbar>
          <div className="ion-text-center ion-padding">
            <img src={logo} alt="GoEat logo" width={"150px"} />
          </div>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <p>Entradas</p>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Sopas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Peixe</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Carne</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Vegatariano</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Sobremesas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="carrosel" shape="round">
                  <div>
                    <p>Bebidas</p>
                  </div>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
      <IonFooter></IonFooter>
    </IonPage>
  );
};

export default Homepage;
