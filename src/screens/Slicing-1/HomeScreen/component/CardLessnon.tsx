import {faHeart, faClock} from '@fortawesome/free-regular-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function CardLessaon({onPress}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleLeft}>Populer Lessons</Text>
        <Text style={styles.titleRight}>See All</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {[1, 2, 3].map(d => {
          return (
            <TouchableOpacity key={d} onPress={() => onPress()}>
              <View style={styles.card}>
                <View style={styles.imageCard}>
                  <Image
                    style={styles.image}
                    source={require('../../assets/home-image/mas-group.png')}
                  />
                  <View style={styles.containerIcon}>
                    <FontAwesomeIcon icon={faHeart} size={20} color="gray" />
                  </View>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.textTitle}>
                      Figma master class UI Desaign
                    </Text>
                    <Text style={styles.textDesc}>(28 Lessons)</Text>
                  </View>
                </View>

                <View style={styles.cardFooter}>
                  <View style={styles.time}>
                    <FontAwesomeIcon icon={faClock} color="#3D8FEF" />
                    <Text style={styles.textTime}>6h 30min</Text>
                  </View>
                  <View style={styles.rating}>
                    <FontAwesomeIcon icon={faStar} size={25} color="#FFC71E" />
                    <Text style={styles.textRating}>4.9</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    columnGap: 10,
  },

  container: {
    rowGap: 30,
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  titleRight: {
    color: '#3D8FEF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFF',
    borderRadius: 10,
    minHeight: 300,
    height: 'auto',
    rowGap: 10,
    width: 300,
  },
  imageCard: {
    position: 'relative',
    padding: 20,
  },
  image: {
    height: 220,
    width: 260,
    borderRadius: 10,
  },
  containerIcon: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 40,
    top: 40,
  },
  cardContent: {
    paddingHorizontal: 20,
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    columnGap: 10,
    flexWrap: 'wrap',
  },
  textTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  textDesc: {
    color: '#AEAEAE',
    fontSize: 16,
  },
  cardFooter: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    paddingBottom: 15,
    marginTop: 30,
  },
  time: {
    backgroundColor: '#3D8FEF',
    opacity: 0.5,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
    columnGap: 8,
    borderRadius: 8,
  },
  rating: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTime: {
    fontSize: 18,
    color: '#3D8FEF',
    fontWeight: 'bold',
  },
  textRating: {
    fontSize: 18,
    color: '#AEAEAE',
  },
  containerFlatList: {
    // display: 'flex'
  },
});
