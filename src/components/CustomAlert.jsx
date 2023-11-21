import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Modal, Animated, Easing, Platform } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomAlert = ({ message }) => {
    const [modalVisible, setModalVisible] = useState(true);
    const anim = useRef(new Animated.Value(0));

    const shake = useCallback(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(anim.current, {
                    toValue: -10,
                    duration: 70,
                    useNativeDriver: true,
                }),
                Animated.timing(anim.current, {
                    toValue: 10,
                    duration: 70,
                    useNativeDriver: true,
                }),
                Animated.timing(anim.current, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: 3 }
        ).start();
    }, []);

    useEffect(() => {
        modalVisible && shake();
    }, [modalVisible]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [modalVisible]);

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
            <Pressable
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(169, 169, 169, 0.5)', 
                    alignItems: 'center',
                    height: hp(100),
                }}
                onPress={() => {
                    setModalVisible(false);
                }}>
                <Pressable style={{}}>
                    <Animated.View style={{ transform: [{ translateY: anim.current }] }}>
                        <View
                            style={{
                                width: wp(90),
                                marginTop: Platform.OS === 'ios' ? hp(8) : hp(2),
                                borderWidth:2,
                                backgroundColor:'white',
                                borderColor:'red',
                                padding:hp(1),
                                borderRadius: 10,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Text style={textStyles.errorText}>{message}</Text>
                            </View>
                        </View>
                    </Animated.View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

export default CustomAlert;
