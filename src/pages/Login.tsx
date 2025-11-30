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
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center justify-center min-h-full">
          <IonCard className="w-full max-w-md">
            <IonCardContent>
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Boat Management
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
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