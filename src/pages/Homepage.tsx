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
import pizza from "../assets/pizza.svg";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <IonPage className="homePage">
      <IonHeader className="header">
        <IonToolbar>
          <div className="ion-text-center ion-padding">
            <img src={logo} alt="GoEat logo" width={"25%"} />
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
      <IonContent className="body">
        <IonCard className="comidas">
          <img className="pizza" src={pizza} alt="" />
          <h2>Título</h2>
          <h4>Descrição</h4>
          <h4>Preço</h4>
        </IonCard>
      </IonContent>
      <IonFooter></IonFooter>
    </IonPage>
  );
};
export default Homepage;
