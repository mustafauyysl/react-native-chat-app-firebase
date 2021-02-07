import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const Title = (props) => {
  return (
    <View>
      <Text style={{...styles.title, ...props.style}}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 30,
    color: Colors.textColor,
  },
});

export default Title;
