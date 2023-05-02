import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Body from './src/components/Body';
import Container from './src/components/Container';
import Header from './src/components/Header';

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');
  

  return (
  <SafeAreaProvider>
    <Container>
    <Header title={'Calculadora Flex'} />
    <Body>
    <TextInput
    style={styles.input}
      label="Preço da Gasolina"
      value={gas}
      onChangeText={text => setGas(text)}
    />
    <TextInput
    style={styles.input}
      label="Preço do Etanol"
      value={eta}
      onChangeText={text => setEta(text)}
    />
    <Button
      mode="contained" onPress={() =>
      console.log('Pressed')}>
      CALCULAR
    </Button>
    <Text style={styles.text}> {gas} </Text>
    </Body>
    </Container>
  </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#FFF',
    marginBottom:8,
  },
  text:{
    textAlign:'center',
    margin:8,
  },
})


export default App;