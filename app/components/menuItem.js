import React from "react"
import {Text, View} from "react-native"
import ActionComponent from "./ActionComponent";

// Melhor nome: header
const ItemMenu = (props) => {
    const [leftButton, rightButton] = props?.buttons;
    return (
        // Aqui não precisaria desse <>
        <>
            <View style={ props.styles.content }>
                <ActionComponent styles={leftButton.styles} onPress={leftButton.onPress} text={leftButton.text} navDetails={ leftButton?.navDetails }/>
                <Text style={[ props.styles.text ]}>
                    {props.text}
                </Text>
                <ActionComponent styles={rightButton.styles} onPress={rightButton.onPress} text={rightButton.text} navDetails={ rightButton?.navDetails } />
            </View>
        </>
    )
}

export default ItemMenu;