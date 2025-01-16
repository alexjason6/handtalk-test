import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import { firebaseAuth } from '../services/firebase';

import useToast from '../hooks/useToast';
import Toast from '../components/Toast';

interface User {
  name: string;
  phone: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User ;
  loading: boolean;
  signIn: (email: string, password: string) => {};
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null | any>(null);
  const {toast, showToast, removeToast} = useToast();

  const signIn = async (email: string, password: string) => {
    setLoading(true);

    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      showToast({
        message: 'Não foi possível realizar o login. Confira os dados digitados e tente novamente.',
        title: 'Atenção',
        type: 'alerts',
        duration: 7000,
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const signOut = async () => {
    setLoading(true);
    await firebaseAuth.signOut();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          name: firebaseUser.displayName || '',
          phone: firebaseUser.phoneNumber || '',
          email: firebaseUser.email || '',
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
      }}>
      {children}
      {toast && <Toast message={toast.message} title={toast.title} type={toast.type} closeMessage={removeToast} />}
    </AuthContext.Provider>
  );
};

export default AuthContext;
