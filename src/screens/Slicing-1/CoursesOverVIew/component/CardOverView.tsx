import {faClock, faDotCircle} from '@fortawesome/free-regular-svg-icons';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, StyleSheet, View, Text} from 'react-native';

export default function CardOverView() {
  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        <Image
          style={styles.image}
          source={require('../../assets/courses-image/course-overview-image.png')}
        />
        <View style={styles.buttonPlay}>
            <FontAwesomeIcon icon={faPlay} color='#3D8FEF' size={30}/>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.textTitle}>Figma master class for beginners</Text>
        <View style={styles.cardDesc}>
          <View style={styles.cardDescTime}>
            <FontAwesomeIcon icon={faClock} color='#8C8C8C' />
            <Text style={styles.textTime}>6h 30min</Text>
            <FontAwesomeIcon style={styles.dotCircle} icon={faDotCircle} size={5}/>
            <Text style={styles.textTime}>28 lessons</Text>
          </View>

          <View style={styles.rating}>
            <FontAwesomeIcon icon={faStar} size={22} color='#FFC71E' />
            <Text style={styles.textRating}>4.9</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    marginTop: 50,
  },
  cardImage: {
    width: 'auto',
    position:'relative'
  },
  image: {
    width: 'auto',
    height: 250,
    borderRadius: 10,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  cardDesc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDescTime: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  dotCircle:{
    alignSelf:'center'
  },
  rating:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:5,
    backgroundColor:'#3D8FEF',
    borderRadius: 8,
    padding: 5,
  },
  textTime:{
    fontSize: 16,
    color: '#8C8C8C'
  },
  textRating: {
    color:'#FFFF',
    fontSize: 15
  },
  buttonPlay:{
    backgroundColor:'#FFFF',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 50,
    position:'absolute',
    top: '40%',
    right: '45%'

  }
});
