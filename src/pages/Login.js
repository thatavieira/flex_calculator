import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const Login = () => {
    const navigation = useNavigation();

    const { setSigned, setName } = useUser();

    const [email, setEmail] = useState('thaisgurgel@pucminas.com.br');

    const [password, setPassword] = useState('pucminas');

    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>

            <Headline style={styles.textHeader}>Gerenciador de Combustivel</Headline>

            <Body>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon name="Key" />}
                />
                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon name="Key" />}
                />
                <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => setSigned(true)}>
                    LOGIN
                </Button>
                <Button
                    style={styles.button}
                    mode="outlined"
                    onPress={() => navigation.navigate('Register')}>
                    REGISTRAR
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
        marginBottom: 12,
    },
});

export default Login;
