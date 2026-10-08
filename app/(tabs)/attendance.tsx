import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AttendanceScreen() {
  const records = [
    {
      event: 'Founders Day Celebration',
      date: 'October 15, 2026',
      status: 'Present',
    },
    {
      event: 'IT Seminar',
      date: 'October 20, 2026',
      status: 'Present',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Attendance Records</Text>

      {records.map((record, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.event}>{record.event}</Text>
          <Text style={styles.date}>{record.date}</Text>
          <Text style={styles.status}>{record.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF5D8F',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFD4E1',
  },
  event: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF5D8F',
  },
  date: {
    fontSize: 14,
    color: '#A86A7D',
    marginTop: 5,
  },
  status: {
    marginTop: 10,
    fontWeight: '700',
    color: '#4CAF50',
  },
});