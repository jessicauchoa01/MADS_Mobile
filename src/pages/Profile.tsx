import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonGrid, IonIcon, IonPage, IonRow, IonToolbar } from '@ionic/react';
import React from 'react';
import carrinhoFooter from "../assets/carrinhoFooter.svg";
import perfilFooter from "../assets/perfilFooter.svg";
import restauranteFooter from "../assets/restauranteFooter.svg";
import homeFooter from "../assets/homeFooter.svg";
<<<<<<< Updated upstream
import '../pages/Profile.css';
import { chevronUpCircle, logOutOutline } from 'ionicons/icons';
import profileImg from '../assets/profileImg.svg';
import food from '../assets/food.svg';
import { Link } from 'react-router-dom';

const Restaurants: React.FC = () => {

    return (
        <IonPage>
            <IonContent className='content'>
                <div className='button'>
                    <IonButton className='buttonLogout'>
                        <IonIcon slot='end' icon={logOutOutline}></IonIcon>Logout
                    </IonButton>
=======
import "../pages/Profile.css";
import { arrowBackOutline, logOutOutline } from "ionicons/icons";
import profileImg from "../assets/profileImg.svg";
import food from "../assets/food.svg";
import { Link, useHistory } from "react-router-dom";
import { PATH, PATH_imagem } from "./apiConfig";

const Profile: React.FC = () => {
  console.log(localStorage.getItem("token"));

  const logout = async () => {
    localStorage.clear();
    window.location.href = "/homepage";
  };

  const history = useHistory();

  return (
    <IonPage className="encomendasPage">
      <div className="seta">
        <Link onClick={() => { history.goBack(); } } to={""}>
          <IonIcon id="seta" icon={arrowBackOutline} />
        </Link>
      </div>
      <div className="containerEncomendas">
        <IonRow className="ion-justify-content-end">
          <IonCol size="auto">
            <IonButton className="buttonProfile" onClick={() => logout()}>
              <IonIcon slot="end" icon={logOutOutline}></IonIcon>Logout
            </IonButton>
          </IonCol>
        </IonRow>

        <div className="image">
          <img src={profileImg} alt="" width={"100px"} />
        </div>

        <h1 className="titulos">Encomendas</h1>

        <div className="cardEncomendas">
          <div className="linhaEncomendas"></div>
          <div className="contentCardEncomendas">
            <img className="imgPizzaEncomendas" src={food} alt="imagem pizza" />
            <p className="pizzaEncomendas">Nome</p>
            <p className="precoEncomendas">Preço€</p>
            <p>Estado</p>
          </div>
          <div className="linhaEncomendas"></div>
        </div>

        <h1 className="titulos">Histórico</h1>

        <div className="cardEncomendas">
          <div className="linhaEncomendas"></div>
          <div className="contentCardEncomendas">
            <img className="imgPizzaEncomendas" src={food} alt="imagem pizza" />
            <p className="pizzaEncomendas">Nome</p>
            <p className="precoEncomendas">Preço€</p>
            <p>Estado</p>
          </div>
          <div className="linhaEncomendas"></div>
        </div>
      </div>

      <IonFooter className="footer">
        <IonToolbar class="footer-icons ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <div className="icons">
                  <Link to="/homepage">
                    <IonIcon icon={homeFooter} size="large" />
                  </Link>
>>>>>>> Stashed changes
                </div>
                <div className='image'>
                    <img src={profileImg} alt="" width={'150px'}/>
                </div>
                <div className='menus'>
                    <h1 className='title'>Encomendas</h1>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>
                    <div className='menu'>
                        <img src={food} alt="" />
                        <p>Bife grelhado com batata frita</p>
                        <p>15,00€</p>
                    </div>

                </div>
                <IonFab slot='fixed' vertical='bottom' horizontal='end'>
                    <IonFabButton>
                        <IonIcon icon={chevronUpCircle}></IonIcon>
                    </IonFabButton>
                </IonFab>
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

export default Restaurants;