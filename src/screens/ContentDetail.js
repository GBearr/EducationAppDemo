import React from 'react';
import HomeScreen from './HomeScreen';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import subjectArray from '../../subjectArray';
import {FlatList} from 'react-native-gesture-handler';

const ContentDetail = ({navigation}) => {
  const subjectData = subjectArray();
  console.log(
    'asdsadasfsdfsdfsdafsafdsafsdafmlskglsfdglşsfdmvkdvmlgkmsfdmgfdmsl',
    navigation.state.params.similarContent,
  );

  return (
    <View style={{backgroundColor: '#09182b', flex: 1}}>
      <View>
        <View style={{position: 'relative'}}>
          <Image
            source={{uri: navigation.state.params.image}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonTextStyle}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>
          {navigation.state.params.content} {'>'}
        </Text>
        <View style={styles.borderStyle}>
          <Text style={styles.textStyle2}>
            {navigation.state.params.description}
          </Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Benzer İçerikler {'>'}</Text>
          <FlatList
            horizontal
            data={navigation.state.params.similarContent}
            renderItem={item => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Content', {
                    description: item.item.description,
                    content: item.item.content,
                    image: item.item.image,
                    similarContent: subjectData.subjectData.filter(
                      i =>
                        i.lectureId === item.item.lectureId &&
                        i.content !== item.item.content,
                    ),
                  })
                }>
                <Image
                  style={styles.similarContentImage}
                  source={{uri: item.item.image}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  similarContentImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  imageStyle2: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    margin: 10,
  },
  textStyle2: {
    color: 'white',
    fontSize: 15,
    margin: 10,
  },
  borderStyle: {
    backgroundColor: '#070f1a',
  },
  buttonStyle: {
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    borderWidth: 1,
    opacity: 0.25,
    borderColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
  },
  buttonTextStyle: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ContentDetail;
