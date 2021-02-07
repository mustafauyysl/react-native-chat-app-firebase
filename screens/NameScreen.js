import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import {saveUser, showAlert, currentUser} from '../firebase';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';

Icon.loadFont();

const NameScreen = (props) => {
  const [userName, setUserName] = useState();

  saveUserName = (userId, name) => {
    if (name) {
      saveUser(userId, name);
      props.navigation.navigate('Home');
    } else {
      alert('Username is Empty!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.logoContainer}>
        <Icon name="user" size={100} color={Colors.primaryColor} />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title} text="Your Name" />
        <Input
          style={styles.input}
          placeholder="What is your name?"
          onChangeText={(username) => setUserName(username)}
        />
        <Button
          style={styles.button}
          btnIcon="arrow-right"
          onClick={() => saveUserName(currentUser, userName)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  logoContainer: {
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  innerContainer: {
    marginHorizontal: 32,
  },
  input: {
    marginVertical: 10,
  },
  title: {
    marginVertical: 20,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 50,
  },
});

export default NameScreen;
