import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, LinearGradient, Stop, Circle, Ellipse, G } from 'react-native-svg';

const { width } = Dimensions.get('window');
const SIZE = width * 0.9;
const CENTER = SIZE / 2;

export const SaturnPlanetSvg = () => {
  return (
    <Svg width={SIZE} height={SIZE} style={styles.svg}>
      <Defs>
        <RadialGradient id="nebulaGlow" cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor="#2D113B" stopOpacity="0.9" />
          <Stop offset="45%" stopColor="#160820" stopOpacity="0.5" />
          <Stop offset="100%" stopColor="#0B0A10" stopOpacity="0" />
        </RadialGradient>
        <LinearGradient id="saturnBody" x1="15%" y1="15%" x2="85%" y2="85%">
          <Stop offset="0%" stopColor="#FFC837" stopOpacity="1" />
          <Stop offset="35%" stopColor="#FF8008" stopOpacity="1" />
          <Stop offset="75%" stopColor="#C4421A" stopOpacity="1" />
          <Stop offset="100%" stopColor="#3E0F0A" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient id="ringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#E879F9" stopOpacity="0.95" />
          <Stop offset="50%" stopColor="#C026D3" stopOpacity="0.6" />
          <Stop offset="100%" stopColor="#4A044E" stopOpacity="0.1" />
        </LinearGradient>
        <LinearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFA07A" stopOpacity="1" />
          <Stop offset="100%" stopColor="#7C2D12" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Circle cx={CENTER} cy={CENTER} r={CENTER * 0.9} fill="url(#nebulaGlow)" />
      <Circle cx={CENTER - 110} cy={CENTER - 65} r={1.2} fill="#FFFFFF" opacity="0.8" />
      <Circle cx={CENTER - 55} cy={CENTER - 120} r={0.8} fill="#67E8F9" opacity="0.7" />
      <Circle cx={CENTER + 95} cy={CENTER - 90} r={1.4} fill="#FFFFFF" opacity="0.9" />
      <Circle cx={CENTER + 120} cy={CENTER - 20} r={1} fill="#F472B6" opacity="0.75" />
      <Circle cx={CENTER - 125} cy={CENTER + 45} r={0.9} fill="#FFFFFF" opacity="0.6" />
      <Circle cx={CENTER - 75} cy={CENTER + 105} r={1.3} fill="#67E8F9" opacity="0.8" />
      <Circle cx={CENTER + 105} cy={CENTER + 70} r={1} fill="#FFFFFF" opacity="0.7" />
      <Circle cx={CENTER + 55} cy={CENTER + 120} r={0.8} fill="#F472B6" opacity="0.65" />
      <G transform={`rotate(-18 ${CENTER} ${CENTER})`}>
        <Ellipse cx={CENTER} cy={CENTER} rx={84} ry={22} stroke="url(#ringGlow)" strokeWidth={14} fill="none" opacity="0.45" />
        <Ellipse cx={CENTER} cy={CENTER} rx={80} ry={19} stroke="#F0ABFC" strokeWidth="3" fill="none" opacity="0.9" />
      </G>
      <Circle cx={CENTER} cy={CENTER} r={52} fill="url(#saturnBody)" />
      <G transform={`rotate(-18 ${CENTER} ${CENTER})`}>
        <Ellipse cx={CENTER} cy={CENTER} rx={80} ry={19} stroke="#FAE8FF" strokeWidth="2.5" fill="none" opacity="0.95" strokeDasharray="125 145" strokeDashoffset="0" />
      </G>
      <Circle cx={CENTER + 55} cy={CENTER + 60} r={10} fill="url(#moonGrad)" />
    </Svg>
  );
};

const styles = StyleSheet.create({
  svg: {
    alignSelf: 'center',
  },
});