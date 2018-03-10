import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

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
				<LoginForm />
			</View>
		);
	}
}

export default App;