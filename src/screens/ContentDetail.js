import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import {Icon} from 'react-native-vector-icons/Icon';

const ContentDetail = props => {
  const subjectData = subjectArray();
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#09182b', flex: 1}}>
      <ScrollView>
        <View style={{position: 'relative'}}>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            }}
            style={styles.video}
            onError={e => console.log(e)}
            controls={true}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.pop()}>
            <Text style={styles.buttonTextStyle}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButtonStyle}>
            {/* <Image
              source={require('../../Icons/play.png')}
              style={styles.playImageStyle}
            /> */}
          </TouchableOpacity>
          <Image />
        </View>
        <Text style={styles.textStyle}>
          {props.route.params.content} {'>'}
        </Text>
        <View style={styles.borderStyle}>
          <Text style={styles.textStyle2}>
            {props.route.params.description}
          </Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Benzer İçerikler {'>'}</Text>
          <FlatList
            horizontal
            data={props.route.params.similarContent}
            renderItem={item => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Content', {
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  playImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
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
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  playButtonStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    marginTop: 70,
    marginLeft: 150,
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
