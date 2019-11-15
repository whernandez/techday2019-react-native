import {Button, View} from 'react-native';
import * as React from 'react';
import CustomHeader from './CustomHeader';

export default class Instagram extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{flex: 1}}>
                    <CustomHeader portada={require('./instagram.jpg')}/>
                </View>
                <View>
                    <Button
                        color={'#08a0e9'}
                        title="Twitter"
                        onPress={() => navigate('Twitter')}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Button
                        color={'#4fce5d'}
                        title="WhatsApp"
                        onPress={() => navigate('WhatsApp')}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Button
                        color={'blue'}
                        title="Facebook"
                        onPress={() => navigate('Facebook')}
                    />
                </View>
            </View>
        );
    }
}
