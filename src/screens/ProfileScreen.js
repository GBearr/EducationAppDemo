import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import profileList from '../../profileList';
import profileSettingsList from '../../profileSettingsList';

const ProfileScreen = props => {
  const profileData = profileList();
  const profileSettingsData = profileSettingsList();
  const [counter, setCounter] = useState('');

  return (
    <View style={styles.viewStyle}>
      <View style={styles.flatViewStyle}>
        <FlatList
          data={profileData.profileData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <TouchableOpacity>
              <View>
                <Image
                  source={{uri: item.item.image}}
                  style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>{item.item.userName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.settingsButtonViewStyle}>
        <FlatList
          data={profileSettingsData.profileSettings}
          numColumns={2}
          renderItem={item => (
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: item.item.image}}
                  style={styles.buttonImageStyle}
                />
                <Text style={styles.textStyle}>{item.item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.quitViewStyle}>
        <TouchableOpacity
          style={styles.quitButtonStyle}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Çıkış</Text>
        </TouchableOpacity>
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
    // Space-arround ekleme
  },
  settingsButtonViewStyle: {
    backgroundColor: '#09182b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quitViewStyle: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  quitButtonStyle: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonImageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  buttonStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    marginLeft: 10,
    marginBottom: 10,
    width: 120,
    height: 120,
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
