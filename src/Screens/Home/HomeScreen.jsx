import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';

import AvoidContact from '../../Assets/Svgs/XMLID80.svg';
import CleanHand from '../../Assets/Svgs/XMLID15.svg';
import Facemask from '../../Assets/Svgs/Group.svg';
import Banner from '../../Assets/Svgs/Group32.svg';

const screenWidth = Dimensions.get('window').width;

function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundColor}}>
      <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
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
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  borderColor: 'transparent',
                  backgroundColor: colors.white,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>USA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text
                style={[styles.covid, {fontSize: fonts.lg, marginBottom: 20}]}>
                Are you feeling stick
              </Text>
              <Text
                style={[
                  styles.covid,
                  {fontSize: fonts.sm, fontWeight: 'normal'},
                ]}>
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>
              <View style={styles.action}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: colors.redCallNow, marginRight: 10},
                  ]}>
                  <Icon name="ios-call" size={25} color={colors.white} />
                  <Text
                    style={{
                      fontSize: fonts.sm,
                      color: colors.white,
                    }}>
                    Call Now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: colors.blueSendSMS, marginLeft: 10},
                  ]}>
                  <Feather
                    name="message-circle"
                    size={25}
                    color={colors.white}
                  />
                  <Text
                    style={{
                      fontSize: fonts.sm,
                      color: colors.white,
                    }}>
                    Send SMS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.prevent}>
              <Text style={styles.textPrevent}>Preventation</Text>
              <View style={styles.contentPrevent}>
                <View style={styles.column}>
                  <AvoidContact width={90} height={90} />
                  <Text style={styles.textColumn}>Avoid close contact</Text>
                </View>
                <View style={styles.column}>
                  <CleanHand width={90} height={90} />
                  <Text style={styles.textColumn}>Clean your hand often</Text>
                </View>
                <View style={styles.column}>
                  <Facemask width={90} height={90} />
                  <Text style={styles.textColumn}>Wear a facemark</Text>
                </View>
              </View>
            </View>
            <View style={styles.banner}>
              <Banner width={screenWidth - 40} height={200} />
            </View>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    paddingLeft: 24,
    paddingTop: 20,
    paddingRight: 24,
  },
  bottom: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
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
    marginBottom: 20,
    marginTop: 20,
  },
  covid: {
    fontSize: fonts.xl,
    color: colors.white,
    fontWeight: 'bold',
  },
  content: {
    flex: 3,
  },
  action: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  prevent: {
    flex: 1,
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrevent: {
    fontSize: fonts.lg,
    fontWeight: 'bold',
  },
  contentPrevent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  textColumn: {
    fontSize: fonts.sm,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
