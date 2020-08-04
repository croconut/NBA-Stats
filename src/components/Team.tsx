import React from 'react';
import { View, Text } from 'react-native';
import { Colored, Colorless } from "../globals/Styles";
import Colors from '../globals/Colors';

interface Props {
    teamID: string;
}

// component should be very similar to player: always do an API update on load
// and check for ongoing games

const Team: React.FC<Props> = props => {
    const { teamID } = props;
    const coloredStyles = Colored();
    return (
        <View style={coloredStyles.screen}>
            <Text></Text>
        </View>);
}

export default Team;