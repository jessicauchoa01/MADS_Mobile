import {
  IonAlert,
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
import { Link, Route } from "react-router-dom";
import checkmarkDoneOutline from "../assets/criarConta.svg";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./Register.css";
import { PATH, PATH_imagem } from "./apiConfig";

const Register: React.FC = () => {
  const [nome, setNome] = useState("");
  const [contribuinte, setContribuinte] = useState("");
  const [telemovel, setTelemovel] = useState("");
  const [rua, setRua] = useState("");
  const [porta, setPorta] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [pais, setPais] = useState("");
  const [codPostal, setCodPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [message, setMessage] = useState("");

  const doRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        // mudar para o vosso localhost
        `${PATH}RegistoMobile.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome,
            contribuinte: contribuinte,
            telemovel: telemovel,
            rua: rua,
            porta: porta,
            localizacao: localizacao,
            pais: pais,
            codPostal: codPostal,
            email: email,
            password: password,
            confirmacao: confirmacao,
          }),
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);

      if (response.ok) {
        console.log(message);
        window.location.href = "/login";
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
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
              value={nome}
              onIonInput={(e) => setNome(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza um nº contribuinte válido"
              label="Nº contribuinte"
              type="text"
              value={contribuinte}
              onIonInput={(e) => setContribuinte(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza um nº telemóvel"
              label="Nº telemóvel"
              type="text"
              value={telemovel}
              onIonInput={(e) => setTelemovel(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza uma rua válida"
              label="Rua"
              type="text"
              value={rua}
              onIonInput={(e) => setRua(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o nº da porta"
              label="Nº porta"
              type="text"
              value={porta}
              onIonInput={(e) => setPorta(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza a localização"
              label="Localização"
              type="text"
              value={localizacao}
              onIonInput={(e) => setLocalizacao(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o país"
              label="País"
              type="text"
              value={pais}
              onIonInput={(e) => setPais(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o código postal"
              label="Código Postal"
              type="text"
              value={codPostal}
              onIonInput={(e) => setCodPostal(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza o seu email"
              label="Email"
              type="email"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza uma palavra-passe válida"
              label="Palavra-passe"
              type="password"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
            ></IonInput>
            <IonInput
              className="ion-margin-top input"
              labelPlacement="floating"
              placeholder="Introduza de novo a palavra-passe"
              label="Confirmação palavra-passe"
              type="password"
              value={confirmacao}
              onIonInput={(e) => setConfirmacao(e.detail.value!)}
            ></IonInput>
            <IonButton type="submit" expand="block" className="btn-hp" id="btn-hp">
              Criar conta
              <IonIcon icon={checkmarkDoneOutline} slot="end" />
            </IonButton>
            <IonAlert
              header={message}
              trigger="btn-hp"
              onDidDismiss={({ detail }) =>
                console.log(`Dismissed with role: ${detail.role}`)
              }
            ></IonAlert>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
