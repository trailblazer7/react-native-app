import { StyleProp, StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'

const Section: React.FC<{
    sectionStyles?: Object
  }> = ({ children, sectionStyles }) => {
  
    const isDarkMode = useColorScheme() === 'dark';

    return (
      <View style={{
        ...styles.sectionContainer,
        ...sectionStyles
      }}>
        {children}
      </View>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});

export default Section