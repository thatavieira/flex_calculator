import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Appbar,
    Button,
    RadioButton,
    Text,
    TextInput
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { deleteGasto, insertGasto, updateGasto } from '../services/GastoServiceDB';

import { useNavigation } from '@react-navigation/native';




const Abastecimento = ({ route }) => {
    const navigation = useNavigation();
    //setar informações no form.
    const { item } = route.params ? route.params : {};
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [tipo, setTipo] = useState('gas');
    const [preco, setPreco] = useState(null);
    const [valor, setValor] = useState(null);
    const [odometro, setOdometro] = useState(null);
    //setar data ao clicar no item já registrado
    const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));

    //refresh
    useEffect(() => {
        if (item) {
            setTipo(item.tipo == 0 ? 'gas' : 'eta');
            setData(item.data);
            setPreco(item.preco.toFixed(2));
            setValor(item.valor.toFixed(2));
            setOdometro(item.odometro.toFixed(0));
        }
    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateGasto({
                tipo: tipo == 'gas' ? 0 : 1,
                data: data,
                preco: preco,
                valor: valor,
                odometro: odometro,
                id: item.id,
            }).then();
        } else {
            insertGasto({
                tipo: tipo == 'gas' ? 0 : 1,
                data: data,
                preco: preco,
                valor: valor,
                odometro: odometro,
            }).then();
        }

        //depois de inserir voltar para a navegação anterior.
        navigation.goBack();

    };

    const handleExcluir = () => {
        deleteGasto(item.id).then();
        navigation.goBack();
    };

    return (
        <SafeAreaProvider>
            <Container>
                <Header title={'Abastecimento'} goBack={() => navigation.goBack()}>
                    <Appbar.Action icon="check" onPress={handleSalvar} />

                    {
                        item &&
                        <Appbar.Action icon="trash-can" onPress={handleExcluir} />
                    }


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

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onTouchCancel={() => setShow(false)}
                            onChange={(event, date) => {
                                setShow(false);
                                setData(moment(date).format('DD/MM/YYYY'));
                            }}
                        />
                    )}

                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Input
                            label="Data"
                            value={data}
                            left={<TextInput.Icon icon="calendar" />}
                            editable={false}
                        />
                    </TouchableOpacity>

                    <Input
                        label="Preço"
                        value={preco}
                        onChangeText={(text) => setPreco(text)}
                        left={<TextInput.Icon icon="currency-brl" />}
                    />

                    <Input
                        label="Valor"
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                        left={<TextInput.Icon icon="currency-brl" />}
                    />

                    <Input
                        label="Odometro"
                        value={odometro}
                        onChangeText={(text) => setOdometro(text)}
                        left={<TextInput.Icon icon="camera-timer" />}
                    />



                    <Button
                        mode="contained"
                        buttonColor={'blue'}
                        style={styles.button}
                        onPress={handleSalvar}>
                        Salvar
                    </Button>

                    {
                        // se a informação não existir não aparece o botom de excluir.
                        item &&

                        <Button
                            mode="contained"
                            buttonColor={'red'}
                            style={styles.button}
                            onPress={handleExcluir}>
                            Excluir
                        </Button>
                    }


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
        justifyContent: 'space-evenly',
    },

    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        marginTop: 8,
    },
});

export default Abastecimento;
