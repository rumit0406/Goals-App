import { useState } from "react";
import { FlatList } from "react-native";
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
    const [goal, setGoal] = useState("");
    const [goalList, setGoalList] = useState(["lets", "start"]);

    changeHandler = (text) => {
        setGoal(text);
    };

    submitHandler = () => {
        setGoalList((currentList) => [...currentList, goal]);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.goalList}>
                <Text style={styles.goalListTitle}>List of Goals</Text>
                <FlatList
                    data={goalList}
                    renderItem={(itemData) => {
                        return (
                            <View
                                style={styles.goalItemText}
                                key={itemData.index}
                            >
                                <Text style={{ fontSize: 15 }}>
                                    {itemData.item}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Goal"
                    onChangeText={changeHandler}
                />
                <Button title="Add Goal" onPress={submitHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: "#a4b3e5",
    },
    inputContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 35,
        height: "60%",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        marginRight: 5,
        padding: 5,
        flex: 1,
    },
    goalList: {
        paddingTop: 25,
        flex: 8,
    },
    goalListTitle: {
        fontSize: 45,
        marginBottom: 10,
    },
    goalItemText: {
        padding: 2,
    },
});
