import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  Share,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './NewsStyles';


class CryptoNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      seed: 1,
      page: 1,
      isFetching: false,
    };
    this.onRefresh = this.onRefresh.bind(this);
    this.shareMessage = this.shareMessage.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.getData();
  }

  onRefresh() {
    this.setState({ isFetching: true });
    //this.setState({ this.fetchData });
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('newsData');
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleRefresh = async () => {
    this.setState({
      page: 1,
      refreshing: true,
      seed: this.state.seed + 1,
    }, () => {
      this.fetchData()
    })
  }

  fetchData = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6266e3bf1243402c97843cd85efd7b25');
    const json = await response.json();
    this.setState({ data: json.articles, isFetching: false });
    AsyncStorage.setItem('newsData', JSON.stringify(json.articles))
  };

  shareMessage() {
    Share.share({ message: 'Check Out these News!' }).then(this.showResult);
  }

  render() {
    const uri = this.state.data[this.state.activeLinkIndex] || {}
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5'
        }}
      >
        <ScrollView>
          <View>
            <FlatList
              data={this.state.data}
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.isFetching}
              keyExtractor={(x, i) => i}
              // onRefresh={() => this.onRefresh()}
              renderItem={({ item: rowData }) => (
                <TouchableOpacity onPress={() => Linking.openURL(rowData.url)}>
                  <View
                    style={styles.newsCard}
                  >
                    <Image
                      source={{ uri: rowData.urlToImage }}
                      style={styles.newsImage}
                    />
                    <Text
                      style={styles.newsTitle}
                    >
                      {rowData.title}
                    </Text>
                    <View style={styles.newsView}
                    >
                      <Text
                        style={styles.newsText}
                      >
                        {rowData.description}
                      </Text>
                    </View>
                    <View style={styles.newsAuthorsView}>

                      <Text style={styles.newsAuthors}>
                        {rowData.source.name} {' ✪ '} {rowData.publishedAt.substring(0, 10)}
                      </Text>
                      <View style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}>
                        <ScrollView>
                          <TouchableOpacity style={styles.shareNewsOpacity} onPress={this.shareMessage}>
                            <View style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row'
                            }}>
                              <Text style={{ padding: 10, color: 'white', fontWeight: 'bold' }}>
                                Share
                            </Text>
                              <Image
                                source={{ uri: 'https://static.thenounproject.com/png/55611-200.png' }}
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                              />
                            </View>
                          </TouchableOpacity>
                        </ ScrollView>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}
export default CryptoNews;
