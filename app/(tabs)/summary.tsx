import { StyleSheet, Text, View } from 'react-native';

export default function SummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Summary</Text>

      <View style={styles.card}>
        <Text style={styles.number}>12</Text>
        <Text style={styles.label}>Total Events</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>240</Text>
        <Text style={styles.label}>Total Attendance</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>95%</Text>
        <Text style={styles.label}>Attendance Rate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF5D8F',
    marginBottom: 25,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD4E1',
  },
  number: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FF5D8F',
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    color: '#A86A7D',
  },
});