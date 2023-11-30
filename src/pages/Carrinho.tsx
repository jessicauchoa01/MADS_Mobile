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
import imagemPizza from "../assets/image 1.svg";
import mais from "../assets/mais.svg";
import lixo from "../assets/lixo.svg";
import encomendar from "../assets/encomendar.svg";
import { Link } from "react-router-dom";
import useBasketStore from "../store/basketStore";
import {PATH, PATH_imagem} from "./apiConfig";

const Carrinho: React.FC = () => {
  const { addPrato } = useBasketStore();
  const { removePrato } = useBasketStore();
  const { lista } = useBasketStore();
  const { total } = useBasketStore();
  console.log(lista);

  return (
    <IonPage className="carrinhoPage">
      <IonContent>
      <h1>Carrinho</h1>
      {lista.length > 0 ? (
          lista.map((prato) => (
            <><div className="cardCarrinho">
              <div className="linha"></div>
              <div className="contentCard">
                <img className="imgPizza" src={`${PATH_imagem}${prato.imagem}`} alt="imagem pizza" />
                <p className="pizza">{prato.nome}</p>
                <div className="quantidade">
                  <img src={lixo} alt="lixo" />
                  <p>{prato.quantity}</p>
                  <img src={mais} alt="mais" />
                </div>
              </div>
              <p className="preco">Preço: {prato.preco*prato.quantity}€</p>
            </div></>
          ))
        ) : (
          <><div className="imagemCarrinho">
              <img src={carrinhoVazio} alt="carrinho Vazio" />
            </div><div className="mainCarrinho">
                <div className="addCarrinho">
                  <p>Adicione artigos ao carrinho</p>
                </div>
                <p>
                  Assim que adicionar artigos ao carrinho, os artigos aparecem aqui.
                </p>
              </div><IonButton
                className="btnComprar"
                size="large"
                shape="round"
                routerLink="/homepage"
                type="button"
              >
                Começar a comprar
                <IonIcon icon={carrinhoBtn} slot="end" />
              </IonButton></>
        )}

        {lista.length > 0 ? (
          <><div className="linha"></div><p className="subTotal">Total: {total}€</p><IonButton
            className="btnEncomendar"
            size="large"
            shape="round"
            type="button"
          >
            Encomendar
            <IonIcon icon={encomendar} slot="end" />
          </IonButton></>) : null}
        
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
export default Carrinho;
