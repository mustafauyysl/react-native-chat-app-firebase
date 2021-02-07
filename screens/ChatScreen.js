import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {currentUser, sendMessage} from '../firebase';
import firestore from '@react-native-firebase/firestore';
import ChatCard from '../components/ChatCard';
import {FlatList} from 'react-native-gesture-handler';
import ChatInput from '../components/ChatInput';

const ChatScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const {userName, userId} = props.route.params;
  const ref = firestore().collection('chats').orderBy('date');

  useEffect(() => {
    props.navigation.setOptions({title: userName});
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {message, senderId, recipientId} = doc.data();
        if (
          (senderId === currentUser || senderId === userId) &&
          (recipientId === currentUser || recipientId === userId)
        )
          list.push({
            message,
            senderId,
            recipientId,
          });
      });
      console.log('liST', list);
      setMessages(list);
    });
  }, []);

  triggerSendMessage = () => {
    if (message) {
      sendMessage(message, currentUser, userId);
    }
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}}
        data={messages}
        renderItem={(message) => (
          <ChatCard
            selfMessage={message.item.senderId === currentUser}
            text={message.item.message}
          />
        )}
      />
      <ChatInput
        msgValue={message}
        onChangeText={(message) => setMessage(message)}
        onClick={() => triggerSendMessage()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
