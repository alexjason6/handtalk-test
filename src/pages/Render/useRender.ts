import {useContext, useEffect, useState} from 'react';

import AuthContext from '../../contexts/AuthContexts';

import { remoteConf, realtimeDb } from '../../services/firebase';


interface Object {
  shape: string;
  color: string;
  rotation: number;
}

const useRender = () => {
  const [config, setConfig] = useState<Object[] | null>();
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const fetchConfig = async () => {
    try {
      await remoteConf.setConfigSettings({
        minimumFetchIntervalMillis: 360000,
      });
      await remoteConf.fetchAndActivate();

      const object = remoteConf.getAll();

      const newObject = Object.entries(object).map(([key, value]) => {
        return JSON.parse(value.asString());
      });

      setConfig(newObject);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching remote config', error);
    }
  };

  const listenRealtime = async () => {
    const emailUser = user.email.replaceAll('.', '_');
    const ref = realtimeDb.ref(`/settings/${emailUser}`);

    ref.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setConfig(Object.values(data));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        fetchConfig();
      }
    });

    return () => ref.off('value');
  };

  useEffect(() => {
    listenRealtime();
  }, []);

  return { config, loading };
};

export default useRender;
