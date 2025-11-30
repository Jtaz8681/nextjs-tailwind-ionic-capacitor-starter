'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../integrations/supabase/client';
import Image from 'next/image';
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
      <IonContent className="ion-padding" style={{ position: 'relative', padding: 0 }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Image
            src="/img/appbg.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Login Form Container */}
        <div className="flex flex-col items-center justify-center min-h-full" style={{ padding: '16px' }}>
          <IonCard className="w-full max-w-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
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