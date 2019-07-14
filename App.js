import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

class App extends React.Component {

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDQ8c7d0wAkueIm0CibUZHjhKMjb-uYtMY",
      authDomain: "todoapp-c6b1c.firebaseapp.com",
      databaseURL: "https://todoapp-c6b1c.firebaseio.com",
      projectId: "todoapp-c6b1c",
      storageBucket: "",
      messagingSenderId: "968089175067",
      appId: "1:968089175067:web:d4202b8e994760ce"
    };
    
    try {
      firebase.initializeApp(firebaseConfig);
      
      } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
      }
      }

      firebase.database().ref('users').on('value', (data) => {
        console.log(data.toJSON());
      })

      // setTimeout(() => {
      //   firebase.database().ref('users/004').set(
      //     {
      //       name: 'Kyrie Irving',
      //       age: 20
      //     }
      //   )

      // }, 5000);

      // firebase.database().ref('users/004').update({
      //   name: 'Kawhi Leonard'


      // });

      firebase.database().ref('users/003' ).remove();


      







  }


  render() {
    return (
      <View style={{alignItems: 'center', height: '100%', justifyContent: 'center'}}>
        <Text style={{ fontWeight: 'bold', fontSize: 18}}>
          Welcome to ----------->
          {'\n'}Our Google firebase database
          </Text>
        </View>
    )
  }
}

export default App;