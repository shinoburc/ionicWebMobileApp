import { IonButtons, IonMenuButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';

import { Device, DeviceId, DeviceInfo, BatteryInfo, GetLanguageCodeResult, LanguageTag } from '@capacitor/device';

const DisplayDeviceInfo : React.FC = () => {
  const [deviceId, setDeviceId] = useState<DeviceId>();
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();
  const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>();
  const [languageCode, setLanguageCode] = useState<GetLanguageCodeResult>();
  const [languageTag, setLanguageTag] = useState<LanguageTag>();
  useEffect(() => {
    const getDeviceInfo = async () => {
      setDeviceId(await Device.getId());
      setDeviceInfo(await Device.getInfo());
      setBatteryInfo(await Device.getBatteryInfo());
      setLanguageCode(await Device.getLanguageCode());
      setLanguageTag(await Device.getLanguageTag());
    };
    //await Device.getBatteryInfo();
    getDeviceInfo();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>DeviceInfo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {deviceInfo && (
          <>
            <p>Info</p>
            <ul>
              <li>id(uuid): {deviceId?.uuid}</li>
              <li>platform: {deviceInfo.platform}</li>
              <li>manufacturer: {deviceInfo.manufacturer}</li>
              <li>model: {deviceInfo.model}</li>
              <li>osVersion: {deviceInfo.osVersion}</li>
              <li>languageCode: {languageCode?.value}</li>
              <li>languageTag: {languageTag?.value}</li>
            </ul>
          </>
        )}
        {batteryInfo && (
          <>
            <p>Battery Info</p>
            <ul>
              <li>batteryLevel: {batteryInfo.batteryLevel ? (batteryInfo.batteryLevel * 100).toFixed(2) : 'undefined'} %</li>
              <li>isCharging: {batteryInfo.isCharging ? 'Yes' : 'No'}</li>
            </ul>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default DisplayDeviceInfo;
