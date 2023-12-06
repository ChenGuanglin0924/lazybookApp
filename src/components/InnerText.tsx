import React, {useMemo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export interface InnerTextProps extends TextProps {
  size?: 'small' | 'normal' | 'large';
  bold?: boolean;
}

const InnerText = (props: InnerTextProps) => {
  const {size = 'normal', bold, style, ...restProps} = props;

  const _style = useMemo(() => {
    const temp = [styles[size], style];
    if (bold) {
      temp.unshift(styles.bold);
    }
    return temp;
  }, [bold, size, style]);

  return <Text style={_style} {...restProps} />;
};

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  normal: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  bold: {
    fontWeight: '500',
  },
});

export default InnerText;
