import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import { logInOutline, personAdd } from 'ionicons/icons';
import logo from '../assets/logo.svg'
import './Login.css';

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Fazer login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className='body'>
                <div className='ion-text-center ion-padding'>
                    <img src={logo} alt="GoEat logo" width={'50%'}/>
                </div>
                <form onSubmit={doLogin}>
                    <IonInput className='ion-margin-top input' fill='outline' labelPlacement='floating' placeholder='Introduza o seu email' label='Email' type='email'></IonInput>
                    <IonInput className='ion-margin-top input' fill='outline' labelPlacement='floating' placeholder='Introduza a sua palavra-passe' label='Palavra-passe' type='password'></IonInput>
                    <IonButton routerLink='/homepage' type='submit' expand='block' className='ion-margin-top button-login'>Login<IonIcon icon={logInOutline} slot='end'/></IonButton>
                    <IonButton routerLink='/register' type='button' expand='block' className='ion-margin-top button-register'>Registar<IonIcon icon={personAdd} slot='end'/></IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;