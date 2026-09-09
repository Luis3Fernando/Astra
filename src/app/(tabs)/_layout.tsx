import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0B0B0B',
          borderTopColor: '#1E1E1E',
        },
        tabBarActiveTintColor: '#DF5E3F',
        tabBarInactiveTintColor: '#666666',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Planetas',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
        }}
      />
    </Tabs>
  );
}