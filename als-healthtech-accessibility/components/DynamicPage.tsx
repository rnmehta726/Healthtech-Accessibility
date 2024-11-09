// src/components/DynamicPage.tsx
import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types.ts';
import styles from '../styles/styles.ts';

const DynamicPage = ({ route, navigation }: StackScreenProps<RootStackParamList, 'DynamicPage'>) => {
  const { title, buttons } = route.params;
  const [inputText, setInputText] = useState('');
  const inputRef = useRef<TextInput | null>(null);

  const handleButtonPress = (buttonText: string) => {
    setInputText((prevText) => prevText + buttonText);
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        ref={inputRef}
        style={styles.inputField}
        placeholder="Type here..."
        value={inputText}
        onChangeText={setInputText}
      />
      {buttons.map((buttonText, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pageButton}
          onPress={() => handleButtonPress(buttonText)}
        >
          <Text style={styles.pageButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.returnButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DynamicPage;