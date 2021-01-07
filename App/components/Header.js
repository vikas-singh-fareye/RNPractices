import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { commonAssets } from '@assets'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({ title='', onPress }) => {
    return(
        <SafeAreaView>
            <ImageBackground source={commonAssets.cover} style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={onPress} style={styles.backIconContainer}>
                        <Icon name="arrow-back-ios" size={30} color="#404040" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    backIconContainer: {
        padding: 15
    }
})

export default Header