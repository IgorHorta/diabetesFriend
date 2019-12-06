import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Item, Input, Label, Button, Text} from 'native-base';
import {View} from 'react-native';

const Login = () => (
  <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.linearGradient}>
    <View style={styles.centerView}>
      <Item style={styles.inputItem} floatingLabel>
        <Label>Login</Label>
        <Input />
      </Item>
      <Item style={styles.inputItem} floatingLabel>
        <Label>Senha</Label>
        <Input />
      </Item>
    </View>
    <Button style={styles.inputItem} rounded>
      <Text>Login</Text>
    </Button>
  </LinearGradient>
);

export default Login;
