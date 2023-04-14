import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import InfoCard from './InfoCard';

const MovieScreen = ({route}: any): JSX.Element => {
  const {movie} = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w780${movie?.backdrop_path}`}}
      />
      <InfoCard movie={movie} />
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#212121',
  },
});
