import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { mocks, theme } from '../constants';

export const Recent = () => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Just In</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}>
        {mocks.explores.map(item => (
          <View key={item.id} style={styles.home}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.info}>
              <Text style={styles.price}>{USDollar.format(item.price)}</Text>
              <Text style={styles.spec}>{item.specs.join(' , ')}</Text>
              <View style={styles.location}>
                <IonIcons
                  name="location-outline"
                  size={10}
                  color={theme.colors.primary}
                />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.sizes.space,
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.xl,
    fontWeight: theme.weights.bold,
  },
  viewAll: {
    color: theme.colors.gray,
    fontSize: theme.sizes.sm,
    fontWeight: theme.weights.semibold,
  },
  contentContainerStyle: {
    gap: 20,
    paddingHorizontal: 20,
  },
  home: {
    width: theme.sizes.width / 2,
    gap: 15,
  },
  image: {
    width: '100%',
    height: 140,
    objectFit: 'cover',
    borderRadius: theme.sizes.radius,
  },
  info: {
    paddingHorizontal: theme.sizes.space - 10,
  },
  price: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.lg,
    fontWeight: theme.weights.semibold,
    marginBottom: 4,
  },
  spec: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.sm,
    fontWeight: theme.weights.medium,
    marginBottom: theme.sizes.space - 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationText: {
    color: theme.colors.gray,
    fontSize: theme.sizes.sm,
    fontWeight: theme.weights.medium,
  },
});
