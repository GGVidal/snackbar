import {StyleSheet, Text} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import React from 'react';
import {Container, StyledSafeArea} from './style';
import {AnimatedScroll, Snackbar} from '../../components';

const Main: React.FC = () => {
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  return (
    <StyledSafeArea>
      <Container>
        <AnimatedScroll
          lastContentOffset={lastContentOffset}
          isScrolling={isScrolling}
          translateY={translateY}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo
            lectus, laoreet ut quam sit amet, tristique tempor elit. Proin
            tincidunt lacus varius quam dignissim, in euismod ipsum sodales.
            Donec viverra enim at tincidunt efficitur. In at quam elementum,
            finibus risus quis, maximus erat. Aliquam erat volutpat. Morbi at
            ligula quis metus tincidunt aliquet non quis justo. Nam tincidunt
            eros eget lectus mattis commodo eget consectetur ex. Praesent nisl
            quam, sodales et molestie eget, varius eu neque. Praesent sit amet
            diam lectus. Pellentesque volutpat leo sem, at sodales odio viverra
            vitae. Pellentesque ullamcorper lobortis ante sit amet ultricies.
          </Text>
        </AnimatedScroll>
        <Snackbar translateY={translateY}>
          <>
            <Text style={styles.actionItem}>Comment</Text>
            <Text style={styles.actionItem}>Like</Text>
            <Text style={styles.actionItem}>Dislike</Text>
          </>
        </Snackbar>
      </Container>
    </StyledSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  actionItem: {
    color: '#fff',
  },
});

export default Main;
