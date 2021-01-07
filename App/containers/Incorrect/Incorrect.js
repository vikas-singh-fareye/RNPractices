
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Header } from '@components'
import { DummyData, constants } from '@config'
import { styles } from '@styles'

class Incorrect extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Header onPress={this.props.navigation.goBack} />
                {this.renderItemsList()}    
            </View>
        )
    }
    
    renderItemsList() {
        return(
            <View style={styles.container}>
                <FlatList data={DummyData} renderItem={({ item, index }) => this.renderListItem(item, index)} keyExtractor={item => item.id} style={styles.container} ListHeaderComponent={this.renderListHeader} />
            </View>
        )
    }
    renderListHeader = () => {
        return(
            <View style={containerStyles.listHeaderContainer}>
                <Text style={styles.headingText}>{constants.listTitle}</Text>
            </View>
        )
    }
    
    renderListItem = (item, index) => {
        return(
            <View style={containerStyles.listItem}>
                <Text style={styles.subHeadingText}>{item.title}</Text>
            </View>
        )
    }

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

export default Incorrect
