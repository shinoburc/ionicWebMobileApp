import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { useState, useEffect } from 'react';

const FetchJSON : React.FC = () => {
  const [cats, setCats] = useState<any[]>();
  useEffect(() => {
    const fetchCatsJSON = async () => {
      const response = await fetch("https://cataas.com/api/cats?tags=funny");
      const catsJSON = await response.json();
      setCats(catsJSON);
      console.log(catsJSON);
    };
    fetchCatsJSON();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>FetchJSON</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {cats && (
          <IonGrid>
            <IonRow>
              {cats.map((cat) => (
                <IonCol size="3" key={cat._id}>
                  <IonImg src={`https://cataas.com/cat/${cat._id}`} alt={cat._id} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default FetchJSON;
