import { Appbar } from "react-native-paper";


const Header = ({title}) =>{
    return (
        <Appbar.Header>
            <Appbar.Content title={title}/>
        </Appbar.Header>
    );
};


export default Header;