import {ReactNode} from 'react';
import {AnimatableValue} from 'react-native-reanimated';
import {ValueProps} from '../../types/value';

export interface SnackbarProps {
  translateY: AnimatableValue | ValueProps;
  children: ReactNode;
}
