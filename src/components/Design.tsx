import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { mocks, theme } from '../constants';

export const Design = () => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>Designer Homes</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}>
        {mocks.places.map(item => (
          <View key={item.id} style={styles.home}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.startAtPrice}>
              <Text style={styles.startAt}>
                Starts at{' '}
                <Text style={styles.price}>{USDollar.format(item.price)}</Text>
              </Text>
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
    gap: theme.sizes.space - 5,
    paddingHorizontal: theme.sizes.space,
  },
  home: {
    flex: 1,
  },
  image: {
    width: theme.sizes.width / 1.5,
    height: 140,
    borderRadius: theme.sizes.radius,
  },
  startAtPrice: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.space - 10,
    paddingVertical: theme.sizes.space - 15,
  },
  startAt: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.xs,
    fontWeight: theme.weights.medium,
  },
  price: {
    color: theme.colors.primary,
    fontSize: theme.sizes.xs,
    fontWeight: theme.weights.medium,
  },
});
