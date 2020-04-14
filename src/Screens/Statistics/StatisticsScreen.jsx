import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function StatisticsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>This is statistics screen</Text>
      </View>
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
export default StatisticsScreen;
