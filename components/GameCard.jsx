import { StyleSheet, Text, View, Image } from 'react-native';


export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 48,
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
  
    },
    description: {
      color: '#eee',
      fontSize: 16,
    },
    score: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    },
  });