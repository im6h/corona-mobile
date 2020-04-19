import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
import Card from '../../Components/Card/Card';
import newStore from '../../Stores/New/New';
import {observer} from 'mobx-react';

const NewScreen = observer(() => {
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const fetchData = () => {
    setOffset(offset + 9);
  };
  useEffect(() => {
    newStore.getListNews(offset);
    setNews(newStore.listNews);
  }, []);
  useEffect(() => {
    newStore.getListNews(offset);
    let more = news.concat(newStore.listNews);
    setNews(more);
  }, [offset]);
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
          <View
            style={{
              flex: 1,
              marginTop: 20,
            }}>
            <Text style={[styles.title]}>Latest News</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={news}
            keyExtractor={({item}, index) => index.toString()}
            extraData={news.length > 0 ? news : newStore.listNews}
            onEndReached={() => {
              fetchData();
            }}
            renderItem={({item}) => {
              return <Card item={item} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
  },
  bottom: {
    flex: 5,
  },
  toolBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fonts.lg,
    color: colors.white,
    fontWeight: 'bold',
  },
});
export default NewScreen;
