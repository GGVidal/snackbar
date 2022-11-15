import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import React from 'react';
import {AnimatedScroll} from './src/components/AnimatedScroll';

const App = () => {
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AnimatedScroll
          lastContentOffset={lastContentOffset}
          isScrolling={isScrolling}
          translateY={translateY}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            dolor officiis, odit obcaecati dolorem autem, perspiciatis corrupti,
            impedit veritatis quod harum error similique. Nesciunt vel molestiae
            natus corrupti unde dolores. Enim officia nihil pariatur molestiae
            ipsum tenetur soluta facere sequi optio praesentium. Et minima
            cupiditate porro corrupti perferendis laborum deleniti autem
            laboriosam eligendi impedit accusantium voluptas, perspiciatis,
            atque sapiente. Fugit, delectus molestiae laborum minus eum amet
            nesciunt autem, vitae excepturi blanditiis sunt deleniti. Fugiat
            beatae laborum provident consectetur quod nobis officia deleniti
            amet omnis ullam nisi commodi eius, cumque laboriosam corrupti
            impedit et perspiciatis sequi quo itaque animi! Nesciunt, quo!
          </Text>
        </AnimatedScroll>
        <Animated.View style={[styles.action, actionBarStyle]}>
          <Text style={styles.actionItem}>Comment</Text>
          <Text style={styles.actionItem}>Like</Text>
          <Text style={styles.actionItem}>Dislike</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
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
  actionItem: {
    color: '#fff',
  },
});

export default App;
