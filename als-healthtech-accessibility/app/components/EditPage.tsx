// src/components/EditPage.tsx
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types.ts';
import styles from '../styles/styles.ts';

const EditPage = ({ navigation }: StackScreenProps<RootStackParamList, 'EditPage'>) => {
  const [title, setTitle] = useState('');
  const [buttons, setButtons] = useState(Array(6).fill(''));

  const handleButtonChange = (index: number, text: string) => {
    const newButtons = [...buttons];
    newButtons[index] = text;
    setButtons(newButtons);
  };

  const savePage = () => {
    const pageId = Date.now();
    const newPage = { id: pageId, title, buttons };
    navigation.navigate('Home', { newPage });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Page Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Button Labels:</Text>
      {buttons.map((button, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Button ${index + 1} text`}
          value={button}
          onChangeText={(text) => handleButtonChange(index, text)}
        />
      ))}
      <TouchableOpacity style={styles.saveButton} onPress={savePage}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPage;
