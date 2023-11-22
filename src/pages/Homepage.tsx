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
import iconCarrinho from "../assets/iconCarrinho.svg";
import "./Homepage.css";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";

const Homepage: React.FC = () => {
  return (
    <IonPage className="homePage">
      <IonHeader className="header">
        <IonToolbar>
          <div className="imagem ion-text-center">
            <img src={logo} alt="GoEat logo" width={"100px"} />
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
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        <IonCard className="comidas">
          <img className="pizza" src={pizza} alt="" />
          <div className="descricao">
            <h2>Título</h2>
            <h4>Descrição</h4>
            <h4>Preço</h4>
          </div>
          <img className="carrinho" src={iconCarrinho} alt="" />
        </IonCard>
      </IonContent>
      <IonFooter className="footer">
        <IonToolbar class="footer-icons ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <div className="icons">
                  <IonIcon icon={homeFooter} size="large" />
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <IonIcon icon={restauranteFooter} size="large" />
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <IonIcon icon={carrinhoFooter} size="large" />
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <IonIcon icon={perfilFooter} size="large" />
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
