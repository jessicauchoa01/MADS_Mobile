import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import "../pages/Restaurants.css";
import logo from "../assets/logo.svg";
import homeFooter from "../assets/homeFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import { Link } from "react-router-dom";
import addCarrinho from "../assets/iconCarrinho.svg";
import "./Restaurantes";
import useBasketStore from "../../src/store/basketStore";
import { PATH, PATH_imagem } from "./apiConfig";
import food from "../assets/food.svg";
import { arrowBackOutline, arrowUp, logOutOutline } from "ionicons/icons";

const Restaurants: React.FC = () => {
  const [pratos, setPratos] = useState<any[]>([]);
  const [tipo_id, getTipo_id] = useState(Number);
  const { addPrato } = useBasketStore();
  const { lista } = useBasketStore();

  const adicionar = (prato: any) => {
    addPrato(prato);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="asd">
          <div className="image">
            <img src={logo} alt="GoEat logo" width={"100px"} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <IonGrid>
          <div className="texto">
            <Link to={"/restaurantes"} className="texto">
              Restaurante 1
            </Link>
          </div>
          <IonRow className="scroll">
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <div className="texto">
            <Link to={"/restaurantes"} className="texto">
              Restaurante 2
            </Link>
          </div>
          <IonRow className="scroll">
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <div className="texto">
            <Link to={"/restaurantes"} className="texto">
              Restaurante 3
            </Link>
          </div>
          <IonRow className="scroll">
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinho"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="menu1">
                <img className="imagemRest" src={food} alt="imagem pizza" />
                <IonButton
                  className="btnAdicionarCarrinhoRest"
                  onClick={() => adicionar(pratos)}
                >
                  <img
                    src={addCarrinho}
                    className="imgAddCarrinhoRes"
                    alt="mais"
                  />
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
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
                  <Link to="/restaurants">
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
                  <Link to="/profile">
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

export default Restaurants;
