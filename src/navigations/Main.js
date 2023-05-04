import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Abastecimento from "../pages/Abastecimento";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();


const Main = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Abastecimento" component={Abastecimento} />
        </Stack.Navigator>
    );
};

export default Main;