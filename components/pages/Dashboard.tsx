import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonButton,
} from '@ionic/react';
import { boat, water, map, time, notificationsOutline } from 'ionicons/icons';
import { useAuth } from '../../src/contexts/SessionContext';
import { useState } from 'react';
import Notifications from './Notifications';

const Dashboard = () => {
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  const statsCards = [
    {
      title: 'Active Boats',
      value: '3',
      icon: boat,
      color: 'primary',
    },
    {
      title: 'Today's Dives',
      value: '2',
      icon: water,
      color: 'secondary',
    },
    {
      title: 'Locations',
      value: '5',
      icon: map,
      color: 'tertiary',
    },
    {
      title: 'Hours Logged',
      value: '147',
      icon: time,
      color: 'success',
    },
  ];

  const recentActivity = [
    { id: 1, boat: 'Sea Explorer', activity: 'Completed dive', time: '2 hours ago' },
    { id: 2, boat: 'Ocean Pearl', activity: 'Fuel added', time: '4 hours ago' },
    { id: 3, boat: 'Aqua Venture', activity: 'Maintenance scheduled', time: '6 hours ago' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dive Captain Dashboard</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />

        {/* Welcome Section */}
        <IonCard className="mb-4">
          <IonCardHeader>
            <IonCardTitle>Welcome back, Captain!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="text-gray-600 dark:text-gray-400">
              {user?.email ? `Signed in as ${user.email}` : 'Manage your dive operations'}
            </p>
          </IonCardContent>
        </IonCard>

        {/* Stats Grid */}
        <IonGrid>
          <IonRow>
            {statsCards.map((stat, index) => (
              <IonCol size="6" key={index}>
                <IonCard className="text-center">
                  <IonCardContent>
                    <IonIcon 
                      icon={stat.icon} 
                      color={stat.color}
                      className="text-3xl mb-2"
                    />
                    <h2 className="text-2xl font-bold">{stat.value}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Recent Activity */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Recent Activity</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {recentActivity.map((activity) => (
              <IonItem key={activity.id}>
                <IonLabel>
                  <h3>{activity.boat}</h3>
                  <p>{activity.activity}</p>
                </IonLabel>
                <IonLabel slot="end" className="text-sm text-gray-500">
                  {activity.time}
                </IonLabel>
              </IonItem>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;