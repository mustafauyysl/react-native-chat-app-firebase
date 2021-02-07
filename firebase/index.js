import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const showAlert = (text) => {
  alert(text);
};

export const login = async (email, password) => {
  let isSuccess = false;
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      isSuccess = true;
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        showAlert('Wrong password!');
      }
    });
  return isSuccess;
};

export const signUp = async (email, password) => {
  let loginResult = false;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      return true;
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        loginResult = login(email, password);
      }
      if (error.code === 'auth/weak-password') {
        showAlert('Weak password');
      }
      if (error.code === 'auth/invalid-email') {
        showAlert('Invalid Email!');
      }
    });
  return loginResult;
};

export const saveUser = (id, name) => {
  firestore().collection('users').add({
    id,
    name,
  });
};

export const signOut = () => {
  auth().signOut();
};

export const currentUser = auth().currentUser ? auth().currentUser['uid'] : '';

export const sendMessage = (message, senderId, recipientId) => {
  firestore().collection('chats').add({
    message,
    senderId,
    recipientId,
    date: new Date(),
  });
};
