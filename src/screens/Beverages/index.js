import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BEVERAGES_DATA = [
  { id: '1', image: require('../../img_assets/coke.png') },
  { id: '2', image: require('../../img_assets/sprite.png') },
  { id: '3', image: require('../../img_assets/applejuice.png') },
  { id: '4', image: require('../../img_assets/orangejuice.png') },
  { id: '5', image: require('../../img_assets/cola.png') },
  { id: '6', image: require('../../img_assets/pepsi.png') },
];

const BeveragesScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      activeOpacity={0.9}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image 
        source={item.image} 
        style={styles.productImage} 
        resizeMode="cover" 
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header đã thêm tiêu đề Beverages */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Beverages</Text>
        
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="options-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={BEVERAGES_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
  },
  headerBtn: {
    width: 40,
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: 173.3,
    height: 248.5,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
});

export default BeveragesScreen;