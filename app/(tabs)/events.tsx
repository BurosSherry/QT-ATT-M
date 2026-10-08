import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  const events = [
    {
      title: 'Founders Day Celebration',
      venue: 'School Gym',
      date: 'October 15, 2026',
      status: 'Open',
    },
    {
      title: 'IT Seminar',
      venue: 'Audio Visual Room',
      date: 'October 20, 2026',
      status: 'Open',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Available Events</Text>

      {events.map((event, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.info}>📍 {event.venue}</Text>
          <Text style={styles.info}>📅 {event.date}</Text>
          <Text style={styles.status}>{event.status}</Text>
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
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF5D8F',
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#A86A7D',
    marginBottom: 4,
  },
  status: {
    marginTop: 8,
    color: '#4CAF50',
    fontWeight: '700',
  },
});