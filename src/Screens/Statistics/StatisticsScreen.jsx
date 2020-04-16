import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';

import Icon from 'react-native-vector-icons/Ionicons';
import {inject, observer} from 'mobx-react';
import accounting from 'accounting';
import AnimateNumber from 'react-native-animate-number';
const {width} = Dimensions.get('window');

@inject('statsStore')
@observer
class StatisticsScreen extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    valueInit: 0,
  };
  async componentDidMount() {
    await this.fetchDataCountry();
  }

  handleSlide = (type) => {
    let {translateX, valueInit} = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  transformNumber = (value) => {
    Animated.timing(value, {
      duration: 500,
    });
  };
  fetchData = (data) => {
    console.log(data);
  };
  fetchDataGlobal = async () => {
    if (this.state.active === 1) {
      this.props.statsStore.getDataGlobal();
    }
  };
  fetchDataCountry = async () => {
    if (this.state.active === 0) {
      this.props.statsStore.getDataCountry();
    }
  };
  render() {
    let {xTabOne, xTabTwo, translateX, active} = this.state;
    let {dataStats} = this.props.statsStore;
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
                <Animated.View
                  style={{
                    position: 'absolute',
                    width: '47%',
                    height: '80%',
                    top: 5,
                    left: 5,
                    backgroundColor: colors.white,
                    borderRadius: 40,
                    transform: [{translateX}],
                  }}
                />
                <TouchableOpacity
                  style={styles.button}
                  onLayout={(event) =>
                    this.setState({
                      xTabOne: event.nativeEvent.layout.x,
                    })
                  }
                  onPress={() =>
                    this.setState({active: 0}, () => {
                      this.handleSlide(xTabOne), this.fetchDataCountry();
                    })
                  }>
                  <Text
                    style={{
                      fontSize: fonts.sm,
                      color: active === 0 ? 'black' : colors.white,
                      fontWeight: 'bold',
                    }}>
                    My Country
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onLayout={(event) =>
                    this.setState({
                      xTabTwo: event.nativeEvent.layout.x,
                    })
                  }
                  onPress={() =>
                    this.setState({active: 1}, () => {
                      this.handleSlide(xTabTwo), this.fetchDataGlobal();
                    })
                  }>
                  <Text
                    style={{
                      fontSize: fonts.sm,
                      color: active === 1 ? 'black' : colors.white,
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
                        <AnimateNumber
                          value={dataStats.cases}
                          countBy={123456}
                          interval={5}
                        />
                        {/* {accounting.formatNumber(dataGlobal.cases)} */}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
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
                          fontSize: fonts.xl,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        <AnimateNumber
                          value={dataStats.active}
                          countBy={123456}
                          interval={5}
                          // formatter={() => {
                          //   return accounting.formatNumber(dataGlobal.cases);
                          // }}
                        />
                        {/* {accounting.formatNumber(dataGlobal.active)} */}
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
                        <AnimateNumber
                          value={dataStats.recovered}
                          countBy={100000}
                          interval={5}
                          // formatter={() => {
                          //   return accounting.formatNumber(dataGlobal.cases);
                          // }}
                        />
                        {/* {accounting.formatNumber(dataGlobal.recovered)} */}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginRight: 5,
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
                          fontSize: fonts.lg,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        <AnimateNumber
                          value={dataStats.deaths}
                          countBy={10000}
                          interval={5}
                          // formatter={() => {
                          //   return accounting.formatNumber(dataGlobal.cases);
                          // }}
                        />
                        {/* {accounting.formatNumber(dataGlobal.deaths)} */}
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
                        <AnimateNumber
                          value={dataStats.critical}
                          countBy={10000}
                          interval={5}
                          // formatter={() => {
                          //   return accounting.formatNumber(dataGlobal.cases);
                          // }}
                        />
                        {/* {accounting.formatNumber(dataGlobal.critical)} */}
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
