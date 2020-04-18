import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import colors from '../../Themes/colors';
import statsStore from '../../Stores/Stats/Stats';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../../Themes/fonts';

const AlerScreen = observer(() => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.toolBar}>
            <Icon name="ios-menu" size={27} color={colors.white} />
            <Icon
              name="ios-notifications-outline"
              size={27}
              color={colors.white}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Alert</Text>
          </View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
  },
  toolBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 2,
  },
  textTitle: {
    fontSize: fonts.xl,
    color: colors.white,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default AlerScreen;
