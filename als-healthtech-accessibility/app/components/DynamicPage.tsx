// app/components/DynamicPage.tsx
import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import dynamicPageStyles from "../styles/styles";
import PersonalVoiceModule from './PersonalVoiceModule';
import * as Speech from 'expo-speech';

const checkPersonalVoice = async () => {
  const available = await PersonalVoiceModule.isPersonalVoiceAvailable();
  console.log("Personal Voice available:", available);
  return available
};

const speakWithPersonalVoice = (text: string) => {
  try {
    //await PersonalVoiceModule.speakWithPersonalVoice(text);
    Speech.speak(text);
    console.log("Speech initiated!");
  } catch (error) {
    console.error(error);
  }
};

const DynamicPage = ({
  route,
}: StackScreenProps<RootStackParamList, "DynamicPage">) => {
  const { title, buttons } = route.params;
  const [inputText, setInputText] = useState(""); // Current input text
  const [inputHistory, setInputHistory] = useState<string[]>([]); // History of saved inputs
  const inputRef = useRef<TextInput>(null);

  // Append button text to the input field
  const handleButtonPress = (buttonText: string) => {
    setInputText((prevText) => prevText + buttonText);
    inputRef.current?.focus();
  };

  // Undo functionality to revert to the previous entry in history
  const handleUndo = () => {
    if (inputHistory.length > 0) {
      const previousInput = inputHistory[inputHistory.length - 1] || "";
      setInputText(previousInput); // Restore the last saved input
      setInputHistory(inputHistory.slice(0, -1)); // Remove the last entry from history
    }
  };

  // Save the current text to history and clear the input field
  const handleEnter = async () => {
    if (inputText) {
      setInputHistory((prevHistory) => [...prevHistory, inputText]); // Save current text
      setInputText(""); // Clear input field
      speakWithPersonalVoice(inputText);
      // const available = await checkPersonalVoice();
      // if(available){
      //   speakWithPersonalVoice(inputText);
      // }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={200}
    >
      <View style={dynamicPageStyles.container}>
        <Text style={dynamicPageStyles.title}>{title}</Text>

        {/* Buttons Section */}
        <ScrollView contentContainerStyle={dynamicPageStyles.buttonsContainer}>
          {buttons.map((buttonText, index) => (
            <TouchableOpacity
              key={index}
              style={dynamicPageStyles.largeButton}
              onPress={() => handleButtonPress(buttonText)}
            >
              <Text style={dynamicPageStyles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Input Field and Buttons */}
        <View style={dynamicPageStyles.inputContainer}>
          <TextInput
            ref={inputRef}
            style={dynamicPageStyles.inputField}
            placeholder="Type here..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity
            onPress={handleUndo}
            style={dynamicPageStyles.undoButton}
          >
            <Text style={dynamicPageStyles.undoButtonText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleEnter}
            style={dynamicPageStyles.enterButton}
          >
            <Text style={dynamicPageStyles.enterButtonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DynamicPage;
