import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Abastecimento from "../pages/Abastecimento";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();


const Main = () => {
    return (
        <Stack.Navigator initialRouteName="Abastecimento">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null
                }} />
            <Stack.Screen
                name="Abastecimento"
                component={Abastecimento}
                options={{
                    header: () => null
                }} />
        </Stack.Navigator>
    );
};

export default Main;