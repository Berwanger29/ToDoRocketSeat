import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme.gray500,
        borderRadius: 8,
        overflow: "hidden",
        elevation: 5,
        alignItems: "center",
        marginBottom: 10
    },
    content: {
        flex: 1,
        textAlign: "justify",
        color: theme.gray100,
        fontSize: 14,
        paddingHorizontal: 4,
        paddingVertical: 10,
    },
    buttonContainer: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    doneIcon: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: theme.gray500,
        borderColor: theme.blue,
        borderWidth: 3,
        borderStyle: "solid"
    }
})