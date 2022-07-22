import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImageData from '../../ImageData';

const HomeScreen = ({navigation}) => {
  const data = ImageData();
  console.log(data.shorttitle);

  return (
    <ScrollView style={{backgroundColor: '#09182b', flex: 1}}>
      <View>
        <Text style={styles.textStyle}>Biology {' >'}</Text>
        <FlatList
          data={data.biologyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={item => (
            <TouchableOpacity style={{width: 100, height: 150}}>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.image}}
                resizeMode="contain"
              />
              <Text style={styles.textStyle}>{item.item.shorttitle}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Chemical {' >'}</Text>
        <FlatList
          data={data.chemicalData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={item => (
            <TouchableOpacity style={{width: 100, height: 150}}>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.image}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>History {' >'}</Text>
        <FlatList
          data={data.historyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={item => (
            <TouchableOpacity style={{width: 100, height: 150}}>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.image}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Math {' >'}</Text>
        <FlatList
          data={data.mathData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={item => (
            <TouchableOpacity style={{width: 100, height: 150}}>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.image}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Pyhsics {' >'}</Text>
        <FlatList
          data={data.physicsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={item => (
            <TouchableOpacity style={{width: 100, height: 150}}>
              <Image
                style={styles.imageStyle}
                source={{uri: item.item.image}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  viewStyle: {},
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;
