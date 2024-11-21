// app/components/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { RootStackParamList } from '..';
import styles from '../styles/styles';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useFocusEffect } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const [pages, setPages] = useState<{ id: number; title: string; buttons: string[] }[]>([]);
  console.log(route);
  const { userId } = route.params;

  
  const fetchPersonas = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${userId}/fetchPersona`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseJson = await response.json();
      const formattedPersonas: { id: number; title: string; buttons: string[] }[] = [];
      if (responseJson.status === 'success') {
        let myObject: Map<string, Array<any>> = new Map(Object.entries(responseJson.personas));
        console.log(myObject.size)
        for(const personaName of myObject.keys()){
          formattedPersonas.push({id: responseJson.personas[personaName][0], title: personaName, buttons: responseJson.personas[personaName].slice(1)})
        }
        setPages((prevPages) => [...formattedPersonas]);
      } else {
        console.log('Unable to fetch personas');
      }
    } catch (error) {
      console.log('Failed to fetch personas');
      console.error(error);
    }
  };
  
  useFocusEffect(
    React.useCallback(() => {
      fetchPersonas();
    }, []) // Empty dependency array, meaning this runs every time screen comes into focus
  );

  const renderPageButton = ({ item }: { item: { id: number; title: string; buttons: string[] } }) => (
    <TouchableOpacity
      style={styles.personaButton}
      onPress={() => navigation.navigate('DynamicPage', { pageId: item.id, title: item.title, buttons: item.buttons })}
    >
      <Text style={styles.personaButtonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.homeContainer} testID="HomeScreen">
      <Text style={styles.title}>Your Personas</Text>
      <FlatList
        data={pages}
        renderItem={renderPageButton}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <TouchableOpacity
        style={styles.addPersonaButton}
        onPress={() => navigation.navigate('EditPage', {userId: userId})}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
