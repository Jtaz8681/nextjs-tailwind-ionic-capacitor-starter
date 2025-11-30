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
      <IonContent className="ion-padding" style={{ backgroundColor: '#000000' }}>
        <div className="flex items-center justify-center h-full">
          <div className="relative w-64 h-64">
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