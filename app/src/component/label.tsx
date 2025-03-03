import { Text, StyleSheet, TextStyle } from 'react-native';

interface LabelProps {
    text: string;
    style?: TextStyle;
    variant?: 'header' | 'body' | 'caption';
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  }
  
  export const Label: React.FC<LabelProps> = ({ 
    text, 
    style, 
    variant = 'body',
    fontSize,
    fontWeight 
  }) => {
    return (
      <Text style={[
        styles[variant],
        fontSize && styles[`fontSize${fontSize}`],
        fontWeight && styles[`fontWeight${fontWeight}`],
        style
      ]}>
        {text}
      </Text>
    );
  };
  
  const styles = StyleSheet.create({
    // ... existing code ...
  
    // Font Sizes
    fontSizexs: {
      fontSize: 12,
    },
    fontSizesm: {
      fontSize: 14,
    },
    fontSizemd: {
      fontSize: 16,
    },
    fontSizelg: {
      fontSize: 18,
    },
    fontSizexl: {
      fontSize: 20,
    },
    fontSize2xl: {
      fontSize: 24,
    },
  
    // Font Weights
    fontWeightnormal: {
      fontWeight: '400',
    },
    fontWeightmedium: {
      fontWeight: '500',
    },
    fontWeightsemibold: {
      fontWeight: '600',
    },
    fontWeightbold: {
      fontWeight: '700',
    },
  });