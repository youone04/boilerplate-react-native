import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import { useAppDispatch } from '../../redux/hooks';
import { hideHeader, showHeader } from '../../redux/slices/showHideHeader';

interface CardItem {
  id: string;
  name: string;
}

const ShowHideHeader: React.FC = () => {
  const [visibleItem, setVisibleItem] = useState<boolean>(false);
  const height = Dimensions.get('window');
  const dispatch = useAppDispatch()  

  const data: CardItem[] = [
    {id: '1', name: 'Card 1'},
    {id: '2', name: 'Card 2'},
    {id: '3', name: 'Card 3'},
  ];

  const handleLongPress = (id: string): void => {
    dispatch(showHeader())
    setVisibleItem(!visibleItem);
  }

  const handleDismiss = (event: GestureResponderEvent): void => {
    dispatch(hideHeader())
    setVisibleItem(!visibleItem);
  };

  const renderItem = ({item}: {item: CardItem}) => (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={styles.card}>
        <TouchableOpacity onLongPress={() => handleLongPress(item.id)}>
          <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <>
      {visibleItem && (
        <TouchableWithoutFeedback onPress={handleDismiss}>
          <View style={[styles.overlay, {height: height.height}]}>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Cancel')}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Update')}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Add')}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  containerButton : {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 'auto',
    justifyContent: 'flex-end',
    gap: 5,
    paddingHorizontal: 5
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cardText: {
    fontSize: 16,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 2,
    borderRadius: 8,
    zIndex: 10
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignContent:'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ShowHideHeader;
