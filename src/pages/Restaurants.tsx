import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import '../pages/Restaurants.css';
import logo from '../assets/logo.svg';
import homeFooter from '../assets/homeFooter.svg';
import restauranteFooter from '../assets/restauranteFooter.svg';
import carrinhoFooter from '../assets/carrinhoFooter.svg';
import perfilFooter from '../assets/perfilFooter.svg';
import { Link } from 'react-router-dom';
import cart from '../assets/cartBlack.svg';

const Restaurants: React.FC = () => {

<<<<<<< Updated upstream
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='asd'>
                    <div className='image'>
                        <img src={logo} alt="GoEat logo" width={'100px'} />
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className='content'>
                <IonGrid>
                    <div className='texto'>
                        <Link to={'/restaurant'} className='texto'>Restaurante 1</Link>
                    </div>
                    <IonRow className='scroll'>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <div className='texto'>
                        <Link to={'/restaurant'} className='texto'>Restaurante 2</Link>
                    </div>
                    <IonRow className='scroll'>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <div className='texto'>
                        <Link to={'/restaurant'} className='texto'>Restaurante 3</Link>
                    </div>
                    <IonRow className='scroll'>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className='menu1'>
                                <Link to={'/cart'}><IonButton color={'warning'}><img src={cart} alt="" /></IonButton></Link>
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
=======
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
                  onClick={() => adicionar(prato)}
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
>>>>>>> Stashed changes
};

export default Restaurants;