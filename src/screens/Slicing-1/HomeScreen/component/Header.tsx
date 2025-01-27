import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Text, View} from 'react-native';
import {faBell} from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleName}>HI, Jere</Text>
        <Text style={styles.titleDesc}>Find Your lesson today!</Text>
      </View>

      <View style={styles.iconNotifikasi}>
        <FontAwesomeIcon icon={faBell} size={22} color="black" />
        <View style={styles.iconCirlce} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
  },
  title: {},
  titleName: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#2C2C2C',
  },
  titleDesc: {
    fontSize: 16,
    color: '#8C8C8C',
  },
  iconNotifikasi: {
    position: 'relative',
  },
  iconCirlce: {
    height: 5,
    width: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    right: 3,
    top: 2,
  },
});
