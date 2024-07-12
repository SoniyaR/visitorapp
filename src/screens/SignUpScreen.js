import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { Dropdown } from 'react-native-element-dropdown';

const SignupScreen = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [flatnum, setFlatnum] = useState('');

const handleSignupSubmit = () => {
//api call, and if success proceed to dahsboard
//or else show respective error in signup page
navigation.navigate('Dashboard');
}

return (
<View style={styles.container}>
<Text style={styles.title}>Signup</Text>
<TextInput
style={styles.input}
placeholder="Mobile Number"
value={username}
onChangeText={setUsername}
/>
<TextInput
style={styles.input}
placeholder="First Name"
value={firstname}
onChangeText={setFirstname}
/>
<TextInput
style={styles.input}
placeholder="Last Name"
value={lastname}
onChangeText={setLastname}
/>
<TextInput
style={styles.input}
placeholder="Setup Password"
value={password}
onChangeText={setPassword}
secureTextEntry
/>

<Button title="Submit for approval" onPress={handleSignupSubmit}/>
</View>
);
};

const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 paddingHorizontal: 16,
},
title: {
 fontSize: 24,
 marginBottom: 24,
},
input: {
 height: 40,
 borderColor: 'gray',
 borderWidth: 1,
 marginBottom: 12,
 paddingHorizontal: 8,
},
});

export default SignupScreen;