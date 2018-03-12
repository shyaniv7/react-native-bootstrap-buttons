import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button, { addTheme} from "react-native-bootstrap-buttons";
// addTheme( "lala", "green", "black", "blue", "red");

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.container}>
          <Text>Curved</Text>
          <Button containerStyle={styles.button} label="Button" buttonType="primary" />
          <Button containerStyle={styles.button} label="Button" buttonType="primary" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="info" />
          <Button containerStyle={styles.button} label="Button" buttonType="info" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="success" />
          <Button containerStyle={styles.button} label="Button" buttonType="success" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" disabled />
          <Button containerStyle={styles.button} label="Button" buttonType="link" />
          <Button containerStyle={styles.button} label="Button" buttonType="link" disabled />
        </View>
        <View style={styles.container}>
          <Text>Rounded</Text>
          <Button containerStyle={styles.button} label="Button" buttonType="primary" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="primary" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="info" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="info" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="success" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="success" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" disabled rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="link" rounded />
          <Button containerStyle={styles.button} label="Button" buttonType="link" disabled rounded />
        </View>
        <View style={styles.container}>
          <Text>Square</Text>
          <Button containerStyle={styles.button} label="Button" buttonType="primary" square />
          <Button containerStyle={styles.button} label="Button" buttonType="primary" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" square />
          <Button containerStyle={styles.button} label="Button" buttonType="outline" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" square />
          <Button containerStyle={styles.button} label="Button" buttonType="warning" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="info" square />
          <Button containerStyle={styles.button} label="Button" buttonType="info" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="success" square />
          <Button containerStyle={styles.button} label="Button" buttonType="success" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" square />
          <Button containerStyle={styles.button} label="Button" buttonType="danger" disabled square />
          <Button containerStyle={styles.button} label="Button" buttonType="link" square />
          <Button containerStyle={styles.button} label="Button" buttonType="link" disabled square />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 3,
  },
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 5
  },
});
