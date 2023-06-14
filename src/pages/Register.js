import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth.services';


const Register = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('Thais Gurgel');

    const [email, setEmail] = useState('pucminas');

    const [password, setPassword] =
        useState('pucminas');

    const handleRegister = () => {
        //chamando register e passando os parametros (authservice)    

        register({
            name: name,
            email: email,
            password: password
        }).then(res => {
            console.log(res);
        });

    }

    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Headline style={styles.textHeader}>Gerenciador de Combustivel</Headline>

            <Body>
                <Input
                    label="Nome"
                    value={name}
                    onChangeText={(text) =>
                        setName(text)}
                    left={<TextInput.Icon name="account" />}
                />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(text) =>
                        setEmail(text)}
                    left={<TextInput.Icon
                        name="email" />}
                />
                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) =>
                        setPassword(text)}
                    left={<TextInput.Icon name="Key" />}
                />
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={handleRegister}>
                    REGISTRAR
                </Button>
                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.goBack()}>
                    Cancelar
                </Button>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 8,
    },
    textHeader: {
        textAlign: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 12
    },
});

export default Register;