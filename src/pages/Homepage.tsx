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
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import pizza from "../assets/pizza.svg";
import iconCarrinho from "../assets/iconCarrinho.svg";
import "./Homepage.css";
import addCarrinho from "../assets/iconCarrinho.svg";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import { Link } from "react-router-dom";
import useBasketStore from "../../src/store/basketStore";
import { PATH, PATH_imagem } from "./apiConfig";
import Carrinho from "./Carrinho";
import { arrowUp } from "ionicons/icons";

const Homepage: React.FC = () => {
  const [pratos, setPratos] = useState<any[]>([]);
  const [tipo_id, getTipo_id] = useState(Number);
  const { addPrato } = useBasketStore();
  const { lista } = useBasketStore();

  const adicionar = (prato: any) => {
    addPrato(prato);
  };

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  //TRY PARA O GET DIRETO NA HOMEPAGE
  const listarPratos = async () => {
    try {
      const response = await fetch(
        // mudar para o vosso localhost
        `${PATH}PratosMobile.php`
      );

      const pratos = await response.json();

      setPratos(pratos);
    } catch (error) {
      console.error("Erro na solicitação de pratos:", error);
    }
  };

  const filtrarPratos = async (tipo_id: number) => {
    try {
      const response = await fetch(
        // mudar para o vosso localhost
        `${PATH}FiltrarPratosMobile.php?tipo_id=` + tipo_id
      );

      const pratos = await response.json();

      setPratos(pratos);
    } catch (error) {
      console.error("Erro na solicitação do filtro:", error);
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
    <IonPage className="homePage">
      <IonHeader className="header">
        <IonToolbar>
          <div className="imagem ion-text-center">
            <img src={logo} alt="GoEat logo" width={"100px"} />
          </div>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <Link to="/homepage">
                  <IonButton
                    className="carrosel"
                    shape="round"
                    onClick={() => filtrarPratos(1)}
                  >
                    <p>Entradas</p>
                  </IonButton>
                </Link>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(2)}
                >
                  <div>
                    <p>Sopas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(3)}
                >
                  <div>
                    <p>Peixe</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(4)}
                >
                  <div>
                    <p>Carne</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(5)}
                >
                  <div>
                    <p>Vegatariano</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(6)}
                >
                  <div>
                    <p>Sobremesas</p>
                  </div>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(7)}
                >
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
        <div id="top"></div>
        <button className="scrollTop" onClick={scrollToTop}>
          <IonIcon icon={arrowUp} />
        </button>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        {pratos != null && pratos.length > 0 ? (
          pratos.map((prato) => (
            <IonCard key={prato.id} className="comidas">
              <img
                className="imagemEmenta"
                src={`${PATH_imagem}${prato.imagem}`}
                alt=""
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <div className="descricao">
                <h2>{prato.nome}</h2>
                <h4>{prato.descricao}</h4>
                <div className="ult-linha">
                  <h4>{`Preço: ${prato.preco}.00 €`}</h4>
                  {localStorage.getItem("token") !== null ? (
                    <IonButton
                      className="btnAdicionarCarrinho"
                      onClick={() => adicionar(prato)}
                    >
                      <img
                        src={addCarrinho}
                        className="imgAddCarrinho"
                        alt="mais"
                      />
                    </IonButton>
                  ) : null}
                </div>
              </div>
            </IonCard>
          ))
        ) : (
          <div className="noPratos">
            <h4>Desculpe, nenhum prato foi encontrado.</h4>
          </div>
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
                  {localStorage.getItem("token") === null ? (
                    <Link to="/login">
                      <IonIcon icon={perfilFooter} size="large" />
                    </Link>
                  ) : (
                    <Link to="/Profile">
                      <IonIcon icon={perfilFooter} size="large" />
                    </Link>
                  )}
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
