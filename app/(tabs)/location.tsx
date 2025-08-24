import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Navigation, Search, Filter } from 'lucide-react-native';
import GlowingBackground from '@/components/GlowingBackground';
import GlowingCard from '@/components/GlowingCard';

interface Location {
  id: string;
  name: string;
  type: string;
  distance: string;
  rating: number;
  coordinates: { lat: number; lng: number };
}

export default function LocationScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const locations: Location[] = [
    {
      id: '1',
      name: 'Quantum Coffee Lab',
      type: 'Café',
      distance: '0.3 km',
      rating: 4.8,
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    {
      id: '2',
      name: 'Neural Network Gym',
      type: 'Fitness',
      distance: '0.7 km',
      rating: 4.6,
      coordinates: { lat: 40.7589, lng: -73.9851 },
    },
    {
      id: '3',
      name: 'AI Technology Museum',
      type: 'Museum',
      distance: '1.2 km',
      rating: 4.9,
      coordinates: { lat: 40.7505, lng: -73.9934 },
    },
  ];

  const filters = ['all', 'café', 'fitness', 'museum', 'restaurant'];

  return (
    <GlowingBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover Locations</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Search size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <GlowingCard style={styles.mapCard}>
          <View style={styles.mapContainer}>
            <Text style={styles.mapTitle}>Interactive Map</Text>
            <Text style={styles.mapSubtitle}>Tap to explore glowing locations</Text>
            <View style={styles.mapPlaceholder}>
              <MapPin size={32} color="#7C3AED" />
              <Text style={styles.mapText}>Map View Coming Soon</Text>
            </View>
          </View>
        </GlowingCard>

        <ScrollView style={styles.locationsContainer}>
          {locations.map((location) => (
            <GlowingCard key={location.id} style={styles.locationCard}>
              <TouchableOpacity style={styles.locationContent}>
                <View style={styles.locationHeader}>
                  <View style={styles.locationIcon}>
                    <MapPin size={20} color="#10B981" />
                  </View>
                  <View style={styles.locationInfo}>
                    <Text style={styles.locationName}>{location.name}</Text>
                    <Text style={styles.locationType}>{location.type}</Text>
                  </View>
                  <View style={styles.locationMeta}>
                    <Text style={styles.locationDistance}>{location.distance}</Text>
                    <Text style={styles.locationRating}>★ {location.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </GlowingCard>
          ))}
        </ScrollView>
      </SafeAreaView>
    </GlowingBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
  },
  filterButtonActive: {
    backgroundColor: 'rgba(123, 58, 237, 0.3)',
    borderColor: '#7C3AED',
  },
  filterText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  mapCard: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  mapContainer: {
    padding: 20,
    alignItems: 'center',
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  mapSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
  },
  mapPlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
  },
  mapText: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 8,
    fontSize: 14,
  },
  locationsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  locationCard: {
    marginBottom: 12,
  },
  locationContent: {
    padding: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.4)',
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  locationType: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 2,
  },
  locationMeta: {
    alignItems: 'flex-end',
  },
  locationDistance: {
    fontSize: 14,
    color: '#7C3AED',
    fontWeight: '500',
  },
  locationRating: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 2,
  },
});