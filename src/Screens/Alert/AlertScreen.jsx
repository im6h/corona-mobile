import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {observer} from 'mobx-react';
import colors from '../../Themes/colors';
import statsStore from '../../Stores/Stats/Stats';
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from '../../Themes/fonts';
import Symptom from '../../Assets/Svgs/symptom.svg';
import Covid19 from '../../Assets/Svgs/Covid19.svg';
const screenWidth = Dimensions.get('window').width;

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
            <Text style={[styles.textTitle, {fontWeight: 'bold'}]}>
              What is COVID-19?
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.content}>
            <Text
              style={[
                styles.textTitle,
                {
                  fontWeight: 'bold',
                  color: colors.redCallNow,
                  marginBottom: 5,
                },
              ]}>
              COVID-19
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 5,
                paddingRight: 5,
                borderWidth: 0.4,
                borderRadius: 10,
                marginBottom: 20,
                borderColor: 'transparent',
                backgroundColor: '#F9FAFC',
              }}>
              <Covid19 width={90} height={90} />
              <Text
                style={[
                  styles.textTitle,
                  {
                    fontSize: fonts.sm,
                    color: 'black',
                    marginBottom: 5,
                    width: '60%',
                  },
                ]}>
                Coronavirus disease 2019 (COVID-19) is an infectious disease
                caused by severe acute respiratory syndrome coronavirus 2
                (SARS-CoV-2).
              </Text>
            </View>

            <Text
              style={[
                styles.textTitle,
                {fontWeight: 'bold', color: colors.redCallNow, marginBottom: 5},
              ]}>
              COMMON
            </Text>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 5,
                paddingRight: 5,
                borderWidth: 0.4,
                borderRadius: 10,
                borderColor: 'transparent',
                backgroundColor: '#F9FAFC',
              }}>
              <Symptom width={90} height={90} />
              <Text
                style={[
                  styles.textTitle,
                  {
                    fontSize: fonts.sm,
                    color: 'black',
                    marginBottom: 5,
                    width: '60%',
                  },
                ]}>
                Common symptoms include fever, cough, and shortness of breath.
                Other symptoms may include fatigue, muscle pain, diarrhea, sore
                throat, loss of smell, and abdominal pain.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2,
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
  },
  bottom: {
    flex: 4,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    marginTop: 20,
    justifyContent: 'center',
  },
});

export default AlerScreen;
