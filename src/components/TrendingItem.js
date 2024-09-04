import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const TrendingItem = ({ name, symbol, value, change, chartData, color, strokeColor }) => {
    const navigation = useNavigation();
    const isPositive = change.startsWith('+');
    const screenWidth = Dimensions.get('window').width;

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('StockDetail', { name, symbol })}
        >
            <View style={styles.leftContent}>
                <View style={styles.iconPlaceholder}>
                    <Text style={styles.iconText}>{symbol[0]}</Text>
                </View>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{ overflow: "hidden", width: "40%", height: 40 }}>
                <LineChart
                    data={{
                        datasets: [{ data: chartData }]
                    }}
                    width={screenWidth * 0.6}
                    height={50}
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    chartConfig={{
                        backgroundGradientFrom: color,
                        backgroundGradientTo: color,
                        color: (opacity = 1) => strokeColor,
                        strokeWidth: 1,
                    }}
                    style={styles.chart}
                />
            </View>
            <View style={styles.rightContent}>
                <Text style={styles.value}>{value}</Text>
                <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
                    {change}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    iconText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    symbol: {
        fontSize: 14,
        color: '#666',
    },
    rightContent: {
        alignItems: 'flex-end',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    change: {
        fontSize: 14,
    },
    positive: {
        color: 'green',
    },
    negative: {
        color: 'red',
    },
    chart: {
        marginLeft: -65,
        marginTop: -10
    }
});

export default TrendingItem;