import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, TextInput, View } from "react-native";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";



export default function FormSearch(){
    return(
        <View style={styles.container}>
           <View style={styles.formSearch}>
            <FontAwesomeIcon icon={faSearch} color="#8C8C8C" size={23}/>
            <TextInput style={styles.textInput} placeholder="Search Now.." />
           </View>

           <View style={styles.iconFilter}>
            <FontAwesomeIcon icon={faFilter} size={19} color="#fff"/>
           </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10

    },
    textInput: {
        fontSize: 18,
        color: '#8C8C8C'

    },
    formSearch: {
        display: 'flex',
        flexDirection: 'row',
        flex: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 48,
        alignItems:'center',
        paddingHorizontal: 15,
        columnGap: 5

    },
    iconFilter:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3D8FEF',
        alignItems:'center',
        borderRadius: 10,
        width: 8

    }
})