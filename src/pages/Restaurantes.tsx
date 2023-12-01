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
import "./Restaurantes.css";
import addCarrinho from "../assets/iconCarrinho.svg";
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
import { Link } from "react-router-dom";
import useBasketStore from "../store/basketStore";
import { PATH, PATH_imagem } from "./apiConfig";
import Carrinho from "./Carrinho";
import Kfc from "../assets/KFC.svg";

const Restaurante: React.FC = () => {
  //PROCURA O JSON TOKEN NO STORAGE
  //const token = localStorage.getItem("token");
  //const carrinho = localStorage.getItem("carrinho");
  const [pratos, setPratos] = useState<any[]>([]);
  const [tipo_id, getTipo_id] = useState(Number);
  const { addPrato } = useBasketStore();
  const { lista } = useBasketStore();
  // console.log(lista);
  // console.log("https://goeat:8890/sourceMobile/FiltrarPratosMobile.php?tipo_id=" + tipo_id);

  const adicionar = (prato: any) => {
    addPrato(prato);
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
    // console.log(token),
    // console.log(carrinho),
    //   console.log(typeof(carrinho)),
    <IonPage className="homePage">
      <img className="imgRestaurante" src={Kfc} alt="GoEat logo" />
      <IonContent className="body">
        <IonGrid>
          <IonRow>
            <IonCol>
              <p className="restName">Nome do Restaurante</p>
            </IonCol>
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
export default Restaurante;