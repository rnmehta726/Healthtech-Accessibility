// app/components/OrientationToggle.tsx
// I don't know how to test this
import React, { useState, useEffect } from 'react';
import { View, Switch, Text } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const OrientationToggle = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  const toggleOrientation = async () => {
    if (isLandscape) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setIsLandscape((prev) => !prev);
  };

  useEffect(() => {
    // Set the initial orientation based on the device orientation
    const setInitialOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      setIsLandscape(orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT || orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    };
    setInitialOrientation();
  }, []);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
      <Text style={{ fontSize: 16, marginRight: 5 }}>Landscape</Text>
      <Switch value={isLandscape} onValueChange={toggleOrientation} />
    </View>
  );
};

export default OrientationToggle;
