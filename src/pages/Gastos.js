import { FlatList, StyleSheet } from "react-native";
import { FAB, List, Text } from "react-native-paper";
import Body from "../components/Body";
import Container from "../components/Container";
import Header from "../components/Header";


const DATA = [
    {
        id:1,
        tipo: 0,
        data: '01/01/2022',
        preco: 6.77,
        valor: 100,
        odometro: 22000,
    },
    {
        id:1,
        tipo:1,
        data: '15/01/2022',
        preco: 4.77,
        valor: 150,
        odometro: 25000,
    },
];


const Gastos = () =>{

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
        />
    );

    return (
        <Container>
            <Header title={'Gerenciador de Combustível'} />
            <Body>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                />
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    fab: {
      position: 'relative',
      margin: 180,
      left: 160,
      bottom: 50,
      top:130,
    },
  });

export default Gastos;