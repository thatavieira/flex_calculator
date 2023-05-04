import { StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Body from "../components/Body";
import Container from "../components/Container";
import Header from "../components/Header";

const Abastecimento = () => {

    return (
        <SafeAreaProvider>
        <Container>
            <Header title={"Abastecimento"} />
            <Body>
            </Body>
        </Container>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({

});

export default Abastecimento;