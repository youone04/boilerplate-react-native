import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Col, Row} from '../../grid';
import {useState} from 'react';
const {height, width} = Dimensions.get('window');

export default function TestGridScreen() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View>
      <Row>
        <Col gap={10}>
          <View>
            <Text>yudi 1</Text>
            <Pressable onPress={() => setVisible(!visible)}>
              <Text>yudi 2</Text>
            </Pressable>
          </View>
        </Col>
      </Row>

      <TouchableNativeFeedback onPress={() => setVisible(!visible)}>
        <View
          style={[
            styles.overplay,
            visible ? {display: 'flex'} : {display: 'none'},
          ]}>
          <View style={styles.cardContainer}>
            <Text>yudi</Text>
            <Text>gunawan</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('ok')}>
              <Text style={styles.buttonText}>yudii</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  overplay: {
    height: height,
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    width: width,
  },
  cardContainer: {
    display: 'flex',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: 4,
    // flex: 1,
    backgroundColor: '#fff',
    height: height / 2,
    zIndex: 10,
    width: width - 50,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
