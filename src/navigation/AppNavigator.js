import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

// Import các Screens
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import ExploreResult from '../screens/Explore/ExploreResult'; // File mới tạo
import FiltersScreen from '../screens/Filters/index';           // File mới tạo
import BeveragesScreen from '../screens/Beverages'; 
import ProductDetailScreen from '../screens/ProductDetail'; 
import CartScreen from '../screens/Cart';                // Sẽ tạo ở bước sau
import FavouriteScreen from '../screens/Favourite';      // Sẽ tạo ở bước sau

import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 1. Stack cho tab Shop (Home)
function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

// 2. Stack cho tab Explore (Tìm kiếm)
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreMain" component={ExploreScreen} />
      <Stack.Screen name="ExploreResult" component={ExploreResult} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="Beverages" component={BeveragesScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  // Ẩn Bottom Tab khi vào các trang chi tiết hoặc trang Filter
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    
    // Danh sách các màn hình muốn ẩn Tab Bar
    const hideOnScreens = ['ProductDetail', 'Beverages', 'Filters'];
    
    if (hideOnScreens.includes(routeName)) {
      return 'none';
    }
    return 'flex';
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary || '#53B175',
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: [
          styles.tabBar,
          { display: getTabBarVisibility(route) }
        ],
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 5 },
        tabBarIconStyle: { marginTop: 5 },
        tabBarIcon: ({ color, focused }) => {
          if (route.name === 'Shop') 
            return <MaterialCommunityIcons name={focused ? "storefront" : "storefront-outline"} size={26} color={color} />;
          if (route.name === 'Explore') 
            return <Ionicons name={focused ? "search-sharp" : "search-outline"} size={26} color={color} />;
          if (route.name === 'Cart') 
            return <Ionicons name={focused ? "cart" : "cart-outline"} size={26} color={color} />;
          if (route.name === 'Favourite') 
            return <Ionicons name={focused ? "heart" : "heart-outline"} size={26} color={color} />;
          if (route.name === 'Account') 
            return <Feather name="user" size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 92,
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    ...Platform.select({
      web: {
        width: 414,
        left: '50%',
        marginLeft: -207,
      },
      default: {
        width: '100%',
      }
    })
  }
});