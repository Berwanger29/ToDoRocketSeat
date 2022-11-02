import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
    emptyTasks: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },
    emptyTasksText: {
        fontSize: 14,
        fontWeight: "normal",
        color: theme.gray300,
    }
})