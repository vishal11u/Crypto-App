// CandlestickChart.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import { CandlestickChart } from 'react-native-svg-charts';

const { width } = Dimensions.get('window');

const CandlestickChartComponent = ({ data }) => {
  return (
    <View style={{ height: 300, width }}>
      <CandlestickChart
        style={{ flex: 1 }}
        data={data}
        yAccessor={({ item }) => ({
          high: item.high,
          low: item.low,
          open: item.open,
          close: item.close,
        })}
        xAccessor={({ item }) => item.date}
        xScale={d3Scale.scaleTime}
        yExtent={[0, 100]}
      />
    </View>
  );
};

export default CandlestickChartComponent;