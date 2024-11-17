// app/components/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import styles from '../styles/styles';

const HomeScreen = ({ navigation, route }: StackScreenProps<RootStackParamList, 'Home'>) => {
  const [pages, setPages] = useState<{ id: number; title: string; buttons: string[] }[]>([]);

  useEffect(() => {
    if (route.params?.newPage) {
      setPages((prevPages) => {
        const pageExists = prevPages.some((page) => page.id === route.params?.newPage?.id);
        return pageExists ? prevPages : [...prevPages, route.params.newPage!];
      });
    }
  }, [route.params?.newPage]);

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
        onPress={() => navigation.navigate('EditPage')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
