import React from 'react';
import { View, Text } from 'react-native';
import { Colored, Colorless } from "../globals/Styles";
import Colors from '../globals/Colors';

interface Props {
    playerID: number;
}

// Implementation logic: 

// this component can just update from API every couple seconds while looking at
// it, but only once if not actively in a game, then it should
// schedule it's next check for next game's start time (retrieve from player's 
// team API)

const Player: React.FC<Props> = props => {
    const { playerID } = props;
    const coloredStyles = Colored();
    return (
        <View style={coloredStyles.screen}>
            <Text></Text>
        </View>);
}

export default Player;