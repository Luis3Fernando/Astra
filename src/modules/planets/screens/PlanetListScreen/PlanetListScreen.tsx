import React from 'react';
import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '@/core/theme/colors';
import { usePlanets } from '../../hooks/usePlanets';
import { styles } from './PlanetListScreen.styles';

export const PlanetListScreen = () => {
  const router = useRouter();
  const { planets, isLoading } = usePlanets();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>SISTEMA SOLAR</Text>
        <Text style={styles.title}>Cuerpos celestes</Text>
      </View>

      <FlatList
        data={planets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { borderColor: `${item.accentColor}33` }]}
            onPress={() => router.push(`/planet/${item.id}`)}
          >
            <Image source={item.image} style={styles.planetImage} resizeMode="contain" />
            <View style={styles.cardInfo}>
              <Text style={[styles.orderText, { color: item.accentColor }]}>
                0{item.orderFromSun} • ÓRBITA
              </Text>
              <Text style={styles.planetName}>{item.name}</Text>
              <Text style={styles.planetTagline} numberOfLines={1}>
                {item.tagline}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};