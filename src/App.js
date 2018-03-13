import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyCr29v2vzsZcaPGgEMcqf9ZN19m-NShZcg",
	    authDomain: "react-native-auth-3b530.firebaseapp.com",
	    databaseURL: "https://react-native-auth-3b530.firebaseio.com",
	    projectId: "react-native-auth-3b530",
	    storageBucket: "react-native-auth-3b530.appspot.com",
	    messagingSenderId: "442657177820"
  	});

  	firebase.auth().onAuthStateChanged((user) => {
  		if (user) {
  			this.setState({ loggedIn: true });
  		} else {
  			this.setState({ loggedIn: false })
  		}
  	});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<Text style={styles.textStyle}>You Are Signed In!</Text>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log Out
							</Button>
						</CardSection>
					</Card>
				);

			case false:
				return <LoginForm />;
			
			default:
				return (
					<CardSection>
						<Spinner size="large" />	
					</CardSection>
				);
		}
	}

	render() {
		return(
			<View>
				<Header headerText='Authentication'/>
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	textStyle: {
		alignSelf: 'center',
		padding: 10
	}
};

export default App;