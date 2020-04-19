import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../Themes/colors';
import fonts from '../../Themes/fonts';
import Card from '../../Components/Card/Card';
import newStore from '../../Stores/New/New';
import {observer} from 'mobx-react';

const NewScreen = observer(() => {
  const [newfeed, setNewfeed] = useState([]);
  const [offset, setOffset] = useState(0);
  const loadMore = () => {
    setOffset(offset + 9);
  };

  useEffect(() => {
    newStore.getListNews(offset).then(() => {
      let more = newfeed.concat(newStore.listNews);
      setNewfeed(more);
    });
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
            }}>
            <Text style={[styles.title]}>Latest News</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={newfeed}
            keyExtractor={({item}, index) => index.toString()}
            extraData={newfeed}
            onEndReached={() => {
              loadMore();
            }}
            onEndReachedThreshold={0.4}
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottom: {
    flex: 9,
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
