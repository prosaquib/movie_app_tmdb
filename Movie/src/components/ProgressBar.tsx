/* components/ProgressBar.js*/
import React from 'react';
import {View, StyleSheet} from 'react-native';
/**
 *Just a bit of CSS to show vote_average on a scale of 100.
 */
const ProgressBar = ({vote_average}: any): JSX.Element => {
  return (
    <View style={styles.main}>
      <View style={[styles.child, {width: Math.abs(10 * vote_average)}]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  main: {
    width: 100,
    height: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
    marginRight: 10,
  },
  child: {
    position: 'absolute',
    height: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
  },
});
