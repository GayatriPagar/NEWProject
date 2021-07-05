import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  TextInput,
} from 'react-vr';
export default class  FormInput extends React.Component{
render(){
  return(

    <View>
        <Pano source={asset('image3.jpg')}/>
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
              Email ID : abc@gmail.com
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
              Password : ********
    </Text>


          <VrButton onClick={()=>{
          this.props.history.push('./LableInput')
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
              transform: [{translate: [0, -0.3, -5]}],
            }}>
              SUBMIT
    </Text>
    </VrButton>
    {/* <Form onSubmit={this.handleSubmit}>
        <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email' />

        <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password' />

        <CustomButton type='submit'>SIGN IN</CustomButton>
    </Form> */}
    </View>

  );
}
}
