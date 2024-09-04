import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StockDetailScreen = ({ route }) => {
    const { symbol, name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Stock Page</Text>
            <View style={styles.stockInfo}>
                <Text style={styles.stockName}>{name}</Text>
                <Text style={styles.stockSymbol}>{symbol}</Text>
                <Text style={styles.stockValue}>$1,29,081</Text>
                <Text style={styles.stockChange}>+13.3%</Text>
            </View>

            <LineChart
                data={{
                    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                    datasets: [{
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }]
                }}
                width={350}
                height={200}
                chartConfig={{
                    backgroundColor: "#FFFFFF",
                    backgroundGradientFrom: "#FFFFFF",
                    backgroundGradientTo: "#FFFFFF",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 69, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

            <TouchableOpacity style={styles.tradeButton}>
                <Text style={styles.tradeButtonText}>TRADE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stockInfo: {
        marginBottom: 20,
    },
    stockName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    stockSymbol: {
        fontSize: 18,
        color: '#666',
    },
    stockValue: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 10,
    },
    stockChange: {
        fontSize: 18,
        color: 'green',
    },
    tradeButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    tradeButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default StockDetailScreen;