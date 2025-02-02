import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import LessonTab from './Lessons';
import DescriptionTab from './Description';
const renderScene = ({ route }: { route: any }) => {
    switch (route.key) {
      case 'lesson':
        return <LessonTab />;
      case 'description':
        return <DescriptionTab />;
      default:
        return null;
    }
  };
const routes = [
  { key: 'lesson', title: 'Lessons' },
  { key: 'description', title: 'Description' },
];

export default function TabViewCourses() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: 'transparent' }}
          activeColor={'#3D8FEF'}
          inactiveColor='#D2D2D2'
          indicatorStyle={{backgroundColor: '#3D8FEF'}}
          tabStyle={{boxShadow:'none',backgroundColor:'transparent'}}
        />
      )}
    />
  );
}