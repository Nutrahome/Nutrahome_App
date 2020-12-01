import React from 'react';
import { Button, View, ActivityIndicator, Image } from 'react-native';
import { ListItem, Avatar, Text } from 'react-native-elements'

function Nutritionist({ navigation }) {
  
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://reactjs.org/logo-og.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://reactjs.org/logo-og.png',
      subtitle: 'Vice Chairman'
    },
  ]

    return (
      <View>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: 50, height: 50 }}
        />
        <Text h3>Our Dietitians</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} size='large'/>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron/>
            </ListItem>
          ))
        }
      </View>
    );
}

export default Nutritionist