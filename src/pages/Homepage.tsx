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
  IonImg,
  IonMenu,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
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
  const [showButton, setShowButton] = useState(false);

  const adicionar = (prato: any) => {
    addPrato(prato);
  };

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

  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop(500);
  };

  useEffect(() => {
    const handleScroll = (event: CustomEvent) => {
      const scrollPosition = event.detail.scrollTop || 0;

      const scrollThreshold = 500;

      if (scrollPosition > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    contentRef.current?.addEventListener("ionScroll", handleScroll);

    return () => {
      contentRef.current?.removeEventListener("ionScroll", handleScroll);
    };
  }, []);

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
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => listarPratos()}
                >
                  <p>Todos</p>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="carrosel"
                  shape="round"
                  onClick={() => filtrarPratos(1)}
                >
                  <p>Entradas</p>
                </IonButton>
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
                    <p>Vegetariano</p>
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
      <IonContent
        className="contentScroll"
        ref={contentRef}
        scrollEvents={true}
      >
        <IonGrid>
          <IonRow></IonRow>
          <IonCol>
            <div id="fantasma"></div>
          </IonCol>
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
        <IonFab slot="fixed" vertical="bottom" horizontal="center">
          <IonFabButton
            className="btnTop"
            style={{ opacity: showButton ? 0.5 : 0 }} // Set opacity based on showButton state
            onClick={() => scrollToTop()}
          >
            <IonIcon icon={arrowUp}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
      <IonFooter className="footer">
        <IonToolbar class="footer-icons ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <div className="icons">
                  <Link to="/homepage" onClick={() => listarPratos()}>
                    <IonIcon icon={homeFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/restaurants" onClick={() => listarPratos()}>
                    <IonIcon icon={restauranteFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  <Link to="/carrinho" onClick={() => listarPratos()}>
                    <IonIcon icon={carrinhoFooter} size="large" />
                  </Link>
                </div>
              </IonCol>
              <IonCol>
                <div className="icons">
                  {localStorage.getItem("token") === null ? (
                    <Link to="/login" onClick={() => listarPratos()}>
                      <IonIcon icon={perfilFooter} size="large" />
                    </Link>
                  ) : (
                    <Link to="/Profile" onClick={() => listarPratos()}>
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
