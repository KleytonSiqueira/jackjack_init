import { StyleSheet } from "react-native"

const diffPD = 10;

const styles = StyleSheet.create({
    menuItem:{
        flexDirection: "row",
        paddingVertical: diffPD,
        backgroundColor: "#000",
    },

    menuTitle:{
        textAlign: "center",
        color: "#fff",
        fontSize: 36,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
    },

    btnMenuText:{
        fontSize: 28,
        color: "#5dceed",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonMenu:{
        width: 70,
    },

    minusTranslate:{
        transform: [{ translateX: -diffPD }],
    },
    plusTranslate:{
        transform: [{ translateX: diffPD }],
    },

    ratingContent:{
        justifyContent: "center",
        alignItems: "center"
    },

    taskDescription:{
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 5,
        paddingHorizontal: 20,
        textAlign: "justify"
    },

    taskComponent:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: diffPD,
        borderWidth: 2,
        margin: 5,
    },

    taskInfos:{
        display: "flex",
        flexDirection: "column",
        minWidth: "75%",
        justifyContent: "space-evenly",
        marginLeft: 10,
    },
    
    ratingViewStyle: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    starImageStyle: {
        resizeMode: 'cover',
    },

    textInput:{
        borderWidth: 1,
        margin: 10,
        padding: 10,
        textAlignVertical: "top",
        fontSize: 24
    }
});

export default styles;