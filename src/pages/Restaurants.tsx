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
  const [restaurantes, setRestaurantes] = useState<any[]>([]);

  const scrollToTop = () => {
    const scrollComida = document.getElementById("fantasma")!;
    const topElement = document.getElementById("top");
    if (topElement) {
      scrollComida.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listarRestaurantes = async () => {
    try {
      const response = await fetch(`${PATH}ListarRestaurantesMobile.php`);

      const restaurantes = await response.json();

      setRestaurantes(restaurantes);
    } catch (error) {
      console.error("Erro na solicitação de restaurantes:", error);
    }
  };

  useEffect(() => {
    listarRestaurantes();
  }, []);
  
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
        {restaurantes != null && restaurantes.length > 0 ? (
          restaurantes.map((restaurante) => (
            <Link to={`/restaurantes/?restaurante_id=${restaurante.id}&nome=${restaurante.nome}&img=${restaurante.imagem}`} key={restaurante.id}>
              <IonCard key={restaurante.id} className="cardRestaurantes">
                <div className="cardImage">
                  <img
                    className="imagemRestaurante"
                    src={`${PATH_imagem}${restaurante.imagem}`}
                    alt={restaurante.nome}
                  />
                  <div className="overlay"></div>
                  <div className="nomeRestaurante">
                    <h2>{restaurante.nome}</h2>
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
        {restaurantes != null && restaurantes.length > 2 && (
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
