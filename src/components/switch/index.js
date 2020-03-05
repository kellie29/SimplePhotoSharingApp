import React from 'react';
import SwitchSelector from "react-native-switch-selector";
//Switch component to handle options like greyscale and colour
export const CustomSwitch = props => {
 return(
    <SwitchSelector
    {...props}
  />
 )
}
