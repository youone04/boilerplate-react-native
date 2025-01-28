import { StyleSheet, View } from "react-native";
import Header from "./component/Header";
import FormSearch from "./component/FormSearch";
import Banner from "./component/Banner";

export default function HomeScreen(){
    return(
       <View style={styles.container}>
        <Header/>
        <FormSearch/>
        <Banner/>

       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        rowGap: 25
    }
})