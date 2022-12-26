import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useEffect, useLayoutEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLng } from 'leaflet';

const Maps : React.FC = () => {
  useLayoutEffect(() => {
    console.log("Hello");
  }, []);
  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  //const position = new LatLng(51.505, -0.09);
  const position = new LatLng(26.2372741, 127.7084232);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Maps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Maps;
