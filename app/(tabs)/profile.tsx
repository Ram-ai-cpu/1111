import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Bell, Shield, CircleHelp as HelpCircle, LogOut, User, Award, Zap } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GlowingBackground from '@/components/GlowingBackground';
import GlowingCard from '@/components/GlowingCard';

export default function ProfileScreen() {
  const stats = [
    { label: 'Searches', value: '2,847', icon: <Zap size={20} color="#10B981" /> },
    { label: 'Tasks Done', value: '156', icon: <Award size={20} color="#7C3AED" /> },
    { label: 'Locations', value: '43', icon: <User size={20} color="#3B82F6" /> },
  ];

  const menuItems = [
    { label: 'Notifications', icon: <Bell size={20} color="#FFFFFF" />, action: () => {} },
    { label: 'Privacy & Security', icon: <Shield size={20} color="#FFFFFF" />, action: () => {} },
    { label: 'Settings', icon: <Settings size={20} color="#FFFFFF" />, action: () => {} },
    { label: 'Help & Support', icon: <HelpCircle size={20} color="#FFFFFF" />, action: () => {} },
    { label: 'Sign Out', icon: <LogOut size={20} color="#EF4444" />, action: () => {} },
  ];

  return (
    <GlowingBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <GlowingCard style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <LinearGradient
                colors={['#7C3AED', '#3B82F6']}
                style={styles.avatarContainer}
              >
                <Text style={styles.avatarText}>JD</Text>
              </LinearGradient>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>john.doe@lookate.ai</Text>
                <Text style={styles.profileBadge}>Premium Explorer</Text>
              </View>
            </View>
          </GlowingCard>

          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <GlowingCard key={index} style={styles.statCard}>
                <View style={styles.statContent}>
                  <View style={styles.statIcon}>
                    {stat.icon}
                  </View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              </GlowingCard>
            ))}
          </View>

          <GlowingCard style={styles.menuCard}>
            <View style={styles.menuContainer}>
              <Text style={styles.menuTitle}>Account</Text>
              {menuItems.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.menuItem}
                  onPress={item.action}
                >
                  <View style={styles.menuItemLeft}>
                    {item.icon}
                    <Text style={[
                      styles.menuItemText,
                      item.label === 'Sign Out' && styles.menuItemDanger
                    ]}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </GlowingCard>

          <Text style={styles.appVersion}>Lookate v1.0.0</Text>
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
  profileCard: {
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  profileBadge: {
    fontSize: 12,
    color: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
  },
  statContent: {
    alignItems: 'center',
    padding: 16,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  menuCard: {
    marginBottom: 24,
  },
  menuContainer: {
    padding: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 12,
  },
  menuItemDanger: {
    color: '#EF4444',
  },
  appVersion: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 20,
  },
});