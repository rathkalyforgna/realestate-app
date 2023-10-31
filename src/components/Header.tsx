import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { theme } from '../constants';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.options}>
          <IonIcons
            name="location-outline"
            size={24}
            color={theme.colors.primary}
          />
          <View style={styles.location}>
            <Text style={styles.locationText}>Location</Text>
            <Text style={styles.locationOptions}>Woodbridge</Text>
          </View>
        </View>
        <View>
          <IonIcons
            name="settings-sharp"
            size={24}
            color={theme.colors.secondary}
          />
        </View>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search by Location, Area or Pin Code"
        />
        <IonIcons name="search-outline" size={24} color={theme.colors.gray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    gap: 30,
    padding: theme.sizes.space,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.sizes.space - 10,
  },
  location: {
    gap: 4,
  },
  locationText: {
    color: theme.colors.gray,
    fontSize: theme.sizes.xs,
    fontWeight: theme.weights.medium,
  },
  locationOptions: {
    color: theme.colors.secondary,
    fontSize: theme.sizes.md,
    fontWeight: theme.weights.semibold,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: theme.sizes.radius,
    gap: 10,
    padding: theme.sizes.space - 8,
  },
  input: {
    flex: 1,
  },
});
