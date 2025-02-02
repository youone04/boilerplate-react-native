import {StyleSheet, View} from 'react-native';
import CardOverView from './component/CardOverView';
import TabViewCourses from './component/Tabs';
import {Fragment} from 'react';

export default function CoursesOverView() {
  return (
    <View style={styles.container}>
      <CardOverView />
      <TabViewCourses />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    rowGap: 10
  },
});
