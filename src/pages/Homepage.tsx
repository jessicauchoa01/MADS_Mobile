import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import React from "react";
import logo from "./assets/logo.svg";
import entrada from "./assets/entrada.svg";
import sopa from "./assets/sopa.svg";
import peixe from "./assets/peixe.svg";
import carne from "./assets/carne.svg";
import vegetariano from "./assets/vegetariano.svg";
import sobremesa from "./assets/sobremesa.svg";
import bebida from "./assets/bebida.svg";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="ion-text-center ion-padding">
            <img src={logo} alt="GoEat logo" width={"150px"} />
          </div>
          <div className="wrapper">
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={entrada} alt="" />
                <p>Entradas</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={sopa} alt="" />
                <p>Sopas</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={peixe} alt="" />
                <p>Peixe</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={carne} alt="" />
                <p>Carne</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={vegetariano} alt="" />
                <p>Vegatariano</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={sobremesa} alt="" />
                <p>Sobremesa</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
            <IonButton className="ion-activatable ripple-parent circle">
              <div>
                <img src={bebida} alt="" />
                <p>Bebidas</p>
              </div>
              <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
      <IonFooter></IonFooter>
    </IonPage>
  );
};

export default Homepage;
