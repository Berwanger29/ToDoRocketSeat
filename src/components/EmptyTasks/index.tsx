import {
    View,
    Image,
    Text
} from 'react-native'

import { styles } from './styles'

export function EmptyTasks() {
    return (
        <View style={styles.emptyTasks}>
            <Image
                source={require('../../../assets/Images/clipboard.png')}
            />
            <Text style={[styles.emptyTasksText, { fontWeight: 'bold' }]}>
                Você ainda não tem tarefas cadastradas

            </Text>
            <Text style={styles.emptyTasksText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}