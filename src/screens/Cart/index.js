import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image,          // Đã thêm Image vào đây để hết lỗi "Can't find variable"
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

// Dữ liệu giỏ hàng với đường dẫn ảnh từ thư mục img_assets của bạn
const CART_DATA = [
  { id: '1', name: 'Bell Pepper Red', unit: '1kg, Price', price: 4.99, qty: 1, bgColor: 'rgba(247, 161, 147, 0.2)', image: require('../../img_assets/cart1.png') },
  { id: '2', name: 'Egg Chicken Red', unit: '4pcs, Price', price: 1.99, qty: 1, bgColor: 'rgba(248, 164, 76, 0.2)', image: require('../../img_assets/cart2.png') },
  { id: '3', name: 'Organic Bananas', unit: '12kg, Price', price: 3.00, qty: 1, bgColor: 'rgba(83, 177, 117, 0.2)', image: require('../../img_assets/cart3.png') },
  { id: '4', name: 'Ginger', unit: '250gm, Price', price: 2.99, qty: 1, bgColor: 'rgba(211, 176, 224, 0.2)', image: require('../../img_assets/cart4.png') },
];

const CartItem = ({ item }) => (
  <View style={styles.cartItem}>
    {/* Khung chứa ảnh sản phẩm */}
    <View style={[styles.imageContainer, { backgroundColor: item.bgColor }]}>
      <Image 
        source={item.image} 
        style={styles.actualImage} 
        resizeMode="contain" 
      />
    </View>

    {/* Thông tin chi tiết sản phẩm */}
    <View style={styles.itemInfo}>
      <View style={styles.infoTop}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="close" size={22} color={COLORS.grey} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.itemUnit}>{item.unit}</Text>
      
      <View style={styles.infoBottom}>
        <View style={styles.qtyContainer}>
          <TouchableOpacity style={styles.qtyBtn}>
            <Ionicons name="remove" size={20} color={COLORS.grey} />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.qty}</Text>
          <TouchableOpacity style={styles.qtyBtn}>
            <Ionicons name="add" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  </View>
);

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề trang */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={CART_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Nút thanh toán cố định ở dưới */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.8}>
          <View style={{ width: 20 }} /> {/* Khoảng trống để cân bằng */}
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceTagText}>$12.96</Text>
          </View>
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
    borderBottomColor: '#E2E2E2',
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#181725' 
  },
  listContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 120 // Để không bị nút Checkout che mất sản phẩm cuối
  },
  cartItem: { 
    flexDirection: 'row', 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  imageContainer: { 
    width: 80, 
    height: 80, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  actualImage: {
    width: 65,
    height: 65,
  },
  itemInfo: { 
    flex: 1, 
    marginLeft: 15, 
    justifyContent: 'space-between' 
  },
  infoTop: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  itemName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181725' 
  },
  itemUnit: { 
    fontSize: 14, 
    color: '#7C7C7C',
    marginTop: 2
  },
  infoBottom: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10
  },
  qtyContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  qtyBtn: { 
    width: 35, 
    height: 35, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  qtyText: { 
    marginHorizontal: 12, 
    fontSize: 16, 
    fontWeight: '600',
    color: '#181725'
  },
  itemPrice: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#181725' 
  },
  footer: {
    position: 'absolute',
    bottom: 90, // Nằm trên Bottom Tab Bar
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  checkoutBtn: { 
    backgroundColor: COLORS.primary, 
    height: 67, 
    borderRadius: 19, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  checkoutText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  priceTag: { 
    backgroundColor: '#489E67', 
    paddingHorizontal: 8, 
    paddingVertical: 3, 
    borderRadius: 5, 
    position: 'absolute', 
    right: 20 
  },
  priceTagText: { 
    color: 'white', 
    fontSize: 12, 
    fontWeight: 'bold' 
  }
});