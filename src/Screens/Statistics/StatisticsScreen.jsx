import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
function StatisticsScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      {/* <ScrollView style={{flex: 1, backgroundColor: colors.white}}> */}
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
            <Text style={styles.covid}>Statistics</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.select}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    fontSize: fonts.sm,
                    fontWeight: 'bold',
                  }}>
                  My Country
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'transparent'}]}>
                <Text
                  style={{
                    fontSize: fonts.sm,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Global
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detail}>
              <View style={styles.time}>
                <Text
                  style={{
                    fontSize: fonts.sm,
                    color: colors.white,
                    fontWeight: 'bold',
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: fonts.sm,
                    color: colors.grayText,
                    fontWeight: 'bold',
                  }}>
                  Today
                </Text>
                <Text
                  style={{
                    fontSize: fonts.sm,
                    color: colors.grayText,
                    fontWeight: 'bold',
                  }}>
                  Yesterday
                </Text>
              </View>
              <View style={styles.data}>
                <View style={styles.rowOne}>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      backgroundColor: colors.orangeAffect,
                      borderRadius: 5,
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: fonts.sm,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      Affected
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.xl,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      336,851
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      backgroundColor: colors.redDeaths,
                      borderRadius: 5,
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: fonts.sm,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      Deaths
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.xl,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      9,620
                    </Text>
                  </View>
                </View>
                <View style={styles.rowTwo}>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      backgroundColor: colors.greenRecovered,
                      borderRadius: 5,
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: fonts.sm,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      Recovered
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.lg,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      336,851
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      marginLeft: 5,
                      backgroundColor: colors.blueActive,
                      borderRadius: 5,
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: fonts.sm,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      Active
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.lg,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      336,851
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      backgroundColor: colors.violetSerious,
                      borderRadius: 5,
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: fonts.sm,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      Serious
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.lg,
                        color: colors.white,
                        fontWeight: 'bold',
                      }}>
                      336,851
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.textStatis}>Chart</Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  top: {
    flex: 2,
    justifyContent: 'space-around',
    backgroundColor: colors.backgroundColor,
    paddingLeft: 24,
    paddingRight: 24,
  },
  bottom: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    paddingTop: 20,
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
  },
  content: {
    flex: 5,
  },
  covid: {
    fontSize: fonts.xl,
    color: colors.white,
    fontWeight: 'bold',
  },
  textStatis: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  select: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.blueDailyNewCase,
    borderRadius: 40,
  },
  detail: {
    flex: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  data: {
    flex: 4,
  },
  rowOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  rowTwo: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default StatisticsScreen;
