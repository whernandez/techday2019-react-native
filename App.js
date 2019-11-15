import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Facebook from './Facebook';
import Twitter from './Twitter';
import WhatsApp from './WhatsApp';
import Instagram from './Instagram';

const RootStack = createStackNavigator(
    {
        Facebook: Facebook,
        Twitter: Twitter,
        WhatsApp: WhatsApp,
        Instagram: Instagram,
    },
    {
        initialRouteName: 'Facebook',
    },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
