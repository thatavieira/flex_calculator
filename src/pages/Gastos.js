import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import { FAB, List, Text } from "react-native-paper";

import Body from "../components/Body";
import Container from "../components/Container";
import Header from "../components/Header";

import { getGastos } from '../services/GastoServiceDB';

import { useNavigation } from '@react-navigation/native';
//se tiver em foco os dados são atualizados
import { useIsFocused } from '@react-navigation/native';



const Gastos = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();



    const [gastos, setGastos] = useState([]);

    //carregar dados na tela
    useEffect(() => {
        getGastos().then((dados) => {
            setGastos(dados);
        });
    }, [isFocused]);

    const renderItem = ({ item }) =>
    (
        <List.Item
            title={
                'R$' + item.valor.toFixed(2) + ' (R$' + item.preco.toFixed(2) + ')'
            }
            description={item.odometro + ' Km'}
            left={(props) => (
                <List.Icon
                    {...props}
                    color={item.tipo == 0 ? 'red' : 'green'}
                    icon="gas-station"
                />
            )}
            right={(props) => (
                <Text {...props} style={{ alignSelf: 'center' }}>
                    {' '}
                    {item.data}{' '}
                </Text>
            )}
            //função para abrir na tela de abastecimento ao clicar no gasto.
            onPress={() => navigation.navigate('Abastecimento', { item })}
        />
    );

    return (
        <Container>
            <Header title={'Gerenciador de Combustível'} />
            <Body>
                <FlatList
                    data={gastos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => navigation.navigate('Abastecimento')}
                />
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'relative',
        margin: 170,
        left: 140,
        bottom: 40,
        top: 300,
    },
});

export default Gastos;