import {Button, View} from 'react-native';
import * as React from 'react';
import CustomHeader from './CustomHeader';

export default class WhatsApp extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{flex: 1}}>
                    <CustomHeader portada={require('./ws.png')}/>
                </View>
                <View>
                    <Button
                        color={'blue'}
                        title="Facebook"
                        onPress={() => navigate('Facebook')}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Button
                        color={'red'}
                        title="Instagram"
                        onPress={() => navigate('Instagram')}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Button
                        color={'#08a0e9'}
                        title="Twitter"
                        onPress={() => navigate('Twitter')}
                    />
                </View>
            </View>
        );
    }
}
