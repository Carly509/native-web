import React from 'react';
import {View, Text, StyleSheet, Button, Platform, TextInput} from 'react-native';
import {Link} from "@react-navigation/web";


const isWeb = Platform.OS === 'web';


export default class Feed extends React.Component {
    static navigationOptions = {
                title: "Feed"
            }
            static path = "feed";
    render() {
        return  <View style={styles.container}>
            <Text>E lil yeeee feed screen</Text>
            <TextInput
            style={styles.contain}
            placeholder="Email"
          />
          <TextInput
          style={styles.contain}
          placeholder="Email"
        />
        <TextInput
        style={styles.contain}
        placeholder="Email"
      />
      <TextInput
      style={styles.contain}
      placeholder="Email"
    />
    <TextInput
    style={styles.contain}
    placeholder="Email"
  />
  <TextInput
  style={styles.contain}
  placeholder="Email"
/>
<TextInput
style={styles.contain}
placeholder="Email"
/>
<TextInput
style={styles.contain}
placeholder="Email"
/>
<TextInput
style={styles.contain}
placeholder="Email"
/>
            {
                                isWeb ?
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
            /> :  <Link routeName="Profile">Go Profile</Link>
                        }

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundColor: '#0f0',
                justifyContent: 'space-around',
                marginTop: '5%',
               margin: '22%',
               width: '60%',
              
            },
          }),
    },
    contain: {
        backgroundColor: '#ffe6ec',
    height: 50,
    width: 200,
    }
    
})
