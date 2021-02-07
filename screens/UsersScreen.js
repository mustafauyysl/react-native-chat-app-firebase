import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {currentUser} from '../firebase';

const UsersScreen = (props) => {
  const [users, setUsers] = useState([]);
  const ref = firestore().collection('users').where('id', '!=', currentUser);

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {id, name} = doc.data();
        list.push({
          id,
          name,
        });
      });

      setUsers(list);
    });
  }, []);

  return (
    <View>
      <Header title="Users" />
      <FlatList
        data={users}
        renderItem={(user) => (
          <UserCard
            name={user.item.name}
            onPress={() =>
              props.navigation.navigate('Chat', {
                userName: user.item.name,
                userId: user.item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default UsersScreen;
