'use client';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SessionContextProvider, useAuth } from '../src/contexts/SessionContext';
import Tabs from './pages/Tabs';
import Login from '../src/pages/Login';
import Splash from '../src/pages/Splash';

setupIonicReact({});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', async status => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const AppContent = () => {
  const { user, loading } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showSplash) {
    return <Splash onSplashComplete={handleSplashComplete} />;
  }

  return (
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route path="/login" render={() => <Login />} exact={true} />
        <Route 
          path="/" 
          render={() => user ? <Tabs /> : <Redirect to="/login" />} 
          exact={true} 
        />
        <Route 
          path="/dashboard" 
          render={() => user ? <Tabs /> : <Redirect to="/login" />} 
          exact={true} 
        />
        <Route 
          path="/lists" 
          render={() => user ? <Tabs /> : <Redirect to="/login" />} 
          exact={true} 
        />
        <Route 
          path="/lists/:listId" 
          render={() => user ? <Tabs /> : <Redirect to="/login" />} 
          exact={true} 
        />
        <Route 
          path="/settings" 
          render={() => user ? <Tabs /> : <Redirect to="/login" />} 
          exact={true} 
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

const AppShell = () => {
  return (
    <IonApp>
      <SessionContextProvider>
        <AppContent />
      </SessionContextProvider>
    </IonApp>
  );
};

export default AppShell;