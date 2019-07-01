import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  newsCard: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: "black",
  },
  newsTitle: {
    fontSize: 25,
    padding: 10,
    marginBottom: -20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  newsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newsAuthorsView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 10,
  },
  newsImage: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  newsText: {
    fontSize: 20,
    margin: 10,
    color: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  newsAuthors: {
    fontSize: 15,
    color: '#696969',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  shareNewsOpacity: {
    backgroundColor: 'silver', borderRadius: 20, overflow: 'hidden', width: 100, flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
