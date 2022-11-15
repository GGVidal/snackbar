import React from 'react';
import {useAnimatedScrollHandler} from 'react-native-reanimated';
import {StyledAnimatedScroll} from './style';

interface ValueProps {
  value: number | boolean;
}

interface AnimatedScrollProps {
  children: React.ReactNode;
  lastContentOffset: ValueProps;
  isScrolling: ValueProps;
  translateY: ValueProps;
}

export const AnimatedScroll: React.FC<AnimatedScrollProps> = ({
  children,
  lastContentOffset,
  isScrolling,
  translateY,
}) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 100;
        console.log('scrolling up');
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        console.log('scrolling down');
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: _e => {
      isScrolling.value = true;
    },
    onEndDrag: _e => {
      isScrolling.value = false;
    },
  });
  return (
    <StyledAnimatedScroll scrollEventThrottle={16} onScroll={scrollHandler}>
      {children}
    </StyledAnimatedScroll>
  );
};
