import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/colors';
import Title from './Title';

const Header = (props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Title text={props.title} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.8,
  },
});

export default Header;
