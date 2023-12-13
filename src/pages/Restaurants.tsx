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

  const scrollToTop = () => {
    const scrollComida = document.getElementById("fantasma")!;
    const topElement = document.getElementById("top");
    if (topElement) {
      scrollComida.scrollIntoView({ behavior: "smooth" });
    }
  };

  //TRY PARA O GET DIRETO NA HOMEPAGE
  const listarPratos = async () => {
    try {
      const response = await fetch(`${PATH}PratosMobile.php`);

      const pratos = await response.json();

      setPratos(pratos);
    } catch (error) {
      console.error("Erro na solicitação de pratos:", error);
    }
  };

  const filtrarPratos = async (tipo_id: number) => {
    try {
      const response = await fetch(
        `${PATH}FiltrarPratosMobile.php?tipo_id=` + tipo_id
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar pratos");
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const pratos = await response.json();
        setPratos(pratos);
      } else {
        throw new Error("Resposta inesperada do servidor");
      }
    } catch (error) {
      console.error("Erro na solicitação do filtro:", error);
      setPratos([]);
    }
  };

  if (tipo_id == 0) {
    useEffect(() => {
      listarPratos();
    }, []);
  }

  if (tipo_id != 0) {
    useEffect(() => {
      filtrarPratos(tipo_id);
    }, []);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="asd">
          <div className="image">
            <img src={logo} alt="GoEat logo" width={"100px"} />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentRestaurante">
        <IonGrid>
          <IonRow></IonRow>
          <IonCol>
            <div id="fantasma"></div>
          </IonCol>
        </IonGrid>
        {pratos != null && pratos.length > 0 ? (
          pratos.map((prato) => (
            <Link to={`/restaurantes/${prato.id}`} key={prato.id}>
              <IonCard key={prato.id} className="cardRestaurantes">
                <div className="cardImage">
                  <img
                    className="imagemRestaurante"
                    src={`${PATH_imagem}${prato.imagem}`}
                    alt={prato.nome}
                  />
                  <div className="overlay"></div>
                  <div className="nomeRestaurante">
                    <h2>{prato.nome}</h2>
                  </div>
                </div>
              </IonCard>
            </Link>
          ))
        ) : (
          <div className="noPRestaurantes">
            <h4>Desculpe, nenhum restaurante foi encontrado.</h4>
          </div>
        )}
        <div id="top"></div>
        {pratos != null && pratos.length > 2 && (
          <button className="scrollTop" onClick={scrollToTop}>
            <IonIcon icon={arrowUp} />
          </button>
        )}
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
