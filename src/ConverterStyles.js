import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  green: {
    color: '#32cd32'
  },
  red: {
    color: '#ff4500'
  },
  percentChange: {
    fontSize: 15,
    padding: 10,
    marginTop: 20
  },
  amountTextInput: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'rgba(200,200,200, 0.5)',
    borderColor: '#DDDDDD',
    color: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    fontSize: 20,
    marginTop: 5
  },
  imageBackgroundForConverter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#DDDDDD'
  },
  imageBackgroundForPrices: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: -30,
    borderWidth: 5,
    borderColor: '#DDDDDD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cryptoConverterView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  headingForCriptoPrices: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    height: 30,
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
    //width: '100%',
    marginTop: 10,
    zIndex: 5,

  },
  textForHeading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 15,
    color: 'navy',
    marginLeft: 20,
    marginRight: 0
  },
  cryptoExchangeSymbolView: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 0.5,
    marginTop: -20
  },
  cryptoExchangeSymbolText: {
    fontSize: 15,
    color: 'white',
    width: 80,
    padding: 10,
    marginTop: 20
  },
  cryptoExchangePriceChangelView: {
    width: '100%',
    fontSize: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cryptoExchangePriceText: {
    textAlign: 'right',
    fontSize: 15,
    color: 'white',
    padding: 10,
    width: 110,
    marginLeft: 10,
    marginTop: 20
  },
  cryptoConverterHeadingText: {
    fontSize: 25,
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cryptoConverterSumText: {
    fontSize: 25,
    textAlign: 'right',
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    width: 10,
    marginTop: 25,
    marginBottom: 10
  },
  coinToConvertArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: 'rgba(200,200,200, 0.2)',
    textAlign: 'center',
    borderColor: '#DDDDDD',
    color: 'white',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  coinToConvertWithUsd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: 'rgba(200,200,200, 0.1)',
    textAlign: 'center',
    borderColor: '#DDDDDD',
    color: 'white',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  }
});
