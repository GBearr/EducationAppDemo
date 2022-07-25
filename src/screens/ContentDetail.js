import React from 'react';
import HomeScreen from './HomeScreen';
import {View, Image, Text, StyleSheet} from 'react-native';

const ContentDetail = ({navigation}) => {
  console.log(navigation.state.params);
  return (
    <View style={{backgroundColor: '#09182b', flex: 1}}>
      <View>
        <Image
          source={{uri: navigation.state.params.image}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>
          {navigation.state.params.content} {'>'}
        </Text>
        <Text style={styles.textStyle}>
          {navigation.state.params.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ContentDetail;
