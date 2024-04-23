import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity ,ImageBackground ,StyleSheet, Text, View, Button } from 'react-native';



function Home() {
  return (
    <View style={styles.container}>
         
          <Text style={styles.titreGrand}>Legends of XEFI</Text>
          <Text style={styles.titre}>Bienvenue dans les Terres de Xefi</Text>
          <Text style={styles.p1}>Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. </Text>
          <Text style={styles.p2}>Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.</Text>
          <Text style={styles.titre}>Explorez des Paysages Envoûtants </Text>
          <Text style={styles.p1}>
Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. </Text>
          <Text style={styles.p2}>Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.</Text>
          <Text style={styles.titre}>Rencontrez des Personnages Inoubliables</Text>
          <Text style={styles.p1}>Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations.</Text>
          <Text style={styles.p1}>Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être.</Text>
          <Text style={styles.p2}>Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  titreGrand: {
    color: '#3B5998',
    fontSize: 24,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#c0c0c0',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10

  },
  titre: {
    color: '#3B5998',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  p1: {
    color: '#3B5998',
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10
  },
  p2: {
    color: '#3B5998',
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 40
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    marginLeft: '20%',
    padding: 10,
    alignItems: 'center',
    borderColor: '#c0c0c0', 
    backgroundColor: '#3B5998',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c0c0c0', 
  },
});

export default Home;