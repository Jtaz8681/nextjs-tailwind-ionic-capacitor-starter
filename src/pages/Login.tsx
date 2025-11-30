'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../integrations/supabase/client';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
} from '@ionic/react';

const Login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
        className="ion-padding" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/img/appbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <div className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
          <IonCard className="w-full max-w-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            <IonCardContent>
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Boat Management
                </h1>
                <p className="text-gray-600">
                  Sign in to manage your fleet
                </p>
              </div>
              
              <Auth
                supabaseClient={supabase}
                providers={[]}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: '#3880ff',
                        brandAccent: '#3171e0',
                      }
                    }
                  }
                }}
                theme="light"
                redirectTo="/feed"
              />
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;