import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { arrowBackOutline } from "../../node_modules/ionicons/icons";
import {
  checkmarkDoneCircleOutline,
  logInOutline,
  personAdd,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import checkmarkDoneOutline from "../assets/criarConta.svg";
import React from "react";
import logo from "../assets/logo.svg";
import "./Register.css";

const Register: React.FC = () => {
  const router = useIonRouter();
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };

  return (
    <IonPage className="registerPage">
      <IonContent>
        <div className="ion-text-center ion-padding">
          <img src={logo} alt="GoEat logo" width={"150px"} />
        </div>
        <IonButtons slot="start" className="arrow-back"></IonButtons>
        <div className="form">
          <div className="seta">
            <Link to="/login">
              <IonIcon id="seta" icon={arrowBackOutline} />
            </Link>
          </div>
          <form onSubmit={doRegister}>
            <IonInput
              className="input"
              labelPlacement="floating"
              placeholder="Introduza o seu primeiro e último nome"
              label="Nome"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza um nº contribuinte válido"
              label="Nº contribuinte"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza um nº telemóvel"
              label="Nº telemóvel"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza uma rua válida"
              label="Rua"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o nº da porta"
              label="Nº porta"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza a localização"
              label="Localização"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o país"
              label="País"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o código postal"
              label="Código Postal"
              type="text"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o seu email"
              label="Email"
              type="email"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza uma palavra-passe válida"
              label="Palavra-passe"
              type="password"
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza de novo a palavra-passe"
              label="Confirmação palavra-passe"
              type="password"
            ></IonInput>
            <IonButton type="submit" expand="block" className="btn-hp">
              Criar conta
              <IonIcon icon={checkmarkDoneOutline} slot="end" />
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
