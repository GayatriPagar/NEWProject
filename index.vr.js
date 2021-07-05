import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import ImageInput from './vr/Component/ImageInput.js';
import FormInput from './vr/Component/FormInput.js';
import LableInput from './vr/Component/LableInput.js';
import Enquiry from './vr/Component/Enquiry.js';

export default class WebVR extends React.Component {
  render(){
    return(
      <Router>
        <View>
        <Route exact path='/' component={ImageInput}/>
        <Route exact path='/FormInput' component={FormInput}/>
        <Route exact path='/LableInput' component={LableInput}/> 
        <Route exact path='/Enquiry' component={Enquiry}/> 

        </View>
      </Router>
    );
  }
}
  
AppRegistry.registerComponent('WebVR', () => WebVR);
