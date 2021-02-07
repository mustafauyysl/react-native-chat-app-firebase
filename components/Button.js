import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/colors';

import Icon from 'react-native-vector-icons/Feather';

const Button = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{...styles.button, ...props.style}}
        onPress={props.onClick}>
        <Icon name={props.btnIcon} size={24} color="#fff" />
        <Text style={styles.title}>{props.btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  title: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Button;
