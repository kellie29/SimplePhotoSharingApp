import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,Linking} from 'react-native'
import { WP } from '../../helpers';
//ImageCard is an component for showing card having props image,author, and share function
export const ImageCard = props => {
    // console.log("showing passed props of item",props)
    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
            <Image
            source = {{uri:props.showGreyScale ?props.download_url +'?grayscale' :props.download_url}}
            style = {styles.imageStyle}
            />
            </View>
            <View style = {styles.details}>
                <Text>{props.author}</Text>
                <TouchableOpacity style = {styles.btnContainer}
                // onPress = {()=>{Linking.openURL(`sms:123456789?body=${props.showGreyScale ?props.download_url +'?grayscale' :props.download_url}`)}}>
                onPress = {()=>{console.log(`sms:123456789?body=photoapp://${props.index}`); Linking.openURL(`sms:123456789?body=photoapp://photo/${props.index}`);}}>
                <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        borderWidth:1,
        borderColor:"#000",
        margin:WP('5'),
        height:WP('82')
    },
    imageContainer:{
        display:'flex',

    },
    imageStyle:{
        height:WP('65'),
        width:WP('60'),
        marginTop:WP('3'),
        alignSelf:'center',
    },
    details :{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:WP('2')

    },
    btnContainer:{
        display:'flex',
        height:WP('8'),
        width:WP('20'),
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        elevation:1

    }
    

})