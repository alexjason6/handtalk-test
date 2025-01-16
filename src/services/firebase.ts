import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import remoteConfig from '@react-native-firebase/remote-config';

export const firebaseConfig = {
  apiKey: 'AIzaSyBfP0OWqu8C9wp5NkVfwrgMeqc0kSbLVuU',
  authDomain: 'handtalk-app-c1e0c.firebaseapp.com',
  databaseURL: 'https://handtalk-app-c1e0c-default-rtdb.firebaseio.com',
  projectId: 'handtalk-app-c1e0c',
  storageBucket: 'handtalk-app-c1e0c.firebasestorage.app',
  messagingSenderId: '328832548712',
  appId: '1:328832548712:ios:2dcaeb6736ae732d33a0dd',
};

  export const firebaseApp = firebase;
  export const firebaseAuth = auth();
  export const realtimeDb = database();
  export const remoteConf = remoteConfig();


