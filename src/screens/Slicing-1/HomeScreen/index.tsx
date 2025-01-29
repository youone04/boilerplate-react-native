import {StyleSheet, View, ScrollView, Button} from 'react-native';
import Header from './component/Header';
import FormSearch from './component/FormSearch';
import Banner from './component/Banner';
import CardLessaon from './component/CardLessnon';

export default function HomeScreen({navigation} : any) {
    console.log('navigation',navigation)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <FormSearch />
        <Banner />
        <CardLessaon onPress={() => navigation.push('Courses-overview')} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    rowGap: 25,
  },
});
