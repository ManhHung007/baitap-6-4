import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TextInput, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

// Dữ liệu mẫu cho sản phẩm
const EXCLUSIVE_DATA = [
  { id: '1', name: 'Organic Bananas', unit: '7pcs, Priceg', price: '$4.99', image: require('../../img_assets/banana.png') },
  { id: '2', name: 'Red Apple', unit: '1kg, Priceg', price: '$4.99', image: require('../../img_assets/apple.png') },
  { id: '3', name: 'Bell Pepper Red', unit: '1kg, Priceg', price: '$4.99', image: require('../../img_assets/otchuong.png') },
];

const HomeScreen = ({ navigation }) => {

  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      {/* Cần paddingBottom lớn để không bị che bởi Bottom Tab */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* 1. Header */}
        <View style={styles.header}>
          <Image source={require('../../img_assets/carrot.png')} style={styles.logoCarrot} resizeMode="contain" />
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={18} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* 2. Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.black} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Store" placeholderTextColor={COLORS.grey} />
        </View>

        {/* 3. Banner */}
        <View style={styles.bannerContainer}>
          <Image source={require('../../img_assets/freshvegetable.png')} style={styles.bannerImage} resizeMode="cover" />
        </View>

        {/* 4. Section: Exclusive Offer (Đã đẩy lên cao 60px) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>

        {/* List ngang cho Exclusive Offer */}
        <FlatList
          data={EXCLUSIVE_DATA}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
        />

        {/* 5. Section: Best Selling */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>

        <FlatList
          data={EXCLUSIVE_DATA} // Dùng tạm data cũ
          renderItem={renderProductItem}
          keyExtractor={item => 'best_' + item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: 'white' },
  header: { alignItems: 'center', marginTop: 40 },
  logoCarrot: { width: 26, height: 30 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  locationText: { fontSize: 18, fontWeight: '600', color: '#4C4F4D', marginLeft: 5 },

  searchContainer: {
    position: 'absolute', width: 364, height: 51.5, top: 139.39, left: 24.71,
    backgroundColor: COLORS.backgroundGray, borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15,
  },
  bannerContainer: {
    position: 'absolute', width: 368.2, height: 114.9, top: 210.96, left: 23.5, borderRadius: 8, overflow: 'hidden',
  },
  bannerImage: { width: '100%', height: '100%' },

  // Điều chỉnh marginTop: 355 - 60 = 295px
  sectionHeader: {
    marginTop: 250, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 25,
  },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.black },
  seeAllText: { fontSize: 16, color: COLORS.primary, fontWeight: '600' },

  // Cấu trúc khung ảnh sản phẩm theo thông số bạn đưa
  horizontalListContent: { paddingLeft: 25, marginTop: 20 },
  productCard: {
    width: 173.32,
    height: 248.51,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 15,
    marginRight: 15,
    backgroundColor: 'white',
    // Đảm bảo ảnh bên trong không tràn ra ngoài bo góc của card
    overflow: 'hidden', 
  },
  productImage: {
    width: '100%',
    height: 100,
    marginTop: 5,
  },
  productName: { fontSize: 16, fontWeight: 'bold', color: COLORS.black, marginTop: 10 },
  productUnit: { fontSize: 14, color: COLORS.grey, marginVertical: 5 },
  productFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 'auto' // Đẩy giá và nút xuống đáy card
  },
  productPrice: { fontSize: 18, fontWeight: '600', color: COLORS.black },
  addBtn: {
    backgroundColor: COLORS.primary,
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;