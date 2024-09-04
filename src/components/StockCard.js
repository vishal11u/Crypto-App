import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';

const StockCard = ({ name, symbol, value, profit, color, chartData, icon }) => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: color }]}
            onPress={() => navigation.navigate('StockDetail', { name, symbol })}
        >
            <View style={styles.topRow}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.symbol}>{symbol}</Text>
            </View>
            <View style={styles.chartContainer}>
                <LineChart
                    data={{
                        datasets: [{ data: chartData }]
                    }}
                    width={screenWidth * 0.8}
                    height={100}
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    chartConfig={{
                        backgroundGradientFrom: color,
                        backgroundGradientTo: color,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 3,
                    }}
                    style={styles.chart}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={{ borderWidth: 1, padding: 5, borderRadius: 100, borderColor: "#fff" }}>
                    {icon && (
                        icon === "amazon" ? (
                            <FontAwesome name={icon} size={24} color="black" style={styles.icon} />
                        ) : (
                            <Fontisto name={icon} size={24} color="black" style={styles.icon} />
                        )
                    )}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Profit</Text>
                    {profit && <Text style={styles.profit}>{profit}</Text>}
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '42%',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginRight: 20
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    symbol: {
        color: 'white',
        fontSize: 14,
    },
    profit: {
        color: 'white',
        fontSize: 14,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    chartContainer: {
        alignItems: 'center',
        marginBottom: 5,
        overflow: "hidden"
    },
    chart: {
        borderRadius: 16,
        marginLeft: -55
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    icon: {
        marginRight: 0,
        borderRadius: 100,
        backgroundColor: "#fff",
        padding: 5
    },
    textContainer: {
        textAlign: "right",
        flex: 2,
        alignItems: "flex-end"
    },
    label: {
        color: 'white',
        fontSize: 14,
    },
});

export default StockCard;
