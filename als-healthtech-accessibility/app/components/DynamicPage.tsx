// app/components/DynamicPage.tsx
import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import dynamicPageStyles from "../styles/styles";
import * as ScreenOrientation from "expo-screen-orientation";

const DynamicPage = ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "DynamicPage">) => {
  const { title, buttons } = route.params;
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<TextInput>(null);

  // Handle button press to add text to input
  const handleButtonPress = (buttonText: string) => {
    setInputText((prevText) => prevText + buttonText);
    inputRef.current?.focus();
  };

  // Clear the last entry
  const handleUndo = () => {
    // Need to mplement undo action
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={200}
    >
      <View style={dynamicPageStyles.container}>
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

        {/* Input Field and Undo Button at the Bottom */}
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
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DynamicPage;
