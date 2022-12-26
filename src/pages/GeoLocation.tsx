import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';

import { Geolocation } from '@capacitor/geolocation';

type Position = {
  latitude: number,
  longitude: number,
}

const GeoLocation: React.FC = () => {
  const [position, setPosition] = useState<Position>();

  useEffect(() => {
    Geolocation.getCurrentPosition().then((coordinates) => {
      setPosition({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    /*
    Geolocation.getCurrentPosition().then((resp) => {
      setPosition({
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     */
    console.log("Hello");
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GeoLocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GeoLocation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ul>
          <li>latitude: {position?.latitude}</li>
          <li>longitude: {position?.longitude}</li>
        </ul>
        <ExploreContainer name="GeoLocation" />
      </IonContent>
    </IonPage>
  );
};

export default GeoLocation;
