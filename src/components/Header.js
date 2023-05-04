import { Appbar } from "react-native-paper";


const Header = ({ title, goBack }) => {
    return (
        <Appbar.Header>
            {
                goBack &&
                <Appbar.BackAction onPress={goBack} />
            }
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};


export default Header;