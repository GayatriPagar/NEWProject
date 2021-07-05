import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class ImageInput extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('image3.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.push('./FormInput')
        }}>
          <Text
            style={{
              backgroundColor: 'blue',
              fontSize: 0.2,
              fontWeight: '600',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.1,
              paddingRight: 0.1,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [1, 0, -3]}],
            }}>
         Welcome To VR JOURNEY !!!
          </Text>
        </VrButton>
        
      </View>
    );
  }
};