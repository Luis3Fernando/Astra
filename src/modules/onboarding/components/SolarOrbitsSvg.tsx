import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle, G } from 'react-native-svg';

const { width } = Dimensions.get('window');
const SIZE = width * 0.9;
const CENTER = SIZE / 2;

export const SolarOrbitsSvg = () => {
  return (
    <Svg width={SIZE} height={SIZE} style={styles.svg}>
      <Defs>
        <RadialGradient id="orbitGlow" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor="#1B281B" stopOpacity="0.8" />
          <Stop offset="50%" stopColor="#0F1710" stopOpacity="0.4" />
          <Stop offset="100%" stopColor="#0B0A10" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="sunGlow" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor="#FFF4A3" stopOpacity="1" />
          <Stop offset="50%" stopColor="#FF9E2C" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#FF6B2D" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.45} fill="url(#orbitGlow)" />
      <Circle cx={CENTER} cy={CENTER} r={46} stroke="#3D4B34" strokeWidth="1" fill="none" opacity="0.6" />
      <Circle cx={CENTER} cy={CENTER} r={80} stroke="#2D3728" strokeWidth="1" fill="none" opacity="0.6" />
      <Circle cx={CENTER} cy={CENTER} r={116} stroke="#222A1E" strokeWidth="1" fill="none" opacity="0.5" />
      <Circle cx={CENTER} cy={CENTER} r={150} stroke="#1A2017" strokeWidth="1" fill="none" opacity="0.4" />
      <Circle cx={CENTER} cy={CENTER} r={14} fill="url(#sunGlow)" />
      <Circle cx={CENTER} cy={CENTER} r={6} fill="#FFFAD9" />
      <G>
        <Circle cx={CENTER} cy={CENTER - 46} r={4} fill="#E58E26" />
        <Circle cx={CENTER + 78} cy={CENTER - 18} r={6} fill="#E15B64" />
        <Circle cx={CENTER - 60} cy={CENTER + 52} r={5} fill="#4BCFFA" />
        <Circle cx={CENTER - 110} cy={CENTER - 36} r={7} fill="#F8B195" />
        <Circle cx={CENTER + 40} cy={CENTER - 108} r={9} fill="#3498DB" />
        <Circle cx={CENTER + 114} cy={CENTER + 20} r={4} fill="#F39C12" />
        <G transform={`translate(${CENTER - 95}, ${CENTER + 115})`}>
          <Circle cx={0} cy={0} r={10} fill="#D2B4DE" />
          <Circle cx={0} cy={0} r={15} stroke="#A569BD" strokeWidth="2" fill="none" opacity="0.7" transform="rotate(-25)" />
        </G>
        <Circle cx={CENTER - 50} cy={CENTER - 138} r={5} fill="#74B9FF" />
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  svg: {
    alignSelf: 'center',
  },
});