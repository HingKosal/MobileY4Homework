import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ListItem from './components/ListItem';
export default () => {
  const items = ['Math', 'Physic', 'Chemistry', 'History', 'Biology'];
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <View>
      <ListItem
        items={items}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </View>
  );
};
