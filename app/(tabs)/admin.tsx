import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AdminScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>
        Manage users, events, attendance, and reports.
      </Text>

      <View style={styles.card}>
        <Ionicons name="people-outline" size={32} color="#FF5D8F" />
        <Text style={styles.cardTitle}>Manage Users</Text>
        <Text style={styles.cardText}>
          Add, update, and manage student and teacher accounts.
        </Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="calendar-outline" size={32} color="#FF5D8F" />
        <Text style={styles.cardTitle}>Manage Events</Text>
        <Text style={styles.cardText}>
          View, edit, and close school events.
        </Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="qr-code-outline" size={32} color="#FF5D8F" />
        <Text style={styles.cardTitle}>Attendance Records</Text>
        <Text style={styles.cardText}>
          Monitor and correct attendance records.
        </Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="stats-chart-outline" size={32} color="#FF5D8F" />
        <Text style={styles.cardTitle}>Reports</Text>
        <Text style={styles.cardText}>
          View attendance summaries and system reports.
        </Text>
      </View>
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
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#A86A7D',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD4E1',
    padding: 20,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF5D8F',
    marginTop: 10,
    marginBottom: 5,
  },

  cardText: {
    fontSize: 14,
    color: '#A86A7D',
    lineHeight: 20,
  },
});