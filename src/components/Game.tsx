import React from 'react';
import { View, Text } from 'react-native';
import { Colored, Colorless } from "../globals/Styles";
import Colors from '../globals/Colors';

interface Props {
    gameID: number;
}

// Implementation logic: 

// component should check if the gameID currently stored in the object store 
// has this gameID with the completed tag
// if it is just render with info from the object store, else request a render 
// from the web if it has been more than 10 seconds since last request

const Game: React.FC<Props> = props => {
    const { gameID } = props;
    const coloredStyles = Colored();
    return (
        <View style={coloredStyles.screen}>
            <Text></Text>
        </View>);
}

export default Game;