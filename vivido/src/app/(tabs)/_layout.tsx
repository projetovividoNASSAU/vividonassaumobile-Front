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
            paddingHorizontal: 32,
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
            name="stream"
            options={{
                tabBarIcon: ({ color, size }) => <AntDesign name="play" size={size} color={color} />,
            }}
        />
        <Tabs.Screen
            name="panic"
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="alarm-light"  size={38} color={color} />,
            }}
        />
        <Tabs.Screen
            name="education"
            options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="article" size={size} color={color}  />,
            }}
        />
        <Tabs.Screen
            name="community"
            options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="people-alt"  size={size} color={color}/>,
            }}
        />
    </Tabs>
    );
}
