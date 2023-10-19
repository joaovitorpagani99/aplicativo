import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null);  //iniciando com null
  const [senha, setSenha] = useState(null);

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }


  return (
    <View style={styles.container}>
      <Text h3>Entre no aplicativo</Text>
      <Input
        placeholder='E-mail'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText = {value => setEmail({ value })} //evento na caixa de texto que atribui o valor para o email
        keyboardType='email-address'
      />
      <Input
        placeholder='Sua senha'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setSenha({ value })} //evento na caixa de texto que atribui o valor para o senha
        keyboardType='email-address'
        secureTextEntry={true}
      />

      <Button
        icon = {
          <Icon
            name='check'
            size={15}
            color='white'
            />
        }
        title='Entrar'
        onPress={() => entrar()}
        
      />
      
      <StatusBar style="auto" />
    </View>
  );
}


