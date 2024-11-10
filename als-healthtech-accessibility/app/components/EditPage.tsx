// src/components/EditPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import styles from '../styles/styles';

const MAX_BUTTONS = 20; // Maximum limit for buttons

const EditPage = ({ navigation }: StackScreenProps<RootStackParamList, 'EditPage'>) => {
  const [title, setTitle] = useState(''); // Title of the page
  const [buttons, setButtons] = useState<string[]>([]); // Dynamic list of button labels

  // Add a new button with an empty label
  const addNewButton = () => {
    if (buttons.length >= MAX_BUTTONS) {
      Alert.alert("Limit Reached", "You can only add up to 20 buttons.");
      return;
    }
    setButtons([...buttons, '']);
  };

  // Handle text change for each button's label
  const handleButtonChange = (index: number, text: string) => {
    const updatedButtons = [...buttons];
    updatedButtons[index] = text;
    setButtons(updatedButtons);
  };

  // Save the page with title and buttons
  const savePage = () => {
    const pageId = Date.now();
    const newPage = { id: pageId, title, buttons };
    navigation.navigate('Home', { newPage });
  };

  // Render each button input field in the list
  const renderButtonInput = ({ item, index }: { item: string; index: number }) => (
    <TextInput
      key={index}
      style={styles.input} // Reuse the input style
      placeholder={`Phrase ${index + 1} text`}
      value={item}
      onChangeText={(text) => handleButtonChange(index, text)}
    />
  );

  return (
    <View style={styles.container}>
      {/* Title Input */}
      <Text style={styles.label}>Persona Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Persona Title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Dynamic Button Inputs */}
      <Text style={styles.label}>Saved Phrases:</Text>
      <FlatList
        data={buttons}
        renderItem={renderButtonInput}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Add New Button */}
      <TouchableOpacity style={styles.addButton} onPress={addNewButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Save Page Button */}
      <TouchableOpacity style={styles.saveButton} onPress={savePage}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPage;
