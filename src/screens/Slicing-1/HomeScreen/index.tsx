import { StyleSheet, View } from "react-native";
import Header from "./component/Header";
import FormSearch from "./component/FormSearch";

export default function HomeScreen(){
    return(
       <View style={styles.container}>
        <Header/>
        <FormSearch/>

       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        rowGap: 25
    }
})