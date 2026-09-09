import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema solar</Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push('/planet/mars')}
      >
        <Text style={styles.buttonText}>VER MARTE</Text>
      </Pressable>
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
    fontSize: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1E1E1E',
    borderColor: '#333333',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});