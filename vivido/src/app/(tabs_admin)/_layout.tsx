import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#3F4056', 
        headerShown: false,
        tabBarStyle: {
            paddingHorizontal: 48,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
        },
        tabBarShowLabel: false
    }}>
        <Tabs.Screen
            name="index"
            options={{
                tabBarIcon: ({ color, size }) => <FontAwesome6 name="house" size={size} color={color} />,
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="search-sharp" size={size} color={color} />,
            }}
        />
    </Tabs>
    );
}
