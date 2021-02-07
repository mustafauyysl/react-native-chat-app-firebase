import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';

Icon.loadFont();

const UserCard = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <>
        <View style={styles.iconContaner}>
          <Icon name="user" size={24} color={Colors.primaryColor} />
        </View>
        <Text style={styles.title}>{props.name}</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    justifyContent: 'center',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 9,
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
    color: Colors.textColor,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  iconContaner: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});

export default UserCard;
