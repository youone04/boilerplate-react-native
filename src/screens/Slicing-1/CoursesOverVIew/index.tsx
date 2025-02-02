import { StyleSheet, View } from "react-native";
import CardOverView from "./component/CardOverView";

export default function CoursesOverView(){
    return(
        <View style={styles.container}>
            <CardOverView/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        rowGap: 100,
        display: 'flex',
        flexDirection: 'column'
    }
})