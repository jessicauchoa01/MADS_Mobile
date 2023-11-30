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

const Homepage: React.FC = () => {
  //PROCURA O JSON TOKEN NO STORAGE
  //const token = localStorage.getItem("token");
  //const carrinho = localStorage.getItem("carrinho");
  const [pratos, setPratos] = useState<any[]>([]);
  const [tipo_id, getTipo_id] = useState(Number);
  // console.log(
  //   "http://localhost/MADS_Web/sourceWeb/sourceMobile/FiltrarPratosMobile.php?tipo_id=" +
  //     tipo_id
  // );
  // console.log(tipo_id);

  //TRY PARA O GET DIRETO NA HOMEPAGE
  const listarPratos = async () => {
    try {
      const response = await fetch(
        // mudar para o vosso localhost
        "http://localhost/MADS_Web/sourceWeb/sourceMobile/PratosMobile.php"
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
        "http://localhost/MADS_Web/sourceWeb/sourceMobile/FiltrarPratosMobile.php?tipo_id=" +
          tipo_id
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
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        {pratos.length > 0 ? (
          pratos.map((prato) => (
            <IonCard key={prato.id} className="comidas">
              <img
                className="imagemEmenta"
                // mudar para o vosso localhost
                src={`http://localhost/MADS_Web/sourceWeb/${prato.imagem}`}
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
                  <IonIcon icon={addCarrinho} size="large" />
                </div>
              </div>
            </IonCard>
          ))
        ) : (
          <div>Nenhum prato encontrado.</div>
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
