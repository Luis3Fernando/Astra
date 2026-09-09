import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparativa orbital</Text>
      <Text style={styles.subtitle}>Datos y escalas relativas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666666',
    marginTop: 8,
  },
});