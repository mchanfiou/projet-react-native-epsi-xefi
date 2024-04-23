import React, { useState} from 'react';
import {View, Text, ScrollView, StyleSheet } from 'react-native';

function List ({navigation}) {
  const [results, setResults] = useState([]);
  const URL = `https://api-fantasygame.eu-4.evennode.com/get-characters/`
  
  async function getId () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  getId();

  return (
    <View style={styles.container}>

          <ScrollView style={styles.results}>
            {results.map((result) => (
              <Text key={result.id}
              source={{ uri: result.previewURL }}
              style={styles.text} onPress={() => navigation.navigate('Personnage', { id: result.id })}>{result.name}{"\n"}{"\n"}{result.description}{"\n"}{"\n"}Rarity:{"\n"}{result.rarity}/5</Text>
            ))}
          </ScrollView>
          
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0"
  },
  input: {
    width: '75%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(169, 169, 169, 0.8)',
    borderRadius: 5,
    margin: 50,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent : 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  results: {
    marginTop: 20,
    
  },
  text: {
    width: '90%' ,
    margin: 20,
    height: 300,
    marginBottom: 25,
    alignContent: 'center',
    color: '#3B5998'
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '50%',
    marginLeft: '25%',
    padding: 10,
    alignItems: 'center',
    borderColor: 'gray', 
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default List;