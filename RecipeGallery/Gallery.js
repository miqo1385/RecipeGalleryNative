import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const DATA = [
  {
    id: 1,
    url: 'https://static01.nyt.com/images/2023/04/21/multimedia/hew-pastel-de-choclo-hvfb/hew-pastel-de-choclo-hvfb-master768.jpg?w=1280&q=75',
    description: 'Pastel de Choclo'
  },
  {
    id: 2,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKMRAVKmriiqFqfnQuYNaLVP56jXO1CUMajivf59eaw&s',
    description: 'Empanadas de Pino'
  },
  {
    id: 3,
    url:'https://weheartliving.com/wp-content/uploads/2015/10/MAIN-tomatican.jpg',
    description: 'Tomatican'
  },
  {
    id: 4,
    url:'https://www.chileanfoodandgarden.com/wp-content/uploads/2008/03/charquican-12-scaled.jpg',
    description: 'Charquican'
  },
  {
    id: 5,
    url:'https://blog.amigofoods.com/wp-content/uploads/2022/05/chilean-seafood-stew.jpg',
    description: 'Paila Marina'
  },
  {
    id: 6,
    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pantrucas_plato.jpg/640px-Pantrucas_plato.jpg',
    description: 'Pancutras'
  }
];

const Gallery = () => {
  const [imageVar, setImageVar] = useState(0);

  const handleNextPress = () => {
    setImageVar((imageVar + 1) % DATA.length); // Use modulo to loop back to the beginning
  };

  const handlePrevPress = () => {
    setImageVar(imageVar === 0 ? DATA.length - 1 : imageVar - 1); // If imageVar is 0, loop to the end, otherwise decrement
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: DATA[imageVar].url }} />
      <Text style={styles.tex}>{imageVar}: {DATA[imageVar].description}</Text>
      <Button style={styles.tex} onPress={handleNextPress} title="Next" />
      <Button style={styles.tex} onPress={handlePrevPress} title="Prev" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    backgroundColor: '#F5FCFF',
    borderColor: '#0099AA',
    borderWidth: 2,
    marginTop: 40,
    alignSelf: 'center' 
  },

  tex: {
    borderColor: '#AA0099',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    marginTop: 10 // Adjust this value as needed
  }
});

export default Gallery;

