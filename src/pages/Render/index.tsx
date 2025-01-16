import React from 'react';
import { Canvas } from '@react-three/fiber/native';

import useRender from './useRender';

import Object3D from './components/3d';
import Loading from '../../components/Loading';

export default function Render() {
  const { config, loading } = useRender();

  if (loading) {
    return <Loading message="Carregando objetos 3D..." />;
  }

  return (
    <Canvas shadows style={{ backgroundColor: '#FFFFFF' }}>
      <directionalLight position={[10, 10, 15]} intensity={1} />
      <directionalLight position={[10, 10, 15]} intensity={1} />
      <directionalLight position={[10, 10, 15]} intensity={1} />

      {config?.map((object, index) => {
        return (
          <Object3D
            key={index}
            object={object}
            position={index === 0 ? [0, 2.2, 0] : index === 1 ? [0, 0, 0] : [0, -2.4, 0]}
            loadingText={`Loading ${object.shape}...`}
          />
        );
      })}
    </Canvas>
  );
}
