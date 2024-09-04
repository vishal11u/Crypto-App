import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CandleStickChartComponent from '../components/CandleStickChart';

const TradingScreen = () => {
    const [timeframe, setTimeframe] = useState('15m');
    const symbol = 'BTCUSDT';

    return (
        <View style={styles.container}>
            <CandleStickChartComponent symbol={symbol} timeframe={timeframe} />
            <View style={styles.buttonContainer}>
                <Button title="1m" onPress={() => setTimeframe('1m')} />
                <Button title="5m" onPress={() => setTimeframe('5m')} />
                <Button title="15m" onPress={() => setTimeframe('15m')} />
                <Button title="1h" onPress={() => setTimeframe('1h')} />
                <Button title="4h" onPress={() => setTimeframe('4h')} />
                <Button title="1d" onPress={() => setTimeframe('1d')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
    },
});

export default TradingScreen;