import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { at } from 'ionicons/icons';
import { useState, useEffect } from 'react';

type CatJSON = {
  _id: string;
  createdAt: string;
  owner: string;
  tags: string[];
  updatedAt: string;
}

const FetchJSON : React.FC = () => {
  const [cats, setCats] = useState<CatJSON[]>();
  useEffect(() => {
    const fetchCatsJSON = async () => {
      const response = await fetch("https://cataas.com/api/cats?tags=funny");
      const responseJSON = await response.json();
      setCats(responseJSON);
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
        {cats && cats.map((cat) => (
          <IonCard key={cat._id}>
            <IonCardHeader>
              <IonCardTitle>{cat._id}</IonCardTitle>
              <IonCardSubtitle>{cat.createdAt}</IonCardSubtitle>
              <IonCardSubtitle>{cat.tags.join(' ')}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonImg src={`https://cataas.com/cat/${cat._id}`} alt={cat._id} />
            </IonCardContent>
          </IonCard>
        ))}
        {/*
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
        */}
      </IonContent>
    </IonPage>
  );
};

export default FetchJSON;
