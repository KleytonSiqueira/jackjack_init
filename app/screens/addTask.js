import React from "react";
import { View, TextInput } from "react-native";
import ItemMenu from "../components/menuItem";
import RatingComponent from "../components/RatingComponent";
import styles from "../styles";
import Task from "../model/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Solução temporária?! para o warning
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const storeList = async (list) => {
    try{
        await AsyncStorage.setItem("@taskList", JSON.stringify({ storaged: true, list }));
    } catch(er) {
        console.error(er);
    }
}

const messageText = {
    "title": "título",
    "content": "descrição",
    "evaluated": "avaliação"
}

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            evaluated: 3
        }

        this.list = this.props?.route?.params?.list?.filter( item => item ) || [];
    }

    add(navigation){
        const task = new Task(this.state.title.trim(), this.state.description.trim(), this.state.evaluated);
        for(let key in task){
            if(task[key] === ""){
                alert(`Campo ${messageText[key]} não pode estar vazio!`);
                return;
            }
        }
        this.list.push(task);
        storeList(this.list);
        this.props.route.params?.updateTask();
        navigation.goBack();
    }
    
    render(){
        buttons[0].navDetails = {
            navigation: this.props.navigation
        }
        buttons[1].navDetails = buttons[0].navDetails;
        buttons[1].onPress = ({ navigation }) => {
            this.add(navigation);
        }
        return (
            <>
                <ItemMenu
                    buttons={buttons}
                    text="Nova Tarefa"
                    styles={ {
                        content: styles.menuItem,
                        text: styles.menuTitle }
                    } />
                <View 
                    style={{ padding:5 }}>
                    <TextInput
                        placeholder="Título"
                        style={ styles.textInput }
                        onChangeText={ (text) => {
                            this.setState({
                                title: text
                            });
                        } } />
                    <TextInput
                        placeholder="Descrição"
                        multiline={true}
                        numberOfLines={8}
                        style={ [styles.textInput, { height:200 }] }
                        onChangeText={ (text) => {
                            this.setState({
                                description: text
                            });
                        } } />
                    
                    <View
                        style={[ styles.ratingContent, { marginTop: 10 } ]}>
                        <RatingComponent 
                            onFinishRating={(val) => {
                                this.setState({
                                    evaluated: val
                                });
                            }}
                            starDim={55}/>
                    </View>
                </View>
            </>
        );
    }
}

const buttons = [
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        onPress: function({ navigation }){
            return navigation.goBack();
        },
        text: "<",
    },
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        onPress: function(){},
        text: "Add",
    }
];

export default AddTask;