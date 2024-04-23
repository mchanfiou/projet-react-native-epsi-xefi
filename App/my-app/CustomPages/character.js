import React , {useState, useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Character({route}){
  const [results, setResults] = useState([]);
  const { id } = route.params;
  useEffect(() => {
    async function getCharacter ()  {
        try {
          const response = await fetch(`https://api-fantasygame.eu-4.evennode.com/get-characters/${id}`);
          const data = await response.json();
          setResults(data);         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    getCharacter();
  }, [id]);
  
  
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
        
    );
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
export default Character;