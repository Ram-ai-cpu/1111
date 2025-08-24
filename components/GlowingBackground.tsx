import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, Pattern, Rect, Circle, Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function GlowingBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0a0f1c', '#101a32', '#0a0f1c']}
        style={styles.gradient}
      />
      
      <Svg width={width} height={height} style={styles.grid}>
        <Defs>
          <Pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <Line
              x1="0"
              y1="0"
              x2="40"
              y2="0"
              stroke="rgba(123, 58, 237, 0.2)"
              strokeWidth="0.5"
            />
            <Line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="rgba(123, 58, 237, 0.2)"
              strokeWidth="0.5"
            />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Glowing nodes */}
        <Circle cx="80" cy="120" r="2" fill="#7C3AED" opacity={0.8} />
        <Circle cx="200" cy="300" r="2" fill="#10B981" opacity={0.6} />
        <Circle cx="320" cy="200" r="2" fill="#3B82F6" opacity={0.7} />
        <Circle cx="150" cy="500" r="2" fill="#7C3AED" opacity={0.5} />
        <Circle cx="280" cy="450" r="2" fill="#10B981" opacity={0.8} />
      </Svg>
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  grid: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});