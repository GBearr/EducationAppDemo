import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import profileList from '../../profileList';

const ProfileScreen = () => {
  const profileData = profileList();

  return (
    <View style={styles.viewStyle}>
      <View style={styles.flatViewStyle}>
        <FlatList
          data={profileData.profileData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <View>
              <Image
                source={{uri: item.item.image}}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>{item.item.userName}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.allButtonViewStyle}>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image
              source={require('../../Icons/settings.png')}
              style={styles.buttonImageStyle}
            />
            <Text style={styles.textStyle}>Ayarlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image
              source={require('../../Icons/settings.png')}
              style={styles.buttonImageStyle}
            />
            <Text style={styles.textStyle}>Tivibu Ayarları</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image
              source={require('../../Icons/settings.png')}
              style={styles.buttonImageStyle}
            />
            <Text style={styles.textStyle}>Tivibu Ayarları</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Image
              source={require('../../Icons/settings.png')}
              style={styles.buttonImageStyle}
            />
            <Text style={styles.textStyle}>Tivibu Ayarları</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.quitButtonStyle}>
            <Text style={styles.textStyle}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#09182b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quitButtonStyle: {
    width: '80%',
    height: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonImageStyle: {
    width: 40,
    height: 40,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: 150,
    height: 150,
    justifyContent: 'space-around',
  },
  allButtonViewStyle: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
  },
  flatViewStyle: {
    width: '100%',
    height: 150,
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    marginLeft: 10,
    textAlign: 'center',
  },
});
