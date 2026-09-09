import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './PlanetDetailScreen.styles';

interface PlanetDetailScreenProps {
  planetId: string;
}

export const PlanetDetailScreen = ({ planetId }: PlanetDetailScreenProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.badge}># PLANETA</Text>
      <Text style={styles.title}>{planetId.toUpperCase()}</Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>← REGRESAR</Text>
      </Pressable>
    </View>
  );
};