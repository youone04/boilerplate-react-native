import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        <View style={styles.descLeft}>
          <Text style={styles.textTitle}>Discover Top Picks</Text>
          <View style={styles.secondTextContainer}>
            <Text style={styles.secondNumberText}>+100</Text>
            <Text style={styles.seconText}>Lessons</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.buttonLeft}>
            <Text style={styles.textButton}>Explore More</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.contentRight}>
        <Image
          style={styles.image}
          source={require('../../assets/home-image/banner-image.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ACD7FF',
    minHeight: 156,
    height: 'auto',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  contentLeft: {
    flex: 1,
    rowGap: 10,
  },
  contentRight: {
    flex: 1,
  },
  descLeft: {
    rowGap: 10,
  },
  buttonLeft: {
    backgroundColor: '#3D8FEF',
    width: 130,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  image: {
    width: 160,
    minHeight: 160,
    height: 'auto',
  },
  textTitle: {
    fontSize: 16,
    color: '#577395',
    fontWeight: 'bold',
  },
  secondTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  secondNumberText: {
    color: '#2D4663',
    fontSize: 28,
    fontWeight: 'bold',
  },
  seconText: {
    fontSize: 16,
    color: '#577395',
    fontWeight: 'bold',
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
