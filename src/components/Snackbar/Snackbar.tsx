import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {SnackbarProps} from './types';

export const Snackbar: React.FC<SnackbarProps> = ({translateY, children}) => {
  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.action, actionBarStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    position: 'absolute',
    bottom: 5,
    backgroundColor: '#000',
    width: '50%',
    justifyContent: 'space-around',
  },
});
