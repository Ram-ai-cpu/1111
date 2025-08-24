import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Search, Mic, Camera } from 'lucide-react-native';

interface AnimatedSearchBarProps {
  onSearch?: (query: string) => void;
  onVoiceSearch?: () => void;
  onImageSearch?: () => void;
}

export default function AnimatedSearchBar({ 
  onSearch, 
  onVoiceSearch, 
  onImageSearch 
}: AnimatedSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const glowAnim = new Animated.Value(0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(glowAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(glowAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  return (
    <Animated.View style={[
      styles.container,
      {
        shadowOpacity: glowAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 0.5],
        }),
      },
    ]}>
      <View style={styles.searchContainer}>
        <Search size={20} color="rgba(255, 255, 255, 0.7)" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search anything..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={onVoiceSearch}>
            <Mic size={18} color="#10B981" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={onImageSearch}>
            <Camera size={18} color="#7C3AED" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(16, 26, 50, 0.6)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(123, 58, 237, 0.3)',
  },
});