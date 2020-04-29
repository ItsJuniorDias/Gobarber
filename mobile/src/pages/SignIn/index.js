import React from 'react';
import { View, Text } from 'react-native';

import Input from '~/components/Input';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
    <Text>SignIn</Text>
     <Input style={{ marginTop: 30}} icon="call" placeholder="Digite seu nome" />
    </Background>
  );
}
