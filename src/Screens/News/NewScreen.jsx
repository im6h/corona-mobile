import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
function NewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is new screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewScreen;
