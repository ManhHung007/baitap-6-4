import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Ở đây dùng ../../ là ĐÚNG vì file này nằm sâu trong 2 lớp thư mục
import { COLORS } from '../../constants/theme'; 

const FilterSection = ({ title, options, selectedItems, onToggle }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {options.map((item) => {
      const isSelected = selectedItems.includes(item);
      return (
        <TouchableOpacity 
          key={item} 
          style={styles.checkboxRow} 
          onPress={() => onToggle(item)}
        >
          <View style={[
            styles.checkbox, 
            isSelected && { backgroundColor: COLORS.primary, borderColor: COLORS.primary }
          ]}>
            {isSelected && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
          <Text style={[styles.optionText, isSelected && { color: COLORS.primary }]}>{item}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default function FiltersScreen({ navigation }) {
  const [categories, setCategories] = useState(['Eggs']);
  const [brands, setBrands] = useState(['Cocola']);

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} /> 
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.filterCard}>
          <FilterSection title="Categories" options={['Eggs', 'Noodles', 'Chips', 'Fast Food']} selectedItems={categories} onToggle={(item) => toggleItem(item, categories, setCategories)} />
          <FilterSection title="Brand" options={['Individual', 'Cocola', 'Ifad', 'Kazi']} selectedItems={brands} onToggle={(item) => toggleItem(item, brands, setBrands)} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.black },
  content: { flex: 1, backgroundColor: '#F2F3F2', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  filterCard: { backgroundColor: 'white', padding: 25, borderTopLeftRadius: 30, borderTopRightRadius: 30, minHeight: 600 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: COLORS.black, marginBottom: 20 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkbox: { width: 24, height: 24, borderWidth: 1.5, borderColor: '#B1B1B1', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  optionText: { fontSize: 16, color: COLORS.black },
  footer: { padding: 20, backgroundColor: 'white' },
  applyBtn: { backgroundColor: COLORS.primary, borderRadius: 15, height: 65, justifyContent: 'center', alignItems: 'center' },
  applyText: { color: 'white', fontSize: 18, fontWeight: '600' }
});