import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyCr29v2vzsZcaPGgEMcqf9ZN19m-NShZcg",
	    authDomain: "react-native-auth-3b530.firebaseapp.com",
	    databaseURL: "https://react-native-auth-3b530.firebaseio.com",
	    projectId: "react-native-auth-3b530",
	    storageBucket: "react-native-auth-3b530.appspot.com",
	    messagingSenderId: "442657177820"
  	});
	}

	render() {
		return(
			<View>
				<Header headerText='Authentication'/>
				<Text>An App</Text>
			</View>
		);
	}
}

export default App;