import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Body from "../components/Body";
import Container from "../components/Container";
import Header from "../components/Header";

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

    const navigation = useNavigation();

    const [tipo, setTipo] = useState('gas');


    return (
        <SafeAreaProvider>
            <Container>
                <Header
                    title={"Abastecimento"}
                    goBack={() => navigation.goBack()}
                />
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
});

export default Abastecimento;