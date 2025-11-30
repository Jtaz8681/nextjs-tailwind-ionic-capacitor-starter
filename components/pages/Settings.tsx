import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonButton,
  IonLabel,
  IonAlert,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../src/contexts/SessionContext';
import { supabase } from '../../src/integrations/supabase/client';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

const Settings = () => {
  const settings = Store.useState(selectors.selectSettings);
  const { user } = useAuth();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference and saved preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    const shouldBeDark = savedDarkMode || prefersDark.matches;
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('ion-palette-dark', shouldBeDark);
    document.body.classList.toggle('dark', shouldBeDark);

    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        const shouldBeDark = e.matches;
        setIsDarkMode(shouldBeDark);
        document.documentElement.classList.toggle('ion-palette-dark', shouldBeDark);
        document.body.classList.toggle('dark', shouldBeDark);
      }
    };

    prefersDark.addEventListener('change', handleChange);
    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  const handleDarkModeToggle = (enabled: boolean) => {
    setIsDarkMode(enabled);
    localStorage.setItem('darkMode', enabled.toString());
    document.documentElement.classList.toggle('ion-palette-dark', enabled);
    document.body.classList.toggle('dark', enabled);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            >
              Enable Notifications
            </IonToggle>
          </IonItem>
          
          <IonItem>
            <IonToggle
              checked={isDarkMode}
              onIonChange={e => handleDarkModeToggle(e.target.checked)}
            >
              Dark Mode
            </IonToggle>
          </IonItem>
          
          {user && (
            <IonItem>
              <IonLabel>
                <h3>Signed in as:</h3>
                <p>{user.email}</p>
              </IonLabel>
            </IonItem>
          )}
          
          <IonItem button onClick={() => setShowLogoutAlert(true)}>
            <IonLabel color="danger">Sign Out</IonLabel>
          </IonItem>
        </IonList>

        <IonAlert
          isOpen={showLogoutAlert}
          onDidDismiss={() => setShowLogoutAlert(false)}
          header="Sign Out"
          message="Are you sure you want to sign out?"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Sign Out',
              handler: handleLogout,
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Settings;