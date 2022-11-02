import { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
} from 'react-native'
import { EmptyTasks } from '../../components/EmptyTasks';
import { Line } from '../../components/Line';
import { Task } from '../../components/Task';

import theme from '../../global/theme';
import { styles } from "./styles";

export function Home() {

    const [isEmpty, setIsEmpty] = useState(true)
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    const [tasksCounter, setTasksCounter] = useState(0)

    function handleIsDone() {
        console.log('isDone')
    }

    function handleAdd() {

        setTasks(prevState => [...prevState, task.trim()])
        setTask('')
    }

    function handleDelete(i) {

        let newArr = []

        Alert.alert(
            'Aviso',
            'Deseja realmente remover esta tarefa ?',
            [

                {
                    text: 'Não',
                    style: 'cancel',
                    onPress: () => null
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        newArr = tasks.filter((e, index) => {
                            if (index !== i)
                                return e
                        })
                        setTasks(newArr)
                    }
                }
            ]
        )
    }

    useEffect(() => {
        let tasksQuantity = tasks.length

        if (tasksQuantity > 0) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
        setTasksCounter(tasksQuantity)
        console.log(tasks)
    }, [tasks])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/Images/logo.png')}
                    style={styles.imageHeader}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={theme.gray300}
                    value={task}
                    onChangeText={e => setTask(e)}
                    keyboardType='default'
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAdd}
                >
                    <Text style={styles.addButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.tasksInfo}>
                    <View style={styles.tasksCreatedGroup}>
                        <Text style={styles.tasksCreatedText}>
                            Criadas
                        </Text>
                        <View style={styles.tasksCounter}>
                            <Text style={styles.counterText}>
                                {tasksCounter}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tasksCreatedGroup}>
                        <Text style={[styles.tasksCreatedText, { color: theme.purple }]}>
                            Concluídas
                        </Text>
                        <View style={styles.tasksCounter}>
                            <Text style={styles.counterText}>
                                0
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {
                isEmpty ?
                    (
                        <>
                            <Line />
                            <EmptyTasks />
                        </>
                    )
                    :
                    (
                        <View style={styles.tasksContainer}>
                            <FlatList
                                style={{ flex: 1 }}
                                data={tasks}
                                renderItem={({ item, index }) => (
                                    <Task
                                        content={item}
                                        isDone={handleIsDone}
                                        remove={() => handleDelete(index)}
                                    />
                                )}
                            />

                        </View>
                    )
            }
        </View>
    )
} 