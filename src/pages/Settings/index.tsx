import React, { Suspense } from 'react';
import Slider from '@react-native-community/slider';
import {
  Preview,
  HueSlider,
  Panel5,
} from 'reanimated-color-picker';
import { Modal, ScrollView } from 'react-native';
import { Canvas } from '@react-three/fiber/native';

import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttons';
import Toast from '../../components/Toast';

import useSettings from './useSettings';

import { Color, SafeArea, View, Title, TextButton } from './styles';

const Settings: React.FC = () => {
  const {
    shape,
    color,
    rotation,
    toast,
    showModal,
    saveSettings,
    removeToast,
    setShape,
    setRotation,
    onSelectColor,
    handleChangeModal,
    toRadians,
    resetSettings,
  } = useSettings();

  return (
    <SafeArea>
      <ScrollView>
        <Canvas style={{height: 250}}>
          <directionalLight position={[10, 10, 15]} intensity={1} />
          <directionalLight position={[10, 10, 15]} intensity={1} />
          <directionalLight position={[10, 10, 15]} intensity={1} />
          <Suspense fallback={null}>
            <mesh
              scale={2}
              rotation={[
                toRadians(rotation),
                toRadians(rotation),
                toRadians(rotation),
              ]}
              position={[0, 0, 0]}
            >
              {shape === 'cube' && <boxGeometry />}
              {shape === 'cone' && <coneGeometry />}
              {shape === 'dodecahedron' && <dodecahedronGeometry />}
              <pointLight position={[10, 10, 10]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </Suspense>
        </Canvas>
      <View>
        <Title>Selecione a forma:</Title>
        <View shapes>
          <Button onPress={() => setShape('cone')} shape><TextButton>Cone</TextButton></Button>
          <Button onPress={() => setShape('cube')} shape><TextButton>Cubo</TextButton></Button>
          <Button onPress={() => setShape('dodecahedron')} shape><TextButton>Dodecaedro</TextButton></Button>
        </View>
      </View>

      <View>
        <Title>Cor:</Title>
        <View color>
          <Input
            value={color}
            placeholder="Cor"
            color={color}
          />
          <Button onPress={handleChangeModal} colorPicker>
            <TextButton>Selecionar uma cor</TextButton>
          </Button>
        </View>
      </View>

      <View>
        <Title>Rotação: {rotation}°</Title>
        <Slider
          minimumValue={0}
          maximumValue={360}
          step={1}
          value={rotation}
          onValueChange={(value) => setRotation(value)}
        />
      </View>

      <View>
        <Button avanca onPress={saveSettings}>
          <TextButton>Salvar</TextButton>
        </Button>

        <Button transparent onPress={resetSettings}>
          <TextButton reset>Resetar valores</TextButton>
        </Button>
      </View>

      </ScrollView>
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet"
        statusBarTranslucent
        onRequestClose={handleChangeModal}
      >
        <Color
          value={color}
          onComplete={onSelectColor}
        >
          <Preview />
          <Panel5 />
          <HueSlider />
        </Color>
      </Modal>
      {toast && <Toast message={toast.message} title={toast.title} type={toast.type} closeMessage={removeToast} />}
    </SafeArea>
  );
};

export default Settings;
