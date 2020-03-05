import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Linking } from 'react-native'
import { styles } from './styles';
import * as Components from '../../components'
import * as Util from '../../helpers'
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
    componentDidMount() {
        Util.getImagesFeed(
            (response) => {
                console.log("[imageFeed], showing images array", response)
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
        Linking.addEventListener('url', this.handleOpenURL);

    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL(event) {
        console.log('in the url event ', event.url);
        const route = e.url.replace(/.*?:\/\//g, '');
        // do something with the url, in our case navigate(route)
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
                        renderItem={({ item }) => (
                            <Components.ImageCard
                                showGreyScale={this.state.tone}
                                {...item}
                            />
                        )}
                    />
                </View>
            </View>
        );
    }
}
export default PhotoFeed;
