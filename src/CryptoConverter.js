import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './ConverterStyles';

class CryptoConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
      coin: "",
      currencySwap: false,
      isPressed: false,
      refreshing: false,
      seed: 1,
      page: 1,
      isFetching: false,
      activeCoinIndex: 0
    }
    this.onRefresh = this.onRefresh.bind(this)
    // this.changeCoin = this.changeCoin.bind(this)
  }

  componentDidMount() {
    this.fetchData();
    this.getData();
  }

  onRefresh() {
    //this.setState({ isFetching: true });
    //this.fetchData();
    Alert.alert("hei")
    console.warn('hey')
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('coinData');
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      }
    } catch (e) {
      console.log(e);
    }
  }

  fetchData = async () => {
    const { page, seed } = this.state
    const response = await fetch('https://api.coinlore.com/api/tickers/?start=0&limit=10');
    const json = await response.json();
    this.setState({ data: json.data, isFetching: false });
    AsyncStorage.setItem('coinData', JSON.stringify(json.data))
  };

  // handleClick = (cointToConvert) => {
  //   this.setState({ coin: cointToConvert })
  //AsyncStorage.setItem('coinData', cointToConvert)
  // };

  handleChangeText = (typedText) => {
    this.setState({ text: typedText });
  }

  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
      seed: this.state.seed + 1,
    }, () => {
      this.fetchData()
    })
  }

  changeCoin(index) {
    const updateCoin = this.data;
    this.setState({
      activeCoinIndex: index
    })
  }

  render() {
    coin = () => {
      this.setState.item
    }
    const activeCoin = this.state.data[this.state.activeCoinIndex] || {}
    let activeCoinSymbol = activeCoin.symbol
    const activeCoinPriceUsd = activeCoin.price_usd
    return (
      <SafeAreaView style={styles.cryptoConverterView}
      >
        <ScrollView>
          <ImageBackground
            source={require('./assets/milkyWay.jpg')}
            style={styles.imageBackgroundForConverter}
          >
            <Text
              style={styles.cryptoConverterHeadingText}
            >
              Choose cryptocurrency below.
                {"\n"}
              {this.renderItem}
            </Text>
            <View style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              //width: '80%',
              marginLeft: 35,
              marginRight: 20
            }}>
              <Text style={styles.coinToConvertArea}>
                {this.state.isPressed ? 'USD' : activeCoinSymbol}
              </Text>
              <TouchableOpacity onPress={() => this.setState({ isPressed: !this.state.isPressed })}>
                <Image style={{ width: 30, height: 30, tintColor: 'white', marginLeft: 20, marginRight: 20 }}
                  source={require('./assets/swap.png')}
                />
              </TouchableOpacity>
              <Text style={styles.coinToConvertWithUsd}>
                {this.state.isPressed ? activeCoinSymbol : 'USD'}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row'
              }}>

              <TextInput
                style={styles.amountTextInput}
                placeholder="Amount..."
                placeholderTextColor="white"
                onChangeText={this.handleChangeText}
                value={this.state.text}
              />
              <Text
                style={styles.cryptoConverterSumText}
                allowFontScaling
              >
                {this.state.isPressed ? (parseFloat((this.state.text) / activeCoinPriceUsd).toFixed(2)) : (parseFloat((this.state.text) * activeCoinPriceUsd).toFixed(2))}
              </Text>
            </View>
          </ImageBackground>
          <View>

            <View
              style={styles.headingForCriptoPrices}
            >
              <Text style={styles.textForHeading}
              >
                coin
              </Text>
              <Text style={styles.textForHeading}
              >
                price change 24h
              </Text>
              <Text style={styles.textForHeading}
              >
                price
              </Text>
            </View>
            <ImageBackground
              source={require('./assets/exchangeBg.jpg')}
              style={styles.imageBackgroundForPrices}
            >
              <View style={{ marginTop: 30 }}
              >
              </View>
              <FlatList
                data={this.state.data}
                onRefresh={() => this.onRefresh()}
                //refreshing={this.state.isFetching}
                keyExtractor={(x, i) => i}
                renderItem={({ item: rowData, index }) =>
                  < TouchableOpacity onPress={() => this.changeCoin(index)}>
                    <View
                      style={styles.cryptoExchangeSymbolView}
                    >
                      <Text
                        style={styles.cryptoExchangeSymbolText}
                      >
                        {`${rowData.symbol}`}
                      </Text>
                      <View
                        style={styles.cryptoExchangePriceChangelView}
                      >
                        <Text
                          style={[
                            rowData.percent_change_24h > 0 ? styles.green : styles.red,
                            styles.percentChange
                          ]}
                        >
                          {rowData.percent_change_24h}%
                    </Text>
                      </View>
                      <Text
                        style={styles.cryptoExchangePriceText}
                      >
                        {rowData.price_usd}$
                    </Text>
                    </View>
                  </TouchableOpacity>}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView >
    );
  }
}
export default CryptoConverter;
