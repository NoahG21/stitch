import { Ionicons } from '@expo/vector-icons';
import { color, colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer'

const Layout = () => {
  return (
  <Drawer screenOptions={{
    drawerActiveBackgroundColor: colorTokens.light.blue.blue4,
    drawerLabelStyle: { marginLeft  : -20},

  }}>
    
    <Drawer.Screen name="(home)" options={{
      title: 'Home',
      headerShown: false,
      drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
    }} 
    />
    <Drawer.Screen name="(favorites)" options={{
      title: 'Favorites',
      headerShown: false,
      drawerIcon: ({ color, size }) => <Ionicons name="bookmark-outline" size={size} color={color} />,
    }}  />
  </Drawer>
  )
}

export default Layout;

