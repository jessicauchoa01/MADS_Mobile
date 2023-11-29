import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import Login from "./pages/login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Carrinho from "./pages/Carrinho";
import Menu from "./pages/Menu";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Homepage} path="/homepage" />
        <Route component={Carrinho} path="/carrinho" />
        <Route component={Menu} path="/menu" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
