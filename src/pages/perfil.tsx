import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React, { Profiler } from "react";
import {
  arrowBack,
  arrowBackOutline,
  home,
  homeOutline,
  library,
  logInOutline,
  personAddOutline,
  personCircleOutline,
  playCircle,
  radio,
  restaurantOutline,
  search,
} from "ionicons/icons";
import goeat from "../pages/assets/image 4.svg";

const Perfil: React.FC = () => {
  const doPerfil = (event: any) => {
    event.preventDefault();
    console.log("doPerfil");
  };
  return (
    <IonPage>
      <IonContent>
        <div className="ion-text-center ion-padding">
          <img src={goeat} width={"50%"} />
          <IonTabBar slot="bottom">
            <IonTabButton tab="home">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="radio">
              <IonIcon icon={personCircleOutline} />
            </IonTabButton>
            <IonTabButton tab="library">
              <IonIcon icon={restaurantOutline} />
            </IonTabButton>
            <IonTabButton tab="search">
              <IonIcon icon={search} />
            </IonTabButton>
          </IonTabBar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
