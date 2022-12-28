import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useState } from 'react';

import { Camera, CameraResultType } from '@capacitor/camera';

const Photo : React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>();
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    if(image.webPath){
      setPhotoUrl(image.webPath);
      setPhotoUrls([...photoUrls, image.webPath]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Photo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={takePhoto}>
          Take Photo
        </IonButton>
        {photoUrl && (
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonImg src={photoUrl} alt="photoImage" />
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
        {photoUrls && (
          <IonGrid>
            <IonRow>
              {photoUrls.map((photoUrl) => (
                <IonCol size="1">
                  <IonImg src={photoUrl} alt="photoImage" />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Photo;
