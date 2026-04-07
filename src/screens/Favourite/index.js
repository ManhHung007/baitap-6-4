import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image,          // BƯỚC 1: Import thêm Image từ react-native
  SafeAreaView    // Dùng SafeAreaView để header đẹp hơn trên iOS
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

// BƯỚC 2: Cập nhật dữ liệu FAV_DATA với require đường dẫn ảnh
const FAV_DATA = [
  { id: '1', name: 'Sprite Can', unit: '325ml, Price', price: 1.50, image: require('../../img_assets/fav1.png') },
  { id: '2', name: 'Diet Coke', unit: '355ml, Price', price: 1.99, image: require('../../img_assets/fav2.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: 15.50, image: require('../../img_assets/fav3.png') },
  { id: '4', name: 'Coca Cola Can', unit: '325ml, Price', price: 4.99, image: require('../../img_assets/fav4.png') },
  { id: '5', name: 'Pepsi Can', unit: '330ml, Price', price: 4.99, image: require('../../img_assets/fav5.png') },
];

const FavouriteItem = ({ item }) => (
  <View style={styles.favItem}>
    {/* BƯỚC 3: Thay thế ô placeholder bằng thẻ Image thật */}
    <View style={styles.imageContainer}>
      <Image 
        source={item.image} 
        style={styles.actualImage} 
        resizeMode="contain" // Giúp ảnh nằm gọn trong khung, không bị mất hình
      />
    </View>

    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.unit}>{item.unit}</Text>
    </View>
    
    <View style={styles.rightSection}>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="chevron-forward" size={20} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function FavouriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Phần Header được tách riêng để style đẹp hơn */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorurite</Text>
      </View>

      <FlatList
        data={FAV_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FavouriteItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      
      {/* Nút Add All cố định ở dưới */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
          <Text style={styles.addText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2', // Dùng màu border xám nhẹ
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#181725' // Màu đen đậm của thiết kế
  },
  listContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 120 // Chừa chỗ cho nút Add All
  },
  favItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  // Style cho khung chứa ảnh
  imageContainer: { 
    width: 60, 
    height: 60, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 15 // Khoảng cách với phần chữ
  },
  // Style cho ảnh thật
  actualImage: { 
    width: 50, 
    height: 50 
  },
  info: { 
    flex: 1 
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181725' 
  },
  unit: { 
    fontSize: 14, 
    color: '#7C7C7C', // Màu xám của thiết kế
    marginTop: 3
  },
  rightSection: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  price: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181725',
    marginRight: 10 
  },
  // Phần footer chứa nút bấm
  footer: {
    position: 'absolute',
    bottom: 90, // Nằm trên Bottom Tab Bar (khoảng 92px)
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addBtn: { 
    backgroundColor: COLORS.primary, // Màu xanh lá cây
    height: 67, 
    borderRadius: 19, // Bo góc tròn hơn theo thiết kế
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  }
});