import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { styles } from './styles'


type Props = {
    content: string;
    isDone: ()=>void;
    remove: () => void
}


export function Task({ content, isDone, remove }: Props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={isDone}
            >
                <View style={styles.doneIcon} />
            </TouchableOpacity>
            <Text style={styles.content}>
                {content}
            </Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={remove}
            >
                <Image
                    source={require('../../../assets/Images/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}