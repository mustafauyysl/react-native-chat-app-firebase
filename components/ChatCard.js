import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const ChatCard = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        alignSelf: props.selfMessage ? 'flex-end' : 'flex-start',
      }}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.chatBgColor,
    margin: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    padding: 20,
  },
});

export default ChatCard;
