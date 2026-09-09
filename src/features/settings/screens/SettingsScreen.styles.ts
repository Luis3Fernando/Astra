import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    marginBottom: 32,
  },
  dangerButton: {
    borderColor: '#DF5E3F',
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  dangerText: {
    color: '#DF5E3F',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});