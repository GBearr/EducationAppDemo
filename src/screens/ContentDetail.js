import React, {useState} from 'react';
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
import {requestFrame} from 'react-native-reanimated/lib/reanimated2/core';

let icon;

function changeIcon(icon) {
  if (icon == 'play') icon = require('../../Icons/play.png');
  else icon = require('../../Icons/stop-button.png');
}

const ContentDetail = props => {
  const subjectData = subjectArray();
  const navigation = useNavigation();
  const [overlayVis, setOverlayVis] = useState(false);
  const [paused, setPaused] = useState(null);
  const [sound, setSound] = useState(false);

  return (
    <View style={{backgroundColor: '#09182b', flex: 1}}>
      <ScrollView>
        <TouchableOpacity
          style={{position: 'relative'}}
          onPress={() => {
            setOverlayVis(true);
            setPaused(false);
          }}>
          <Video
            source={{
              uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            // ref={ref => {
            //   this.player = ref;
            // }}
            style={styles.video}
            paused={paused}
            muted={sound}
          />
          {overlayVis && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                {
                  setOverlayVis(false);
                  setPaused(true);
                }
              }}>
              <TouchableOpacity
                style={styles.controllerPlayImage}
                onPress={() => {
                  setOverlayVis(false);
                  setPaused(true);
                }}>
                <Image
                  source={
                    paused
                      ? require('../../Icons/stop-button.png')
                      : require('../../Icons/play.png')
                  }
                  style={styles.controllerPlayImage}
                />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}>
                <TouchableOpacity
                  style={styles.soundImage}
                  onPress={() => {
                    setSound(true);
                  }}>
                  <Image
                    source={require('../../Icons/volume.png')}
                    style={styles.soundImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => navigation.pop()}>
                  <Text style={styles.buttonTextStyle}>{'<'}</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
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
  controller: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  controllerPlayImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  soundImage: {
    width: 20,
    height: 20,
    marginTop: 105,
    marginLeft: 10,
  },
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
    top: 10,
    left: 10,
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
