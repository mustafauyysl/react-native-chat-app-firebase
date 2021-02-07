import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {currentUser, signOut} from '../firebase';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';
import Button from '../components/Button';

const SettingsScreen = (props) => {
  const [userName, setUserName] = useState();
  const ref = firestore().collection('users').where('id', '==', currentUser);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      let username = '';
      querySnapshot.forEach((doc) => {
        const {name} = doc.data();
        username = name;
      });

      setUserName(username);
    });
  }, []);

  const logOut = () => {
    signOut();
    props.navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.iconContainer}>
        <Icon name="user" size={100} color={Colors.primaryColor} />
      </View>
      <Text style={styles.title}>{userName}</Text>
      <Button
        btnTitle="Log out"
        btnIcon="log-out"
        style={styles.button}
        onClick={() => logOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderColor: Colors.primaryColor,
    borderWidth: 5,
    padding: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '800',
  },
  button: {
    marginTop: 20,
    width: 100,
    height: 50,
    borderRadius: 20,
  },
});

export default SettingsScreen;
