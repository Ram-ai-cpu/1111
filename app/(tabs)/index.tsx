import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Mic, Camera, Zap, Globe, Brain } from 'lucide-react-native';
import GlowingBackground from '@/components/GlowingBackground';
import GlowingCard from '@/components/GlowingCard';
import NeonButton from '@/components/NeonButton';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: <Brain size={24} color="#10B981" />,
      title: 'AI Assistant',
      description: 'Get smart answers instantly',
    },
    {
      icon: <Camera size={24} color="#7C3AED" />,
      title: 'Visual Search',
      description: 'Search with your camera',
    },
    {
      icon: <Globe size={24} color="#3B82F6" />,
      title: 'Global Discovery',
      description: 'Explore worldwide locations',
    },
    {
      icon: <Zap size={24} color="#10B981" />,
      title: 'Smart Tasks',
      description: 'AI-powered productivity',
    },
  ];

  return (
    <GlowingBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.greeting}>What's on your mind?</Text>
          
          <GlowingCard style={styles.searchCard}>
            <View style={styles.searchContainer}>
              <View style={styles.searchInputContainer}>
                <Search size={20} color="rgba(255, 255, 255, 0.7)" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search anything..."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
              <View style={styles.searchActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Mic size={20} color="#10B981" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Camera size={20} color="#7C3AED" />
                </TouchableOpacity>
              </View>
            </View>
          </GlowingCard>

          <Text style={styles.sectionTitle}>Discover Features</Text>
          
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <GlowingCard key={index} style={styles.featureCard}>
                <TouchableOpacity style={styles.featureContent}>
                  <View style={styles.featureIcon}>
                    {feature.icon}
                  </View>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </TouchableOpacity>
              </GlowingCard>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Recent Searches</Text>
          
          <GlowingCard style={styles.recentCard}>
            <View style={styles.recentContent}>
              <Text style={styles.recentTitle}>Best coffee shops nearby</Text>
              <Text style={styles.recentTime}>2 hours ago</Text>
            </View>
          </GlowingCard>
        </ScrollView>
      </SafeAreaView>
    </GlowingBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  searchCard: {
    marginBottom: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  searchActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  featureCard: {
    width: '48%',
    marginBottom: 16,
  },
  featureContent: {
    padding: 16,
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  recentCard: {
    marginBottom: 16,
  },
  recentContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  recentTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});