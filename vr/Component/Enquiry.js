import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,

} from 'react-vr';

export default class Enquiry extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('14.jpg')}/>
        
        <Image
         style={{
           height: 1.5,
            width: 1.8,
            layoutOrigin: [0.5, 0.5],
           transform: [{translate: [0, 0, -3]}]
          }}
         source={asset('sitting lady.png')}
       />
        <Image
         style={{
           height: 1.9,
            width: 1.6,
            layoutOrigin: [-0.5, 1.5],
           transform: [{translate: [0, -0.5, -5]}]
          }}
         source={asset('img2.png')}
       />
         
        <Image
         style={{
           height: 1.6,
            width: 1.4,
            layoutOrigin: [0.3, 4.5],
           transform: [{translate: [1, -1, -10]}]
          }}
         source={asset('Bubble.png')}
       />
       
      </View>
    );
  }
};