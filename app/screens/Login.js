import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const handlePressOutside = () => {
	Keyboard.dismiss();
}
export default function Login() {
	const navigation = useNavigation();
  return (
	<TouchableWithoutFeedback onPress={handlePressOutside}>
		<View style={{flex:1}}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<StatusBar style="light"/>
				<Image style={styles.imageBg} source={require('../../assets/images/background.png')}></Image>

				{/* add lights images */}
				<View style={styles.lightsContainer}>
					<Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(5)} style={styles.lightImg} source={require('../../assets/images/light.png')}/>
					<Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(5)} style={styles.lightImg2} source={require('../../assets/images/light.png')}/>
				</View>

				{/* Title and form */}
				<View style={styles.formContainer}>
					{/* Title */}
					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
						<Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.title}>
							Login
						</Animated.Text>
					</View>
					{/* Form */}
					<View style={styles.form}>
						<Animated.View entering={FadeInDown.duration(1000).springify()} style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: 20,borderRadius: 20, width: '100%'}}>
							<TextInput placeholder='Email' placeholderTextColor={'grey'} textContentType='oneTimeCode'/>
						</Animated.View>
						<Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: 20,borderRadius: 20, width: '100%', marginBottom: 8}}>
							<TextInput placeholder='Password' placeholderTextColor={'grey'} secureTextEntry={true} />
						</Animated.View>
						<Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={{width: '100%'}}>
							<TouchableOpacity style={{width: '100%', backgroundColor: '#39BEF7', padding: 15, borderRadius: 20, marginBottom: 8}}>
								<Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center'}}>
									Login
								</Text>
							</TouchableOpacity>
						</Animated.View>
						<Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={{flexDirection: 'row', justifyContent: 'center'}}>
							<Text>Don't have an account? </Text>
							<TouchableOpacity onPress={() => navigation.push('SignUp')}>
								<Text style={{color: '#0D82BF'}}>SignUp</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
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