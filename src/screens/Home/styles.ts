import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.gray600,
    },
    header: {
        flex: 0.2,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: theme.gray700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHeader: {

    },
    inputContainer: {
        width: '90%',
        flexDirection: "row",
        alignSelf: "center",
        marginTop: -25
    },
    input: {
        flex: 1,
        backgroundColor: theme.gray500,
        borderRadius: 6,
        fontSize: 16,
        color:theme.gray100,
        paddingLeft: 10
    },
    addButton: {
        backgroundColor: theme.blueDark,
        height: 50,
        width: 50,
        marginLeft: 10,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    addButtonText: {
        color: theme.gray100,
        fontSize: 30,
    },
    main: {
        width: '90%',
        alignSelf: "center",
        marginBottom: 20
    },
    tasksInfo: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    },
    tasksCreatedGroup: {
        flexDirection: "row",
        marginLeft: 10,
    },
    tasksCreatedText: {
        color: theme.blue,
        fontWeight: "bold",
        fontSize: 14
    },
    tasksCounter: {
        backgroundColor: theme.gray400,
        height: 25,
        width: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 999,
        marginLeft: 5
    },
    counterText: {
        fontWeight: 'bold',
        color: theme.gray100
    },
    tasksContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }

})
