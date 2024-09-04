import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import Tooltip from 'react-native-walkthrough-tooltip';

const { width } = Dimensions.get('window');

const Practice = ({ navigation }) => {
  const [timeframe, setTimeframe] = useState('1D');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');

  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  const holdingsData = [
    {
      name: "Equity",
      population: 50,
      color: "#4CAF50",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Options",
      population: 20,
      color: "#2196F3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Crypto",
      population: 20,
      color: "#FFC107",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Forex",
      population: 10,
      color: "#9C27B0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const tradeHeatmap = {
    '2023-08-01': { selected: true, selectedColor: '#4CAF50' },
    '2023-08-02': { selected: true, selectedColor: '#F44336' },
    '2023-08-03': { selected: true, selectedColor: '#9E9E9E' },
  };

  const renderTimeframeButtons = () => (
    <View style={styles.timeframeContainer}>
      {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((tf) => (
        <TouchableOpacity
          key={tf}
          style={[styles.timeframeButton, timeframe === tf && styles.activeTimeframe]}
          onPress={() => setTimeframe(tf)}
        >
          <Text style={[styles.timeframeText, timeframe === tf && styles.activeTimeframeText]}>{tf}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.performanceContainer}>
          <Text style={styles.sectionTitle}>Your Performance</Text>
          <Text style={styles.performanceValue}>+$1,234.56 (5.67%)</Text>
          <Text style={styles.performanceLabel}>Total Change</Text>
          {renderTimeframeButtons()}
          <LineChart
            data={performanceData}
            width={width - 40}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
              strokeWidth: 2,
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.holdingsContainer}>
          <Text style={styles.sectionTitle}>Your Holdings</Text>
          <Tooltip
            isVisible={tooltipVisible}
            content={<Text>{tooltipContent}</Text>}
            placement="top"
            onClose={() => setTooltipVisible(false)}
          >
            <PieChart
              data={holdingsData}
              width={width - 40}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
              style={styles.pieChart}
              onPress={(_, index) => {
                setTooltipContent(`${holdingsData[index].name}: ${holdingsData[index].population}%`);
                setTooltipVisible(true);
              }}
            />
          </Tooltip>
        </View>

        <View style={styles.heatmapContainer}>
          <Text style={styles.sectionTitle}>Trading Activity</Text>
          <Calendar
            markedDates={tradeHeatmap}
            markingType={'custom'}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    marginTop: 15
  },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  toggle: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    padding: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userImage: {
    width: 37,
    height: 37,
    borderRadius: 11,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  performanceContainer: {
    marginBottom: 30,
  },
  performanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  performanceLabel: {
    fontSize: 14,
    color: '#757575',
  },
  timeframeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  timeframeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  activeTimeframe: {
    backgroundColor: '#2196F3',
  },
  timeframeText: {
    color: '#757575',
  },
  activeTimeframeText: {
    color: '#ffffff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  holdingsContainer: {
    marginBottom: 30,
  },
  pieChart: {
    borderRadius: 16,
  },
  heatmapContainer: {
    marginBottom: 30,
  },
});

export default Practice;