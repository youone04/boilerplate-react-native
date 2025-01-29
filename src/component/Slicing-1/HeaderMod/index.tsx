import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

export function IconLeft({navigation}: any) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.containerIcon}>
        <FontAwesomeIcon icon={faAngleLeft} size={20} />
      </View>
    </TouchableOpacity>
  );
}

export function IconRight() {
  return (
    <View style={styles.containerIcon}>
      <FontAwesomeIcon icon={faHeart} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: '#ffff',
    padding: 13,
    borderRadius: 10,
  },
});
