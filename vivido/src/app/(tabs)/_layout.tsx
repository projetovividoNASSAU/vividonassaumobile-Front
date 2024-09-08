// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'blue'
    }}>
        <Tabs.Screen
            name="home"
        />
        <Tabs.Screen
            name="teste"
        />
    </Tabs>
    );
}
