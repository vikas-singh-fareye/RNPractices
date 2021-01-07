
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Header } from '@components'
import { DummyData, constants } from '@config'
import { styles } from '@styles'

const Correct = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header onPress={navigation.goBack} />
            <List data={DummyData} renderItem={({ item }) => <ListItem item={item} />} keyExtractor={item => item.id} style={styles.container} ListHeaderComponent={() => <ListHeader />} />
        </View>
    )
}

const List = (props) => {
    return(
        <View style={styles.container}>
            <FlatList { ...props } />
        </View>
    )
}

const ListHeader = () => {
    return(
        <View style={containerStyles.listHeaderContainer}>
            <Text style={styles.headingText}>{constants.listTitle}</Text>
        </View>
    )
}

const ListItem = ({ item }) => {
    return(
        <View style={containerStyles.listItem}>
            <Text style={styles.subHeadingText}>{item.title}</Text>
        </View>
    )
}

const containerStyles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: 'white',
        ...styles.shadows.bottom,
    },
    listHeaderContainer: {
        padding: 10,
        alignItems: 'center'
    }
})

export default Correct
