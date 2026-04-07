import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../constants/theme';

const categories = [
  { id: '1', title: 'Fresh Fruits & Vegetable', color: '#53B1751A', border: '#53B175', img: require('../../../assets/fruits.png') },
  { id: '2', title: 'Cooking Oil & Ghee', color: '#F8A44C1A', border: '#F8A44C', img: require('../../../assets/oil.png') },
  // ... thêm các mục khác
];

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Products</Text>
      <TextInput style={styles.searchBar} placeholder="Search Store" />
      
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.catCard, { backgroundColor: item.color, borderColor: item.border }]}>
             {/* Render Image và Title ở đây */}
             <Text style={styles.catTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 },
  searchBar: { backgroundColor: '#F2F3F2', height: 50, borderRadius: 15, paddingHorizontal: 15, marginVertical: 20 },
  catCard: { flex: 1, height: 190, margin: 10, borderRadius: 18, borderWidth: 1, justifyContent: 'center', alignItems: 'center', padding: 10 },
  catTitle: { textAlign: 'center', fontWeight: 'bold', marginTop: 10 }
});

export default ExploreScreen;