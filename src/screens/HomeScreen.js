import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import StockCard from '../components/StockCard';
import TrendingItem from '../components/TrendingItem';

const HomeScreen = ({ navigation }) => {
    const amazonChartData = [10, 30, 50, 20, 70, 60, 90, 30, 50, 20, 70, 60, 90, 50, 20, 70, 60, 90];
    const teslaChartData = [10, 30, 50, 20, 70, 60, 90, 30, 50, 20, 70, 60, 90, 50, 20, 70, 60, 90];
    const lineChart = [10, 30, 50, 20, 70, 60, 90, 30, 50, 20, 70, 60, 90, 50, 20, 70, 60, 90, 30, 50, 20, 70, 60, 90, 50, 20, 70, 60, 90];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.toggle} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="th-large" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>TRADIO</Text>
                <TouchableOpacity style={styles.userImageContainer}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/free-photo/elegant-young-handsome-man-studio-fashion-portrait_1301-3920.jpg?t=st=1722948391~exp=1722951991~hmac=160a0439e3e76a9dd1f1ac0f3eec48660cacb570d7d63295e9ec08860bf7539f&w=740' }}
                        style={styles.userImage}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.greeting}>Hello Mark Brown,</Text>
            <Text style={styles.subGreeting}>Good morning</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stockCardsContainer}>
                <StockCard
                    name="Amazon"
                    symbol="AMZ"
                    value="$6,456.00"
                    profit="+2.5%"
                    color="#FF6B6B"
                    chartData={amazonChartData}
                    icon={"amazon"}
                />
                <StockCard
                    name="Tesla"
                    symbol="T"
                    value="$6,456.00"
                    color="#4D96FF"
                    chartData={teslaChartData}
                    icon={"tesla"}
                />
            </ScrollView>
            <Text style={styles.sectionTitle}>Trending</Text>
            <View style={styles.trendingList}>
                <TrendingItem chartData={lineChart} strokeColor="red" color="#fff" name="Bitcoin" symbol="BTC" value="$1,29,081" change="-10%" />
                <TrendingItem chartData={amazonChartData} strokeColor="green" color="#fff" name="TATA" symbol="TAT" value="$1,29,081" change="+10%" />
                <TrendingItem chartData={amazonChartData} strokeColor="green" color="#fff" name="Apple" symbol="APL" value="$1,29,081" change="+13.3%" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 20
    },
    header: {
        fontSize: 24,
    },
    userImageContainer: {
        padding: 2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },
    userImage: {
        width: 37,
        height: 37,
        borderRadius: 11,
    },
    toggle: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "black",
        padding: 4,
    },
    greeting: {
        fontSize: 16,
    },
    subGreeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stockCardsContainer: {
        marginBottom: 20,
        width: "100%",
        // borderWidth: 1
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    trendingList: {
        // Styling for trending list
    },
});

export default HomeScreen;
