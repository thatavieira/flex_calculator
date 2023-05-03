import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Body from './../components/Body';
import Container from './../components/Container';
import Header from './../components/Header';
import Input from './../components/Input';

const Calculadora = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');
  
  const handleCalcular = () =>{
    if(!gas || gas <=0 || !eta || eta <=0){
      Alert.alert('Atenção!', 'Obrigatório informar o valor da gasolina e do etanol!');
    }else{
      let pct = Math.round((eta/gas)*100);
      if(pct < 70){
        setRes(pct + '% Recomendamos o uso do Etanol');
      }else{
        setRes(pct + '% Recomendamos o uso da Gasolina')
      }
    }
  }

  return (
  <SafeAreaProvider>
    <Container>
    <Header title={'Calculadora Flex'} />
    <Body>
    <Input
      label="Preço da Gasolina"
      value={gas}
      onChangeText={text => setGas(text)}
    />
    <Input
      label="Preço do Etanol"
      value={eta}
      onChangeText={text => setEta(text)}
    />
    <Button
      mode="contained" onPress={
        handleCalcular}>
      CALCULAR
    </Button>
    <Text style={styles.text}> {res} </Text>
    </Body>
    </Container>
  </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    margin:8,
  },
})


export default Calculadora;