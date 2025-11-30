'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IonPage, IonContent } from '@ionic/react';

const Splash = ({ onSplashComplete }: { onSplashComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onSplashComplete]);

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ backgroundColor: '#000000', height: '100vh' }}>
        <div className="flex items-center justify-center" style={{ height: '100%', width: '100%' }}>
          <div style={{ width: '90vw', height: '90vw', maxWidth: '400px', maxHeight: '400px', position: 'relative' }}>
            <Image
              src="/img/Aldora Divers Square white logo 2022.png"
              alt="Aldora Divers Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;