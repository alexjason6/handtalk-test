import React, {Suspense} from 'react';
import { Text } from 'react-native';

interface PropsObject {
  object: {
    shape: string;
    color: string;
    rotation: number;
  },
  position: [number, number, number];
  loadingText: string
}

const Object3D: React.FC<PropsObject> = ({object, position, loadingText}) => {
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);

  return (
    <Suspense fallback={<Text>{loadingText}</Text>}>
      <mesh
        rotation={[
          toRadians(object.rotation),
          toRadians(object.rotation),
          toRadians(object.rotation),
        ]}
        position={position}
      >
        {object.shape === 'cube' && <boxGeometry />}
        {object.shape === 'cone' && <coneGeometry />}
        {object.shape === 'dodecahedron' && <dodecahedronGeometry />}
        <pointLight position={[10, 10, 10]} />
        <meshStandardMaterial color={object.color} />
      </mesh>
    </Suspense>
  );
};

export default Object3D;
