import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, LinearGradient, Stop, Circle, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const HEIGHT = 460;

export const SpaceHorizon = () => {
  const cx = width / 2;

  return (
    <Svg width={width} height={HEIGHT} style={styles.svg}>
      <Defs>
        <RadialGradient id="starGlow" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <Stop offset="20%" stopColor="#FFD8A8" stopOpacity="0.6" />
          <Stop offset="50%" stopColor="#FF6B2D" stopOpacity="0.15" />
          <Stop offset="100%" stopColor="#0B0A10" stopOpacity="0" />
        </RadialGradient>
        <LinearGradient id="marsAtmosphere" x1="50%" y1="0%" x2="50%" y2="100%">
          <Stop offset="0%" stopColor="#E0551E" stopOpacity="1" />
          <Stop offset="15%" stopColor="#8A2308" stopOpacity="1" />
          <Stop offset="35%" stopColor="#2A0B06" stopOpacity="1" />
          <Stop offset="55%" stopColor="#0B0A10" stopOpacity="1" />
          <Stop offset="100%" stopColor="#0B0A10" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient id="marsRim" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFA67A" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#0B0A10" stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Circle cx={cx - 55} cy="45" r="0.9" fill="#FFFFFF" opacity="0.6" />
      <Circle cx={cx - 30} cy="28" r="1.2" fill="#FFFFFF" opacity="0.8" />
      <Circle cx={cx - 18} cy="52" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <Circle cx={cx + 24} cy="32" r="1.1" fill="#FFFFFF" opacity="0.75" />
      <Circle cx={cx + 48} cy="50" r="0.8" fill="#FFFFFF" opacity="0.55" />
      <Circle cx={cx + 65} cy="26" r="1.3" fill="#FFFFFF" opacity="0.85" />
      <Circle cx={cx - 75} cy="75" r="0.8" fill="#FFFFFF" opacity="0.4" />
      <Circle cx={cx + 80} cy="70" r="1.0" fill="#FFFFFF" opacity="0.6" />
      <Circle cx={cx} cy="70" r="45" fill="url(#starGlow)" />
      <Circle cx={cx} cy="70" r="3.5" fill="#FFFFFF" />
      <Path
        d={`M -60 130 Q ${cx} 30 ${width + 60} 130 L ${width + 60} ${HEIGHT} L -60 ${HEIGHT} Z`}
        fill="url(#marsAtmosphere)"
      />
      <Path
        d={`M -60 130 Q ${cx} 30 ${width + 60} 130`}
        stroke="url(#marsRim)"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});