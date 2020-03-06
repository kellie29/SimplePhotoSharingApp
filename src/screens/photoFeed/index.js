import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Linking } from 'react-native'
import { styles } from './styles';
import * as Components from '../../components'
import * as Util from '../../helpers'
let filteredImage
class PhotoFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [{
                label: "GrayScale",
                value: "1",
            },
            {
                label: "Color",
                value: "2"
            }],
            loader: true,
            imagesFeed: [],
            tone: true
        }
    }
    componentWillUpdate(nextProps, nextState) {
        try {
            if(this.props.navigation.state.params != nextProps.navigation.state.params ){
              const linkedId =  this.props.navigation.state.params.secondId
              console.log("filtered image",filteredImage ,"id",linkedId)

              if(this.state.imagesFeed.length >0){
               filteredImage = this.state.imagesFeed.filter(data => data.id == linkedId );
              console.log("filtered image",filteredImage ,"id",linkedId)
              this.setState({
                  imagesFeed:filteredImage
              })
              }
    
            }
            
        } catch (error) {
            console.log('showing error',error)
            
        }
       

    }

    componentDidMount() {
        Util.getImagesFeed(
            (response) => {
                console.log("[imageFeed], showing images array")
                this.setState({ loader: false })
                if (response.length > 0) {
                    this.setState({
                        imagesFeed: response
                    })
                }
            },
            (error) => {
                this.setState({ loader: false })
            })

    }
    toneChanger(value) {
        if (value == 1) {
            this.setState({ tone: true })
        }
        else {
            this.setState({ tone: false })
        }
    }

    render() {
        console.log("showing proops ",this.state.imagesFeed)
        if (this.state.loader) {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        const { options } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.switchContainer}>
                    <Components.CustomSwitch
                        options={options}
                        initial={0}
                        onPress={value => this.toneChanger(value)}
                        style={styles.switch}
                        borderRadius={0}
                        textStyle={{ color: "#000" }}
                        selectedColor={{ color: "#000" }}
                        height={30}
                        selectedTextContainerStyle={{ backgroundColor: "#96A9F2" }}
                    />
                </View>
                <View style={styles.lisitngContainer}>
                    <FlatList
                        data={this.state.imagesFeed}
                        extraData = {this.state.imagesFeed}
                        renderItem={({ item, index }) => (
                            <Components.ImageCard
                                showGreyScale={this.state.tone}
                                {...item}
                                index={index}
                            />
                        )}
                    />
                </View>
            </View>
        );
    }
}
export default PhotoFeed;
