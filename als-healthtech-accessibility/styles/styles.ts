// src/styles/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 16,
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#516FC9',
      alignSelf: 'flex-start',
    },
    row: {
      justifyContent: 'space-between', // Space between columns in the grid
      marginBottom: 10, // Space between rows
    },
    personaButton: {
      backgroundColor: '#516FC9',
      width: 149,
      height: 98,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 5,
      marginBottom: 10,
    },
    personaButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    addPersonaButton: {
      backgroundColor: '#516FC9',
      width: 149,
      height: 98,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      alignSelf: 'center', // Center the add button in the layout
      position: 'absolute', // Position it at the bottom of the screen
      bottom: 30,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    input: {
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
      padding: 10,
      marginVertical: 8,
      width: '100%',
    },
    addButtonText: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    },
    inputField: {
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    saveButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 20,
      width: '100%',
    },
    saveButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    returnButton: {
      backgroundColor: '#FF5722',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 20,
      width: '80%',
    },
    returnButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default styles;
