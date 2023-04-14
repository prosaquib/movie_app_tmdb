import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BackButton = ({navigation}: any): JSX.Element => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.pop()}>
      <Text style={styles.textContainer}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: 100,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 16,
    color: '#dec9b4',
    textAlign: 'justify',
  },
});
