import React from "react";
import {FlatList, View, Text} from "react-native";
import ItemMenu from "../components/menuItem";
import ActionComponent from "../components/ActionComponent";
import RatingComponent from "../components/RatingComponent";
import styles from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getList = async () => {
    try{
        const taskData = JSON.parse(await AsyncStorage.getItem("@taskList"));
        if(taskData && taskData.storaged){
            return taskData.list
        }
        else
            throw "vazio"
    } catch (er) {
        return ([]);
    }
}

const TaskComponent = (props) => {
    return (
        <View style={ styles.taskComponent }>
            <View style={ styles.taskInfos }>
                <Text style={{ fontSize: 24 }}>
                    {props.task.title}
                </Text>
                <RatingComponent rating={ props.task.evaluated } starDim={ 30 } />
            </View>
            <ActionComponent
                styles={{
                    parent: [ { flex: 1 }],
                    child:{ fontSize: 24 }
                }}
                onPress={ function({ navigation }){
                    return navigation.navigate('view', props.task);
                } }
                text={">"}
                navDetails={{ navigation: props.navigation }} />
        </View>
    );
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        getList().then(list => {
            this.state = {
                list
            }
        })
    }
    // Não sei se seria melhor deixar em uma "classe" utilitária
    compareArrays(a1, a2) {
        return !(a1.length === a2.length && a1.every((value, index) => value === a2[index]));
    }
    updateTasks(){
        getList().then(list => {
            if(this.compareArrays(this.state.list, list)){
                this.setState({
                    list
                });
            }
        })
    }

    render(){
        buttons[1].navDetails = {
            navigation: this.props.navigation,
            data: { list: this.state.list, updateTask: () => {this.updateTasks()} },
        };
        buttons[1].onPress = ({ navigation, data }) => {
            return navigation.navigate('add', data);
        };
        return (
            <>
                <ItemMenu
                    buttons={buttons}
                    text="Minhas tarefas"
                    styles={ {
                        content: styles.menuItem,
                        text: styles.menuTitle }
                    } />
                <FlatList
                    data={ this.state.list }
                    renderItem={ 
                        ({ item }) => <TaskComponent task={item} navigation={this.props.navigation}/> 
                    } />
            </> );
    }
}

const buttons = [
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        onPress: function(){},
        text: "",
    },
    {
        styles: {
            parent: [styles.buttonMenu],
            child: [styles.btnMenuText],
        },
        text: "+",
    }
];

export default TaskList;