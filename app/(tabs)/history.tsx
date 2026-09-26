import { useFocusEffect } from 'expo-router';
import { useCallback, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/colors';
import { useAuth } from '@/lib/auth';
import { getProfile } from '@/lib/profiles';
import { getAttendanceHistory, type AttendanceRecord } from '@/lib/database';
import { getTeacherEventAttendance } from '@/lib/attendance';

export default function HistoryScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [teacherEvents, setTeacherEvents] = useState<any[]>([]);
  const [studentRecords, setStudentRecords] = useState<AttendanceRecord[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const loadData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    const p = await getProfile(user.id);
    setProfile(p);

    const currentRole = p?.role ?? 'student';

    if (currentRole === 'teacher') {
      const events = await getTeacherEventAttendance(user.id);
      setTeacherEvents(events);
      setStudentRecords([]);
    } else {
      const records = await getAttendanceHistory(user.id ?? '');
      setStudentRecords(records);
      setTeacherEvents([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Loading records...</Text>
      </View>
    );
  }

  if (profile?.role === 'teacher') {
    if (teacherEvents.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Attendance History</Text>
          <Text style={styles.subtitle}>No events found.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Attendance History</Text>
        <FlatList
          data={teacherEvents}
          keyExtractor={(item: any) => item.eventId}
          contentContainerStyle={styles.list}
          renderItem={((info: any) => {
            const scannedItem = info.item as any;
            return (
              <View style={styles.card}>
                <Text style={styles.eventTitle}>{scannedItem.title}</Text>
                <Text style={styles.eventMeta}>Code: {scannedItem.eventCode}</Text>
                <Text style={styles.eventMeta}>Attendees: {scannedItem.attendeeCount}</Text>
                <Text style={styles.eventMeta}>Start: {scannedItem.startTime || '—'}</Text>
                <Text style={styles.eventMeta}>End: {scannedItem.endTime || '—'}</Text>
              </View>
            );
          })}
        />
      </View>
    );
  }

  if (studentRecords.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Attendance History</Text>
        <Text style={styles.subtitle}>
          No records yet. Scan a QR code to register your attendance.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance History</Text>
      <FlatList
        data={studentRecords}
        keyExtractor={(item: AttendanceRecord) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={(({ item: record }) => (
          <View style={styles.card}>
            <Text style={styles.eventTitle}>{record.eventTitle}</Text>
            <Text style={styles.eventMeta}>{record.eventId}</Text>
            <Text style={styles.eventMeta}>{formatDate(record.scannedAt)}</Text>
          </View>
        ))}
      />
    </View>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 32,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  eventMeta: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});