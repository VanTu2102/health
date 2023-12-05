import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  header:{
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    top: 0,
    width: '100%',
    height: 70,
    paddingHorizontal: 15,
    position: 'absolute',
    shadowColor: '#5C6BC1',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 4,
    zIndex: 100
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: 90,
    paddingHorizontal: 15,
    position: 'absolute',
    shadowColor: '#5C6BC1',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 6,
    zIndex: 100
  },
  button: {
    width: 80,
    maxWidth: 80,
    height: 80,
    flex: 1,
    padding: 15,
    borderRadius: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'Quicksand_500Medium',
    color: '#5C6BC1',
  },
  menuIconActive: {
    color: 'white',
    backgroundColor: '#5C6BC1',
  },
  menuIconNoActive: {
    color: '#5C6BC1',
    backgroundColor: 'white',
  },
  menuTextActive: {
    color: 'white',
  },
  menuTextNoActive: {
    color: '#5C6BC1',
  },
  menuIcon: {
    width: 75,
    height: 55,
    flex: 1,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
});
