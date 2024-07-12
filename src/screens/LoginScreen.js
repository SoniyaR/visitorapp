import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigation = useNavigation();

const handleLogin = async () => {
    setError('');

    const loginApiCall = (username, password) => {
       return new Promise((resolve, reject) => {
         // Simulate a successful login for 'user' with password 'pass'
         setTimeout(() => {
           if (username === 'user' && password === 'pass') {
             resolve({ success: true });
           } else {
             resolve({ success: false, message: 'Incorrect username or password' });
           }
         }, 1000);
       });
    };
    try {
         const response = await loginApiCall(username, password);
         if (response.success) {
              await AsyncStorage.setItem('userToken', 'some-token'); // Save the token or a flag
                     navigation.reset({
                       index: 0,
                       routes: [{ name: 'Dashboard' }],
                     });
         } else {
             setError(response.message);
         }
    } catch (error) {
        Alert.alert('Error', 'Something went wrong. Please try again.');
    }
};

const handleSignup = () => {
 navigation.navigate('SignUp');
}

return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Login" onPress={handleLogin} />
        <Button title="Sign Up" onPress={() => {handleSignup}} />
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
 textAlign: 'center',
},
input: {
 height: 40,
 borderColor: 'gray',
 borderWidth: 1,
 marginBottom: 12,
 paddingHorizontal: 8,
},
error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default LoginScreen;