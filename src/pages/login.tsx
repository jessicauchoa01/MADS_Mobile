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
import { logInOutline, personAddOutline } from "ionicons/icons";
import goeat from "../pages/assets/goeat.svg";

const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("doLogin");
  };
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" className="custom-back-button" />
      </IonButtons>
      <IonContent scrollY={false} color={"warning"}>
        <div className="ion-text-center ion-padding">
          <img src={goeat} width={"50%"} />
        </div>
        <form onSubmit={doLogin}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className="texto">
                  <IonInput
                    labelPlacement="floating"
                    label="Utilizador"
                    type="text"
                    placeholder="Utilizador"
                    color={"light"}
                  ></IonInput>
                  <IonInput
                    labelPlacement="floating"
                    label="Palavra-Passe"
                    type="password"
                    color={"light"}
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
                <div className="button">
                  <IonButton
                    className="login"
                    id="login"
                    size="large"
                    shape="round"
                    type="submit"
                    expand="block"
                    color={"tertiary"}
                  >
                    Login
                    <IonIcon icon={logInOutline} slot="end" />
                  </IonButton>

                  <IonButton
                    id="registar"
                    size="large"
                    fill="outline"
                    shape="round"
                    routerLink="/register"
                    type="button"
                    expand="block"
                    className="ion-margin-top"
                    color={"light"}
                  >
                    Registar
                    <IonIcon icon={personAddOutline} slot="end" />
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
