import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');
  

  return (
  <SafeAreaProvider>
    <View style={styles.container}>
    <Appbar.Header>
      <Appbar.Content title="Calculadora Flex" />
    </Appbar.Header>
    <View style={styles.body}>
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
    </View>
    </View>
  </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',
  },
  body: {
    margin:8
  },
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