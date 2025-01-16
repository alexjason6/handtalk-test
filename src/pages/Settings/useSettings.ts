import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../contexts/AuthContexts';

import { realtimeDb, remoteConf } from '../../services/firebase';

import useToast from '../../hooks/useToast';

interface Object {
  shape: string;
  color: string;
  rotation: number;
}

const useSettings = () => {
  const { user } = useContext(AuthContext);
  const {toast, showToast, removeToast} = useToast();

  const [shape, setShape] = useState('cone');
  const [color, setColor] = useState('#ff0000');
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [objects, setObjects] = useState<Object[] | null>(null);

  const emailUser = user.email.replaceAll('.', '_');

  const toRadians = (degrees: number) => degrees * (Math.PI / 180);

  const saveSettings = async () => {
    const userConfigRef = realtimeDb.ref(`/settings/${emailUser}/${shape}`);
    try {
      await userConfigRef.set({
        shape,
        color,
        rotation,
      });

      showToast({
        message: 'Configuração salva com sucesso.',
        title: 'Sucesso!',
        type: 'success',
      });
    } catch {

      showToast({
        message: 'Erro ao salvar configuração.',
        title: 'Algo deu errado!',
        type: 'danger',
      });
    }
  };

  const handleChangeModal = () => {
    setShowModal(!showModal);
  };

  const onSelectColor = ({ hex }: { hex: string }): void => {
    setColor(hex);

    setObjects((prevObjects: Object[] | null) => {
      if (!prevObjects) {return null;}

      const updatedObjects = prevObjects.map((obj) => {
        if (obj.shape === shape) {
          return { ...obj, color: hex };
        }
        return obj;
      });
      return updatedObjects;
    });

    handleChangeModal();
  };

  const resetSettings = async () => {
    try {
      await remoteConf.setConfigSettings({
        minimumFetchIntervalMillis: 360000,
      });
      await remoteConf.fetchAndActivate();

      const object = remoteConf.getAll();

      const newObject = Object.entries(object).map(([key, value]) => {
        return JSON.parse(value.asString());
      });

      setObjects(newObject);

      await Promise.all(

        newObject.map((obj) =>
          realtimeDb.ref(`/settings/${emailUser}/${obj.shape}`).set({
            shape: obj.shape,
            color: obj.color,
            rotation: obj.rotation,
          })
        )
      );

    } catch (error) {

      console.error('Error fetching remote config', error);
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const userConfigRef = realtimeDb.ref(`/settings/${emailUser}`);
        const snapshot = await userConfigRef.once('value');

        if (snapshot.exists()) {
          const config = snapshot.val();
          setShape(config.shape || 'cone');
          setColor(config.color || '#ff0000');
          setRotation(config.rotation || 0);
        }
      } catch {

        showToast({
          message: 'Erro ao carregar configurações.',
          title: 'Algo deu errado!',
          type: 'danger',
        });
      }
    };

    fetchSettings();
  }, [emailUser]);

  return {
    toast,
    user,
    shape,
    color,
    rotation,
    showModal,
    objects,
    handleChangeModal,
    removeToast,
    saveSettings,
    setShape,
    setRotation,
    onSelectColor,
    toRadians,
    resetSettings,
  };
};

export default useSettings;
