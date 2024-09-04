import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

function CustomDrawerContent(props) {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 0, width: '80%', gap: 10 }}>
                    <Image
                        source={{ uri: 'https://thumbs.dreamstime.com/z/circle-trading-logo-design-template-circle-trading-logo-design-template-illustration-chart-bar-trading-circle-logo-vector-icon-212509819.jpg' }}
                        style={styles.userImage}
                    />
                    <Text style={styles.headerText}>TRADIO</Text>
                </View>
                <TouchableOpacity style={{ borderWidth: 1, padding: 4, borderRadius: 100, borderColor: "white" }} onPress={() => navigation.goBack()}>
                    <AntDesign name="leftcircle" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#F8F9FA',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 5,
    },
    username: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        // paddingTop: 10
        paddingTop: 0
    },
    header: {
        backgroundColor: '#007BFF',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
    },
    userImage: {
        width: 33,
        height: 33,
        borderRadius: 11,
    },
});

export default CustomDrawerContent;
