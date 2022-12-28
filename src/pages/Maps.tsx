import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useState, useEffect } from 'react';

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';

// marker setting
Leaflet.Marker.prototype.options.icon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});


const Maps : React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression>();

  useEffect(() => {
    Geolocation.getCurrentPosition().then((coordinates) => {
      setPosition({
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }, []);

  /*
  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });
  */

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Maps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          {position && (
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "50vh" }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Maps;
