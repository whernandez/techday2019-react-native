import {Button, View} from 'react-native';
import * as React from 'react';
import CustomHeader from './CustomHeader';

export default class Twitter extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{flex: 1}}>
                    <CustomHeader portada={require('./twitter.jpeg')}/>
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
                        color={'#4fce5d'}
                        title="WhatsApp"
                        onPress={() => navigate('WhatsApp')}
                    />
                </View>
            </View>
        );
    }
}
