import { StyleSheet, Text, View } from 'react-native';

export default function BuildTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Build Dock Cache Test</Text>
      <Text>This page exists only to add new code to the build.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
});