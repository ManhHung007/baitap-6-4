import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import ProductCard from '../../components/ProductCard';

// Dữ liệu giả cho Trứng (vì bạn chưa có ảnh nên mình dùng màu nền tạm)
const EGG_PRODUCTS = [
  { id: '1', name: 'Egg Chicken Red', unit: '4pcs, Price', price: '1.99', bgColor: '#FDE598', image: require('../../img_assets/egg1.png') },
  { id: '2', name: 'Egg Chicken White', unit: '180g, Price', price: '1.50', bgColor: '#FDE598', image: require('../../img_assets/egg2.png') },
  { id: '3', name: 'Egg Pasta', unit: '30gm, Price', price: '15.99', bgColor: '#FDE598', image: require('../../img_assets/egg3.png') },
  { id: '4', name: 'Egg Noodles', unit: '2L, Price', price: '15.99', bgColor: '#FDE598', image: require('../../img_assets/egg4.png') },
  { id: '5', name: 'Mayonnais Eggless', unit: '150g, Price', price: '4.99', bgColor: '#FDE598',image: require('../../img_assets/egg5.png') },
  { id: '6', name: 'Egg Noodles', unit: '1kg, Price', price: '10.99', bgColor: '#FDE598', image: require('../../img_assets/egg6.png') },
];

const ExploreResult = ({ route, navigation }) => {
  const { categoryName } = route.params || { categoryName: 'Egg' };

  return (
    <View style={styles.container}>
      {/* Header với thanh Search và nút Filter */}
      <View style={styles.headerRow}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.black} />
          <TextInput 
            defaultValue={categoryName}
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <Ionicons name="close-circle" size={18} color="#C2C2C2" />
          </TouchableOpacity>
        </View>
        
        {/* Nút mở bộ lọc (Filters) */}
        <TouchableOpacity 
          style={styles.filterBtn}
          onPress={() => navigation.navigate('Filters')}
        >
          <Ionicons name="options-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={EGG_PRODUCTS}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 50 },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    marginBottom: 20 
  },
  searchContainer: {
    flex: 1,
    height: 50,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: { flex: 1, marginHorizontal: 10, fontWeight: '600', fontSize: 16 },
  filterBtn: { marginLeft: 15 },
  listContent: { paddingHorizontal: 10, paddingBottom: 20 }
});

export default ExploreResult;