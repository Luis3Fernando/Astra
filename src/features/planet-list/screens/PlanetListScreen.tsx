import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './PlanetListScreen.styles';

export const PlanetListScreen = () => {
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
};