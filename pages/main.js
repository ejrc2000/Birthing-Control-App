
// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  StatusBar,
  Button
} from 'react-native';
import { ApplicationProvider, Text, Avatar, Input  } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

const Main = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <HomeScreen />
  </ApplicationProvider>
)

const HomeScreen = () => {
  let listViewRef;
  const [dataSource, setDataSource] = useState([
    { id: 1, title: 'Animal' },
    { id: 2, title: 'Animal'},
    { id: 3, title: 'Animal' },
    { id: 4, title: 'Animal' },
    { id: 5, title: 'Animal' },
    { id: 6, title: 'Animal' },
    { id: 7, title: 'Animal' },
    { id: 8, title: 'Animal' },
    { id: 9, title: 'Animal' },
    { id: 10, title: 'Animal' },
    { id: 11, title: 'Animal' },
    { id: 12, title: 'Animal' },
    { id: 13, title: 'Animal' },
    { id: 14, title: 'Animal' },
    { id: 15, title: 'Animal' },
  ]);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Text style={ styles.itemStyle }onPress={() => getItem(item)}>
        {item.title}
        {' - '}
        {item.id}
        </Text>
        <Avatar
          shape='round'
          source={ require('./../assets/horse.jpg') }
          size='giant'
          style={{ position: 'absolute', right: 50 }}
        />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
          borderBottomWidth: 1, 
          borderBottomColor: 'grey',
          alignSelf:'stretch'
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Going to ' + item.title+ ' ' + item.id + ' Page!');
  };

  const renderHeader = () => (
    
    <View
      style={{
        backgroundColor: '#e05d06',
        height: 70,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
      }}>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={console.log(" ")}
        status='info'
        placeholder='Search'
        style={{
          borderRadius: 25,
          borderColor: '#333',
          backgroundColor: '#fff'
        }}
        textStyle={{ color: '#000' }}
        clearButtonMode='always'
      />
    </View>
  )
  
  const renderFooter = () => (
      <View>
        <Button
        title="Register a New Device"
        onPress={() => alert('Going to New Device Page')}
        color='grey'
        /> 
      </View>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e05d06'}}>
      <StatusBar backgroundColor="grey"/>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 30,
    fontSize: 23,
    fontWeight: 'bold', 
  },
})

export default Main;
