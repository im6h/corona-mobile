import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
function HomeScreen() {
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
            <Text style={styles.covid}>Covid-19</Text>
            <TouchableHighlight>
              <Text>USA</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}></View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    paddingLeft: 24,
    paddingRight: 24,
  },
  bottom: {
    flex: 1,
  },
  toolBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  covid: {
    fontSize: fonts.xl,
    color: colors.white,
    fontWeight: 'bold',
  },
  content: {
    flex: 4,
  },
});

export default HomeScreen;
