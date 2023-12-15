import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const handlePressOutside = () => {
	Keyboard.dismiss();
}

export default function Login() {
  return (
	<TouchableWithoutFeedback onPress={handlePressOutside}>
		<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={styles.container}
		>
			<View style={styles.container}>
				<StatusBar style="light"/>
				<Image style={styles.imageBg} source={require('../../assets/images/background.png')}></Image>

				{/* add lights images */}
				<View style={styles.lightsContainer}>
					<Image style={styles.lightImg} source={require('../../assets/images/light.png')}/>
					<Image style={styles.lightImg2} source={require('../../assets/images/light.png')}/>
				</View>

				{/* Tile and form */}
				<View style={styles.formContainer}>
					{/* Title */}
					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
						<Text style={styles.title}>
							Login
						</Text>
					</View>
					{/* Form */}
					<View style={styles.form}>
						<View style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: 20,borderRadius: 20, width: '100%'}}>
							<TextInput placeholder='Email' placeholderTextColor={'grey'} />
						</View>
						<View style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: 20,borderRadius: 20, width: '100%', marginBottom: 8}}>
							<TextInput placeholder='Password' placeholderTextColor={'grey'} secureTextEntry />
						</View>
						<View style={{width: '100%'}}>
							<TouchableOpacity style={{width: '100%', backgroundColor: '#39BEF7', padding: 15, borderRadius: 20, marginBottom: 8}}>
								<Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center'}}>
									Login
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'center'}}>
							<Text>Don't have an account? </Text>
							<TouchableOpacity>
								<Text style={{color: '#0D82BF'}}>SignUp</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: '100%',
		width: '100%'
	},
	imageBg: {
		height: '100%',
		width: '100%',
		position: 'absolute'
	},
	lightsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		position: 'absolute'
	},
	lightImg: {
		height: 225,
		width: 90,
	},
	lightImg2: {
		height: 160,
		width: 65,
	},
	formContainer: {
		height: '100%',
		width: '100%',
		flex: 1,
		justifyContent: 'space-around',
		paddingTop: 40,
		paddingBottom: 10
	},
	title: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 46,
	},
	form: {
		flex: 1,
		alignItems: 'center',
		gap: 16,
		marginHorizontal: 16,
		marginVertical: 16
	},
});