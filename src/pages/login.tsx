import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
} from "@ionic/react";
import React from "react";
import { arrowBackOutline } from "ionicons/icons";
import personAddOutline from "../pages/assets/Vector.svg";
import goeat from "../pages/assets/goeat.svg";
import logInOutline from "../pages/assets/login.svg";

const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("doLogin");
  };

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <div className="ion-text-center ion-padding">
          <img src={goeat} width={"150px"} />
        </div>
        <IonButtons slot="start" className="arrow-back"></IonButtons>
        <div className="main">
          <div className="seta">
            <IonIcon id="seta" icon={arrowBackOutline} />
          </div>
          <form onSubmit={doLogin}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className="introduza">
                    <p id="a">Introduza o utilizador</p>
                    <p id="b">Introduza a palavra-passe</p>
                  </div>
                  <div className="texto">
                    <IonInput
                      className="input"
                      labelPlacement="floating"
                      placeholder="Introduza o seu nome de utilizador"
                      label="Utilizador"
                      type="text"
                    ></IonInput>
                    <IonInput
                      className="input"
                      labelPlacement="floating"
                      placeholder="Introduza a sua password"
                      label="Password"
                      type="password"
                    ></IonInput>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
          <form onSubmit={doLogin}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className="button-login">
                    <IonButton
                      className="login"
                      id="login"
                      size="large"
                      shape="round"
                      type="submit"
                      expand="block"
                    >
                      Login
                      <IonIcon icon={logInOutline} slot="end" />
                    </IonButton>
                  </div>

                  <IonButton
                    className="registo"
                    id="registar"
                    size="large"
                    fill="outline"
                    shape="round"
                    routerLink="/register"
                    type="button"
                    expand="block"
                  >
                    Registar
                    <IonIcon icon={personAddOutline} slot="end" />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
