import React, { useState } from 'react'; // Thêm useState
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = [
  { id: '1', name: 'Frash Fruits', image: require('../../img_assets/fruits.png'), bgColor: 'rgba(83, 177, 117, 0.1)', borderColor: 'rgba(83, 177, 117, 0.7)' },
  { id: '2', name: 'Cooking Oil', image: require('../../img_assets/oil.png'), bgColor: 'rgba(248, 164, 76, 0.1)', borderColor: 'rgba(248, 164, 76, 0.7)' },
  { id: '3', name: 'Meat & Fish', image: require('../../img_assets/meat.png'), bgColor: 'rgba(247, 165, 147, 0.25)', borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: require('../../img_assets/bakery.png'), bgColor: 'rgba(211, 176, 224, 0.25)', borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: require('../../img_assets/egg.png'), bgColor: '#FFF9E5', borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', image: require('../../img_assets/beverages.png'), bgColor: '#EDF7FC', borderColor: '#B7DFF5' },
];

const ExploreScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  // Hàm xử lý khi người dùng nhấn Enter trên bàn phím
  const handleSearch = () => {
    const keyword = searchText.toLowerCase().trim();
    if (keyword === 'egg') {
      navigation.navigate('ExploreResult', { categoryName: 'Egg' });
    } else if (keyword === 'beverages') {
      navigation.navigate('Beverages');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.categoryCard, 
        { backgroundColor: item.bgColor, borderColor: item.borderColor }
      ]}
      activeOpacity={0.8}
      onPress={() => {
        // Vẫn giữ logic nhấn vào card nếu bạn muốn
        if (item.id === '6') navigation.navigate('Beverages');
        if (item.id === '5') navigation.navigate('ExploreResult', { categoryName: 'Egg' });
      }}
    >
      <Image 
        source={item.image} 
        style={styles.categoryImage} 
        resizeMode="contain" 
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#181725" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search Store" 
            style={styles.searchInput}
            placeholderTextColor="#7C7C7C"
            value={searchText}
            onChangeText={(text) => setSearchText(text)} // Cập nhật text khi gõ
            onSubmitEditing={handleSearch} // Kích hoạt khi nhấn Enter/Search trên bàn phím
            returnKeyType="search" // Đổi nút Enter thành chữ "Search" trên bàn phím điện thoại
          />
        </View>
      </View>

      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: 'white' },
  header: { marginTop: 50, alignItems: 'center', paddingBottom: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  searchWrapper: { alignItems: 'center', marginVertical: 15 },
  searchContainer: { width: 364, height: 51.5, backgroundColor: '#F2F3F2', borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, fontWeight: '600' },
  listContent: { paddingHorizontal: 20, paddingBottom: 110 },
  columnWrapper: { justifyContent: 'space-between', marginBottom: 15 },
  categoryCard: { width: 174.5, height: 189.1, borderRadius: 18, borderWidth: 1, justifyContent: 'center', alignItems: 'center', padding: 15 },
  categoryImage: { width: '80%', height: '60%' },
  categoryName: { marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 14, color: '#181725' }
});

export default ExploreScreen;