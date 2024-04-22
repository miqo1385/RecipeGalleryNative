// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './Gallery';

export default function App() {
  return (
    <Gallery styles={styles.container}></Gallery>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
