// app/styles/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 16,
      backgroundColor: '#f8f8f8',
    },
    row: {
      marginBottom: 10, // Space between rows
    },
    personaButton: {
      backgroundColor: '#516FC9',
      width: 149,
      height: 98,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10, // curves button
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
    addButton: {
      backgroundColor: '#516FC9',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#516FC9',
      textAlign: 'center',
    },

    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f8f8f8',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    orientationButton: {
      padding: 10,
    },
    orientationButtonText: {
      fontSize: 24,
      color: '#000',
    },
    buttonsContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    largeButton: {
      backgroundColor: '#516FC9',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 12,
      marginVertical: 10,
      width: '90%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#ddd',
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: '#ffffff',
    },
    inputField: {
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
      padding: 12,
      flex: 1,
      marginRight: 10,
    },
    undoButton: {
      backgroundColor: '#000',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight: 10,
    },
    undoButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    returnButton: {
      backgroundColor: '#FF5722',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    returnButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },


  });

export default styles;
