import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {currentUser} from '../firebase'; 

const ChatsScreen = (props) => {
  const [users, setUsers] = useState([]);
  const chats = firestore()
    .collection('chats')
    .where('senderId', '==', currentUser);

  useEffect(() => {
    return chats.onSnapshot((querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        const {id, recipientId} = doc.data();
        const usersRf = firestore()
          .collection('users')
          .where('id', '==', recipientId);
        usersRf.onSnapshot((usersQuery) => {
          usersQuery.forEach((userDoc) => {
            const {id, name} = userDoc.data();
            list.push({
              id,
              name,
            });
          });
          list = [...new Map(list.map((item) => [item.name, item])).values()];
          setUsers(list);
        });
      });
    });
  }, []);

  return (
    <View>
      <Header title="Chats" />
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

export default ChatsScreen;
