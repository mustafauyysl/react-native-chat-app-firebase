import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import {signUp, currentUser} from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';

Icon.loadFont();

const LoginScreen = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      props.navigation.navigate('Home');
    }
  });

  signUpOrLogin = async (email, password) => {
    if (email !== '' && password !== '') {
      if (signUp(email, password)) {
        props.navigation.navigate('Name');
      }
    } else {
      alert('Email or Password is Empty!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.logoContainer}>
        <Icon
          name="chatbubbles-outline"
          size={100}
          color={Colors.primaryColor}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title} text="Login / Sign Up" />
        <Input
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setUser({...user, email})}
        />
        <Input
          secureText={true}
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setUser({...user, password})}
        />
        <Button
          style={styles.button}
          btnIcon="arrow-right"
          onClick={() => signUpOrLogin(user.email, user.password)}
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

export default LoginScreen;
