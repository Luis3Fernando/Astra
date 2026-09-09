import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  counter: {
    color: '#666666',
    fontSize: 12,
    letterSpacing: 3,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#DF5E3F',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
  },
});