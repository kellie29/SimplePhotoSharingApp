import {StyleSheet} from 'react-native'
import * as Util from '../../helpers'
 export const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     switchContainer:{
         display:'flex',
         height:Util.WP('20'),
         alignItems:'center',
         justifyContent:'center',
     },
     switch:{
         width:Util.WP('50'),
         borderWidth:Util.WP('0.3'),
         elevation:2,
     },
     lisitngContainer:{
         flex:1,
     },
     indicator:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'

     }
 })
