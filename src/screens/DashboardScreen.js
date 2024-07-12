import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

const navigation = useNavigation();

const visitors = [
  { id: '1', name: 'Visitor 1' },
  { id: '2', name: 'Visitor 2' },
];
useLayoutEffect(() => {
  navigation.setOptions({
    headerLeft: () => null,  // This removes the back button
  });
}, [navigation]);

return (
<View style={styles.container}>
 <Text style={styles.title}>Dashboard</Text>
 <View style={styles.cardContainer}>
   <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Module1')}>
<Text style={styles.cardTitle}>Module 1</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Module2')}>
<Text style={styles.cardTitle}>Module 2</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Module3')}>
<Text style={styles.cardTitle}>Module 3</Text>
   </TouchableOpacity>
   {/* Add more cards as needed */}
 </View>
    </View>

);
};

   const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
title: {
  fontSize: 24,
  marginBottom: 16,
},
card: {
 backgroundColor: '#fff',
padding: 20,
marginVertical: 8,
borderRadius: 8,
width: '48%',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 8,
elevation: 3,
},
cardText: {
  fontSize: 18,
},
cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
   });

export default DashboardScreen;