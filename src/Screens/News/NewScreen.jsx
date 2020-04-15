import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
function NewScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <ScrollView style={{flex: 1}}>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default NewScreen;
