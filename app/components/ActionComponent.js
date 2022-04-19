import React from "react"
import {Text, TouchableOpacity} from "react-native"

const ActionComponent = (props) => {
    return (
        <TouchableOpacity style={[props.styles.parent, { justifyContent: "center", alignItems: "center" }]} onPress={(event) => {
            props.onPress( props?.navDetails );
        }}>
            <Text style={props.styles.child}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

export default ActionComponent;