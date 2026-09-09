import { View, Text } from 'react-native';
import { styles } from './ExploreScreen.styles';

export const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparativa orbital</Text>
      <Text style={styles.subtitle}>Datos y escalas relativas</Text>
    </View>
  );
};