import React from "react";
import { View, Text, ScrollView } from "react-native";
import ItemMenu from "../components/menuItem";
import RatingComponent from "../components/RatingComponent";
import styles from "../styles";

class ViewTask extends React.Component{
    render(){
        const { route } = this.props;
        buttons[0].navDetails = {
            navigation: this.props.navigation,
            data: {},
        }
        return (
            <View>
                <ItemMenu
                    buttons={buttons}
                    text={ route.params?.title }
                    styles={ {
                        content: styles.menuItem,
                        text: styles.menuTitle }
                    } />
                <ScrollView>
                    <Text style={[ styles.taskDescription, { marginTop: 15, color: "#1cd65b" } ]}>
                        Conteúdo:
                    </Text>
                    <Text style={ styles.taskDescription }>
                        {route.params?.content}
                    </Text>
                    <View
                        style={[ styles.ratingContent, { marginTop: 10 } ]}>
                        <RatingComponent
                            rating={ route.params?.evaluated }
                            starDim={ 45 } />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const buttons = [
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        onPress: function({navigation, data}){
            return navigation.navigate('home', data);
        },
        text: "<",
    },
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        onPress: function(){},
        text: "",
    }
];


export default ViewTask;