import {ValueProps} from '../../types/value';

export interface AnimatedScrollProps {
  children: React.ReactNode;
  lastContentOffset: ValueProps;
  isScrolling: ValueProps;
  translateY: ValueProps;
}
