import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import personAddOutline from "../assets/Vector.svg";
import goeat from "../assets/logo.svg";
import logInOutline from "../assets/login.svg";
import "./Login.css";
import { Link } from "react-router-dom";


const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const mensagem = "";

  const doLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log("Form submitted!");
      console.log(JSON.stringify({ email: username, password: password }));

      const response = await fetch(
        "http://localhost/Mads_web/sourceWeb/sourceMobile/loginValidaMobile.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: username, password: password}),
        }
      );

      const responseData = await response.json();

      // const mensagem = responseData["message"];

      //JSON TOKEN DE EXEMPLO
      // const token = '1234';
      // const carrinho = [2, 4];

      if (response.ok) {
        // Login bem-sucedido, redirecione ou faça qualquer outra ação necessária
        //COLOCA O TOKEN NA STORAGE
        // localStorage.setItem("carrinho", JSON.stringify(carrinho));
        // localStorage.setItem("token", token);
        console.log(responseData);
        window.location.href = "/homepage";
      } else {
        // Exiba uma mensagem de erro ou realize ações específicas em caso de falha
        //ELIMINA O TOKEN DA STORAGE
        //localStorage.setItem("token", "");
        // console.log(mensagem);
        // console.log(typeof(mensagem));
        console.error(responseData);
        // window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <IonPage className="loginPage">
      <IonContent scrollY={false}>
        <div className="ion-text-center ion-padding">
          <img src={goeat} width={"150px"} alt="Logo" />
        </div>
        <div className="main">
          <div className="seta">
            <Link to="/homepage">
              <IonIcon id="seta" icon={arrowBackOutline} />
            </Link>
          </div>
          <form onSubmit={doLogin}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className="texto">
                    <IonInput
                      className="input"
                      labelPlacement="floating"
                      placeholder="Introduza o seu nome de utilizador"
                      label="Utilizador"
                      type="text"
                      value={username}
                      onIonInput={(e) => setUsername(e.detail.value!)}
                    />
                    <IonInput
                      className="input"
                      labelPlacement="floating"
                      placeholder="Introduza a sua password"
                      label="Password"
                      type="password"
                      value={password}
                      onIonInput={(e) => setPassword(e.detail.value!)}
                    />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
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
            <IonAlert
              header="{mensagem}"
              trigger="login"
              onDidDismiss={({ detail }) =>
                console.log(`Dismissed with role: ${detail.role}`)
              }
            ></IonAlert>
          </form>
          <IonButton
            className="registo"
            id="registar"
            size="large"
            fill="outline"
            shape="round"
            routerLink="/register"
            expand="block"
          >
            Registar
            <IonIcon icon={personAddOutline} slot="end" />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
