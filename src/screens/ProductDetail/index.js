import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

const ProductDetailScreen = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const { product } = route.params || {}; // Nhận dữ liệu từ Home chuyển sang

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 1. Khung ảnh sản phẩm (Bo góc dưới 25px) */}
        <View style={styles.imageHeader}>
          <View style={styles.navIcons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-outline" size={26} color="black" />
            </TouchableOpacity>
          </View>
          
          <Image 
            source={ require('../../img_assets/largeapple.png')} 
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        {/* 2. Thông tin sản phẩm */}
        <View style={styles.infoSection}>
          <View style={styles.rowBetween}>
            <Text style={styles.title}>{product?.name || 'Natural Red Apple'}</Text>
            <Ionicons name="heart-outline" size={24} color={COLORS.grey} />
          </View>
          <Text style={styles.unit}>{product?.unit || '1kg, Price'}</Text>

          {/* 3. Bộ tăng giảm số lượng & Giá */}
          <View style={[styles.rowBetween, { marginTop: 30 }]}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
                <Entypo name="minus" size={24} color={COLORS.grey} />
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Entypo name="plus" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>{product?.price || '$4.99'}</Text>
          </View>

          <View style={styles.divider} />

          {/* 4. Product Detail Accordion */}
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </View>
          <Text style={styles.description}>
            Apples are nutritious. Apples may be good for weight loss. 
            Apples may be good for your heart. As part of a healthful and varied diet.
          </Text>

          {/* 5. Nutritions & Review */}
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.row}>
              <View style={styles.tag}><Text style={styles.tagText}>100gr</Text></View>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </View>
          </View>

          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.row}>
              <View style={styles.stars}>
                {[1,2,3,4,5].map(i => <Ionicons key={i} name="star" size={16} color="#F3603F" />)}
              </View>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 6. Nút Add To Basket (Cố định ở đáy) */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
        {/* Thanh ngang xám giả lập nằm trong PhoneWrapper đã làm trước đó */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  
  // Thông số khung ảnh bạn cung cấp
  imageHeader: {
    width: 413.6,
    height: 371.44,
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 50,
  },
  navIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  // Thông số ảnh sản phẩm bạn cung cấp
  mainImage: {
    width: 329.33,
    height: 199.18,
    top: 102.8,
    left: 42.33,
    position: 'absolute',
  },

  infoSection: { padding: 25 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.black },
  unit: { fontSize: 16, color: COLORS.grey, marginTop: 5 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },

  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityBox: {
    width: 45, height: 45,
    borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 17,
    justifyContent: 'center', alignItems: 'center', marginHorizontal: 15
  },
  quantityText: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 24, fontWeight: 'bold' },

  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600' },
  description: { color: COLORS.grey, lineHeight: 21, marginTop: 10 },
  
  tag: { backgroundColor: '#EBEBEB', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5, marginRight: 10 },
  tagText: { fontSize: 12, color: COLORS.grey },
  stars: { flexDirection: 'row', marginRight: 10 },

  footer: { padding: 25, paddingBottom: 40 },
  addButton: {
    backgroundColor: COLORS.primary,
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: '600' }
});

export default ProductDetailScreen;