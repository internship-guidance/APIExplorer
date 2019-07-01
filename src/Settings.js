import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, Alert, Share } from 'react-native';

//TODO: crypto-USD maiņa konverterī, news pielāgot smukāk, pielikt asincStorage ar last updated, pielikt ikonas navigation sadaļā


import styles from './ConverterStyles';
// import DashboardScreen from './DashboardScreen.js';
// import CryptoConverter from './CryptoConverter.js';
// import CryptoNews from './CryptoNews.js';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.shareMessage = this.shareMessage.bind(this);
    this.state = {
      text: "",
    }
  }

  handleChangeText = (typedText) => {
    this.setState({ text: typedText });
  }

  shareMessage() {
    Share.share({ message: 'Check Out this awesome App! ' }).then(this.showResult);
  }

  _handlePress() {
    Alert.alert(`Your email: (${this.state.text}) is recieved`)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Subscribe!</Text>
        <ScrollView>
          <View >
            <ImageBackground
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'
              }}
              style={styles.imageBackgroundForConverter}
            >
              <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <Text style={{ padding: 10, color: 'white' }}>
                  Enter your e-mail adress to get latest news about Crypto!
          </Text>
                <TextInput
                  style={styles.emailInput}
                  placeholder="Enter your email..."
                  placeholderTextColor="white"
                  onChangeText={this.handleChangeText}
                  value={this.state.text}
                />
              </View>

              <View style={{
                marginTop: 5,
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
                <TouchableOpacity style={{
                  height: 30,
                  backgroundColor: 'green', flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }} onPress={() => this._handlePress()}>
                  <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>
                    subscribe!
                </Text>
                </TouchableOpacity>

              </View>
            </ImageBackground>

          </View>
        </ ScrollView>

        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Share with friends!</Text>
        <ScrollView>
          <TouchableOpacity style={{ backgroundColor: 'green', }} onPress={this.shareMessage}>
            <View >
              <Text style={{ padding: 10, color: 'white', fontWeight: 'bold' }}>
                Share this app!
            </Text>
            </View>
          </TouchableOpacity>
        </ ScrollView>

        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Terms and privacy</Text>
        <ScrollView>
          <View >
            <Text style={{ padding: 10 }}>
              Phasellus pharetra nibh a erat pharetra, pharetra luctus odio sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut posuere massa sed erat ullamcorper, et rhoncus leo viverra. Aliquam aliquam orci vel augue rhoncus, a mollis mauris vehicula. Aliquam viverra, lectus in iaculis lacinia, ante libero bibendum arcu, eget lobortis risus lectus in turpis. Aenean commodo magna eu enim scelerisque fringilla. Mauris posuere eros et nulla auctor pellentesque. Suspendisse malesuada tortor in sapien suscipit efficitur.
          </Text>
          </View>
        </ ScrollView>

      </View>
    );
  }
}
export default Settings;
