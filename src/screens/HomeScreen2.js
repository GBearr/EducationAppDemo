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
import subjectArray from '../../subjectArray';
import lectureList from '../../lectureList';

const HomeScreen2 = () => {
  const subjectData = subjectArray();
  const lectureData = lectureList();
  const filter = subjectData.subjectData.filter(objectName => {
    objectName.lectureId === `${objectName.lectureId}`;
  });

  return (
    <ScrollView style={{backgroundColor: '#09182b', flex: 1}}>
      <View>
        <FlatList
          data={lectureData.lectureData}
          style={{}}
          renderItem={item => (
            <View>
              <Text style={styles.textStyle}>
                {item.item.name} {'>'}
              </Text>
              <FlatList
                data={subjectData.subjectData}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{width: 20}} />}
                renderItem={item => (
                  <TouchableOpacity
                    style={{width: 100, height: 150}}
                    onPress={() => console.log(item.item.subjectId)}>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: item.item.image}}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
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

export default HomeScreen2;
