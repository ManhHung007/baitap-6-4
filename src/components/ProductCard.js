import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';

const ProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
             <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 220,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 15,
    margin: 8,
  },
  image: { width: '100%', height: 80, marginBottom: 15 },
  name: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
  unit: { fontSize: 14, color: COLORS.grey, marginVertical: 5 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  price: { fontSize: 18, fontWeight: '600' },
  addButton: { 
    backgroundColor: COLORS.primary, 
    width: 40, height: 40, 
    borderRadius: 12, 
    justifyContent: 'center', alignItems: 'center' 
  }
});

export default ProductCard;