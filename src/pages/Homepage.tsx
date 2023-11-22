import {
  IonButton,
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
import "swiper/css";

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="ion-text-center ion-padding">
            <img src={logo} alt="GoEat logo" width={"25%"} />
          </div>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <IonButton shape="round" size="small">
                  <div>
                    <img src={entrada} alt="" />
                    <p>Entradas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">
                  <div>
                    <img src={sopa} alt="" />
                    <p>Sopas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">
                  <div>
                    <img src={peixe} alt="" />
                    <p>Peixe</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">
                  <div>
                    <img src={carne} alt="" />
                    <p>Carne</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round" size="small">
                  <div>
                    <img src={vegetariano} alt="" />
                    <p>Vegatariano</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round" size="small">
                  <div>
                    <img src={sobremesa} alt="" />
                    <p>Sobremesas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton shape="round">
                  <div>
                    <img src={bebida} alt="" />
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
