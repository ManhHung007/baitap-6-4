import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';

const PhoneWrapper = ({ children }) => {
  // Nếu là trên Web, chúng ta sẽ ép kích thước
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <View style={styles.phoneScreen}>
          {children}
        </View>
      </View>
    );
  }

  // Nếu là trên điện thoại thật, cứ để nó hiển thị full màn hình
  return <View style={{ flex: 1 }}>{children}</View>;
};

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: '#afafaf', // Màu nền bên ngoài điện thoại
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneScreen: {
    width: 414,
    height: 896,
    backgroundColor: 'white',
    borderRadius: 0, // Bo góc toàn bộ app
    overflow: 'hidden', // Để nội dung bên trong không tràn ra khỏi góc bo
    borderWidth: 0,
    borderColor: '#1a1a1a', // Giả lập viền máy điện thoại
    // Đổ bóng cho khung máy
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
});

export default PhoneWrapper;