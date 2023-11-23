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
import "./Carrinho.css";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import carrinhoVazio from "../assets/carrinhoVazio.svg";
import carrinhoBtn from "../assets/carrinhoBtn.svg";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <IonPage className="carrinhoPage">
      <IonContent>
        <h1>Carrinho</h1>
        <div className="imagemCarrinho">
          <img src={carrinhoVazio} alt="carrinho Vazio" />
        </div>
        <div className="mainCarrinho">
          <div className="addCarrinho">
            <p>Adicione artigos ao carrinho</p>
          </div>
          <p>
            Assim que adicionar artigos ao carrinho, os artigos aparecem aqui.
          </p>
        </div>
        <IonButton
          className="btnComprar"
          size="large"
          shape="round"
          routerLink="/homepage"
          type="button"
        >
          Começar a comprar
          <IonIcon icon={carrinhoBtn} slot="end" />
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
                  <Link to="/login">
                    <IonIcon icon={perfilFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Homepage;
