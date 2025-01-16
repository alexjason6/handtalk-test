import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const TabBarIcon = (name: string) => ({ focused }: { focused: boolean }) => {
  const color = focused ? '#ff9800' : '#666666';

  return <Icon name={name} size={22} color={color} />;
};

export default TabBarIcon;
