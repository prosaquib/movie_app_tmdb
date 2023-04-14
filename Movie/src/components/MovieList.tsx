import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMoviesAction} from '../slices/movie.slice';
const screen = Dimensions.get('window');

const Movielist = ({navigation}: any): JSX.Element => {
  const dispatch: any = useDispatch();
  const {loading} = useSelector((state: any) => state.movie);
  const [movies, setMovies] = useState<Record<string, any>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchNow, setSearchNow] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchMoviesAction(searchTerm))
      .then(function (res: any) {
        setMovies(res?.data?.results);
      })
      .catch(function (err: any) {
        console.log('Error fetching movies', err);
      });
  }, [searchNow]);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.spinner}>
          <View style={styles.spinnerOverlay} />
          <ActivityIndicator size={50} color={'#039BE5'} />
        </View>
      )}
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movies[0]?.backdrop_path}`,
          }}
          style={styles.banner}
        />
        <View style={styles.bannerInfoCard}>
          <Text style={styles.bannerTitle}>
            {movies[0]?.original_title.substr(0, 20)}
          </Text>
          <Text style={styles.bannerOverview}>
            {movies[0]?.overview.substr(0, 80) + '...'}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder={'search movies'}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            onSubmitEditing={() => setSearchNow(!searchNow)}
          />
        </View>
        <View style={styles.movieListCard}>
          <FlatList
            data={movies}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={styles.movieCard}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Movie', {movie: item})}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w780${item?.poster_path}`,
                      }}
                      style={{width: 250, height: 200}}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Movielist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: 0,
  },
  textContainer: {
    fontSize: 16,
    color: '#dec9b4',
    textAlign: 'justify',
    paddingLeft: 5,
    paddingRight: 5,
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 10,
    size: 100,
  },
  spinnerOverlay: {
    opacity: 0.75,
    backgroundColor: '#ccc',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  banner: {width: 500, height: 200},
  bannerInfoCard: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 50,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(21,21,21,0.5)',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.2,
  },
  bannerOverview: {
    color: 'grey',
  },
  inputCard: {
    position: 'absolute',
    top: -40,
    margin: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
  },
  input: {
    padding: 10,
    flex: 1,
  },
  movieListCard: {
    top: screen.height * 0.05,
  },
  movieCard: {
    flex: 1,
    height: 200,
    margin: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 5,
  },
});
