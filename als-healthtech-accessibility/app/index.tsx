import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// define the types for the navigation stack
type RootStackParamList = {
  Home: undefined;
  EditPage: undefined;
  DynamicPage: { pageId: number; title: string; buttons: string[] };
};

const Stack = createStackNavigator<RootStackParamList>();

// dynamicPage Component - Displays the customized page with "Return to Home" button
const DynamicPage = ({ route, navigation }: StackScreenProps<RootStackParamList, 'DynamicPage'>) => {
  const { title, buttons } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {buttons.map((buttonText, index) => (
        <TouchableOpacity key={index} style={styles.pageButton}>
          <Text style={styles.pageButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.returnButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// editPage Component - allows user to define title and button labels for a new page
const EditPage = ({ navigation, route }: StackScreenProps<RootStackParamList, 'EditPage'>) => {
  const [title, setTitle] = useState('');
  const [buttons, setButtons] = useState(Array(6).fill(''));

  const handleButtonChange = (index: number, text: string) => {
    const newButtons = [...buttons];
    newButtons[index] = text;
    setButtons(newButtons);
  };

  const savePage = () => {
    const pageId = Date.now(); // generate a new page ID
    const newPage = { id: pageId, title, buttons };

    // navigate to Home with new page data
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

// homeScreen Component - displays list of pages and the button to add a new page
const HomeScreen = ({ navigation, route }: StackScreenProps<RootStackParamList, 'Home'>) => {
  const [pages, setPages] = useState<{ id: number; title: string; buttons: string[] }[]>([]);

  // if route params contain a newPage, add it to the list of pages
  React.useEffect(() => {
    if (route.params?.newPage) {
      setPages((prevPages) => [...prevPages, route.params.newPage]);
    }
  }, [route.params?.newPage]);

  const renderPageButton = ({ item }: { item: { id: number; title: string; buttons: string[] } }) => (
    <TouchableOpacity
      style={styles.pageButton}
      onPress={() => navigation.navigate('DynamicPage', { pageId: item.id, title: item.title, buttons: item.buttons })}
    >
      <Text style={styles.pageButtonText}> {item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persona Page</Text>
      <FlatList
        data={pages}
        renderItem={renderPageButton}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('EditPage')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

// app component - sets up the navigation stack
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="DynamicPage" component={DynamicPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pageButton: {
    backgroundColor: '#007BFF',
    padding: 30,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  pageButtonText: {
    color: 'white',
    fontSize: 18,
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
