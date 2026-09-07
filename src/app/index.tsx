import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASTRA</Text>
      <Text style={styles.subtitle}>Solar System Guide</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0B0B',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 8,
    letterSpacing: 2,
  },
});