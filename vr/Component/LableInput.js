import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class LableInput extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('image3.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.push('./Enquiry')
        }}>
        <Text
    style={{
              backgroundColor: 'black',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 2, -5]}],
            }}>
              Enquiry Section
    </Text>
    </VrButton>
        <Text
    style={{
              backgroundColor: 'black',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 1.5, -5]}],
            }}>
              Home Loan Section
    </Text>
    
    <Text
    style={{
              backgroundColor: 'black',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 1, -5]}],
            }}>
              Gold Loan Section
    </Text>



    <Text
    style={{
              backgroundColor: 'black',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0.5, -5]}],
            }}>
             Credit Card Section
    </Text>


         
    <Text
    style={{
              backgroundColor: 'black',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -5]}],
            }}>
             Vehicle Loan Section
    </Text>
         

      </View>
    );
  }
};

AppRegistry.registerComponent('LableInput', () => LableInput);
