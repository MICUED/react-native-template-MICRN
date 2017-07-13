import React, { Component } from "react"
import PropTypes from "prop-types"
import Camera from "react-native-camera"
import
{
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    View,
    Animated,
    Easing,
    Text
} from "react-native"

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    topView: {
        position: "absolute",
        top: 0
    },
    rightView: {
        position: "absolute",
        right: 0
    },
    bottomView: {
        position: "absolute",
        bottom: 0
    },
    leftView: {
        position: "absolute",
        left: 0
    },
    scanView: {
        alignItems: "center",
        justifyContent: "center"
    },
    topLeftCorner: {
        position: "absolute",
        top: 0,
        left: 0
    },
    bottomLeftCorner: {
        position: "absolute",
        bottom: 0,
        left: 0
    },
    topRightCorner: {
        position: "absolute",
        top: 0,
        right: 0
    },
    bottomRightCorner: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
})
class QRScanInnerView extends Component {
    static defaultProps = {
        maskColor: "rgba(0,0,0,0.5)",
        cornerColor: "#d92121",
        borderColor: "#000",
        rectHeight: 200,
        rectWidth: 250,
        borderWidth: 0,
        cornerWidth: 4,
        cornerLength: 20,
        scanBarAnimateTime: 4000,
        scanBarColor: "#e64545",
        scanBarHeight: 1.5,
        scanBarMargin: 6,
        hintText: "扫描二维码/条码",
        hintTextStyle: {
            color: "#fff", 
            fontSize: 14,
            backgroundColor:"transparent"
        },
        hintTextPosition: 130,
    }

    constructor(props) {
        super(props)
        this.state = {
            topWidth: Dimensions.get("window").width,
            topHeight: 0,
            leftWidth: 0,
            animateVal: new Animated.Value(0),
        }
    }
    calRectPosition(e) {
        let rectSize = e.layout
        this.setState({
            topHeight: rectSize.y,
            leftWidth: rectSize.x,
        })
    }
    render() {
        const animatedStyle = {
            transform: [
                {translateY: this.state.animateVal}
            ]
        }

        return (
            <View
                style={[styles.container]}>
                <View style={[styles.scanView, {height: this.props.rectHeight,width: this.props.rectWidth}]}
                    onLayout={({nativeEvent: event}) => this.calRectPosition(event)}
                >
                    <View style={{
                        height: this.props.rectHeight,
                        width: this.props.rectWidth,
                        borderWidth: this.props.borderWidth,
                        borderColor: this.props.borderColor
                    }}>

                        <Animated.View
                            style={[
                                animatedStyle,]}>
                            <View style={{
                                marginRight: this.props.scanBarMargin,
                                marginLeft: this.props.scanBarMargin,
                                backgroundColor: this.props.scanBarColor,
                                height: this.props.scanBarHeight,
                            }}/>
                        </Animated.View>

                    </View>
                    <View style={[
                        {borderColor: this.props.cornerColor},
                        {
                            height: this.props.cornerLength,
                            width: this.props.cornerLength
                        },
                        styles.topLeftCorner,
                        {
                            borderLeftWidth: this.props.cornerWidth,
                            borderTopWidth: this.props.cornerWidth,
                        }
                    ]}/>
                    <View style={[
                        {borderColor: this.props.cornerColor},
                        {
                            height: this.props.cornerLength,
                            width: this.props.cornerLength
                        },
                        styles.topRightCorner,
                        {
                            borderRightWidth: this.props.cornerWidth,
                            borderTopWidth: this.props.cornerWidth,
                        }
                    ]}/>
                    <View style={[
                        {borderColor: this.props.cornerColor},
                        {
                            height: this.props.cornerLength,
                            width: this.props.cornerLength
                        },
                        styles.bottomLeftCorner,
                        {
                            borderLeftWidth: this.props.cornerWidth,
                            borderBottomWidth: this.props.cornerWidth,
                        }
                    ]}/>
                    <View style={[
                        {borderColor: this.props.cornerColor},
                        {
                            height: this.props.cornerLength,
                            width: this.props.cornerLength
                        },
                        styles.bottomRightCorner,
                        {
                            borderRightWidth: this.props.cornerWidth,
                            borderBottomWidth: this.props.cornerWidth,
                        }
                    ]}/>
                </View>

                <View style={[
                    {backgroundColor: this.props.maskColor},
                    styles.topView,
                    {
                        bottom: this.state.topHeight + this.props.rectHeight,
                        width: this.state.topWidth,
                    }
                ]}/>

                <View style={[
                    {backgroundColor: this.props.maskColor},
                    styles.leftView,
                    {
                        height: this.props.rectHeight,
                        width: this.state.leftWidth,
                    }
                ]}/>

                <View style={[
                    {backgroundColor: this.props.maskColor},
                    styles.rightView,
                    {
                        height: this.props.rectHeight,
                        width: this.state.leftWidth,
                    }]}/>

                <View style={[
                    {backgroundColor: this.props.maskColor},
                    styles.bottomView,
                    {
                        top: this.state.topHeight + this.props.rectHeight,
                        width: this.state.topWidth,
                    }]}/>
                <View style={{position: "absolute", bottom: this.props.hintTextPosition}}>
                    <Text style={this.props.hintTextStyle}>{this.props.hintText}</Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.lineAnimateFunc()
    }

    lineAnimateFunc() {
        this.state.animateVal.setValue(0)
        Animated.timing(this.state.animateVal, {
            toValue: this.props.rectHeight,
            duration: this.props.scanBarAnimateTime,
            easing: Easing.linear
        }).start(() => this.lineAnimateFunc())
    }
}
export default class QRScan extends Component {
    static propTypes = {
        maskColor: PropTypes.string,
        borderColor: PropTypes.string,
        cornerColor: PropTypes.string,
        borderWidth: PropTypes.number,
        cornerWidth: PropTypes.number,
        cornerLength: PropTypes.number,
        rectHeight: PropTypes.number,
        rectWidth: PropTypes.number,
        bottomMenuHeight: PropTypes.number,
        scanBarAnimateTime: PropTypes.number,
        scanBarColor: PropTypes.string,
        scanBarHeight: PropTypes.number,
        scanBarMargin: PropTypes.number,
        hintText: PropTypes.string,
        hintTextStyle: PropTypes.object,
        hintTextPosition:PropTypes.number,
        onScanResultReceived:PropTypes.func,
        textView: PropTypes.func,
        topView: PropTypes.func,
        bottomView: PropTypes.func
    }

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Camera
                    onBarCodeRead={this.props.onScanResultReceived.bind(this)}
                    style={{flex: 1}}
                >
                    {this.props.topView}
                    <QRScanInnerView
                        maskColor={this.props.maskColor}
                        cornerColor={this.props.cornerColor}
                        borderColor={this.props.borderColor}
                        rectHeight={this.props.rectHeight}
                        rectWidth={this.props.rectWidth}
                        borderWidth={this.props.borderWidth}
                        cornerWidth={this.props.cornerWidth}
                        cornerLength={this.props.cornerLength}
                        bottomMenuHeight={this.props.bottomMenuHeight}
                        scanBarAnimateTime={this.props.scanBarAnimateTime}
                        scanBarColor={this.props.scanBarColor}
                        scanBarHeight={this.props.scanBarHeight}
                        scanBarMargin={this.props.scanBarMargin}
                        hintText={this.props.hintText}
                        hintTextStyle={this.props.hintTextStyle}
                        hintTextPosition={this.props.hintTextPosition}
                    />
                </Camera>
            </View>
        )
    }
}