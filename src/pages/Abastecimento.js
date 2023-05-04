import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Button, RadioButton, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Body from "../components/Body";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "../components/Input";

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

    const navigation = useNavigation();

    const [tipo, setTipo] = useState('gas');
    const [preco, setPreco] = useState('');
    const [valor, setValor] = useState('');
    const [odometro, setOdometro] = useState('');
    const [data, setData] = useState('');

    const handleSalvar = () => {
        console.log('Salvar');
    }

    const handleExcluir = () => {
        console.log('Excluir');
    }



    return (
        <SafeAreaProvider>
            <Container>
                <Header
                    title={"Abastecimento"}
                    goBack={() => navigation.goBack()} >

                    <Appbar.Action icon="check" onPress={handleSalvar} />
                    <Appbar.Action icon="trash-can" onPress={handleExcluir} />

                </Header>

                <Body>

                    <View style={styles.containerRadio}>

                        <View style={styles.containerItem}>
                            <RadioButton
                                value="first"
                                status={tipo === 'gas' ? 'checked' : 'unchecked'}
                                color={'red'}
                                onPress={() => setTipo('gas')}
                            />
                            <Text>Gasolina</Text>
                        </View>

                        <View style={styles.containerItem}>
                            <RadioButton
                                value="second"
                                status={tipo === 'eta' ? 'checked' : 'unchecked'}
                                color={'green'}
                                onPress={() => setTipo('eta')}
                            />
                            <Text>Etanol</Text>
                        </View>
                    </View>

                    <Input
                        label="Data"
                        value={data}
                        onChangeText={text => setData(text)}
                        left={<TextInput.Icon icon="calendar" />}
                    />

                    <Input
                        label="Preço"
                        value={preco}
                        onChangeText={text => setPreco(text)}
                        left={<TextInput.Icon icon="currency-brl" />}
                    />

                    <Input
                        label="Valor"
                        value={valor}
                        onChangeText={text => setValor(text)}
                        left={<TextInput.Icon icon="currency-brl" />}
                    />

                    <Input
                        label="Odometro"
                        value={odometro}
                        onChangeText={text => setOdometro(text)}
                        left={<TextInput.Icon icon="camera-timer" />}
                    />

                    <Button
                        mode="contained"
                        buttonColor={'blue'}
                        style={styles.button}
                        onPress={handleSalvar}>
                        Salvar
                    </Button>


                    <Button
                        mode="contained"
                        buttonColor={'red'}
                        style={styles.button}
                        onPress={handleExcluir}>
                        Excluir
                    </Button>




                </Body>
            </Container>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        marginTop: 8
    }
});

export default Abastecimento;