import React from 'react';
import {
  StyleSheet, SafeAreaView, View, StatusBar,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FabToBottomToolbar } from 'react-native-material-motion';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <FabToBottomToolbar
        fabIcon={<MaterialIcons name="share" />}
        renderItems={({ hideToolbar }) => [
          {
            icon: <MaterialIcons name="email" />,
            onPress: () => {
              hideToolbar();
              alert('Sending email');
            },
          },
          {
            icon: <MaterialIcons name="content-copy" />,
            onPress: () => {
              hideToolbar();
              alert('Link copied');
            },
          },
          {
            icon: <MaterialCommunityIcons name="google-plus" />,
            onPress: () => {
              hideToolbar();
              alert('Sharing on Google Plus');
            },
          },
          {
            icon: <MaterialCommunityIcons name="facebook" />,
            onPress: () => {
              hideToolbar();
              alert('Sharing on Facebook');
            },
          },
          {
            icon: <MaterialCommunityIcons name="twitter" />,
            onPress: () => {
              hideToolbar();
              alert('Sharing on Twitter');
            },
          },
        ]}
      />
    </View>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F34',
    position: 'relative',
  },
});
