import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      colors={['#D1F4F6', '#D1F4F6', '#E5F4F5', '#D1F4F6', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View>
        <View>
          <Text style={styles.heading}>CODE</Text>
        </View>
        <View>
          <Text style={styles.heading2}>VERIFICATION</Text>
        </View>
        <View>
          <Text style={styles.text}>Enter ontime password sent on ++849092605798</Text>
        </View>
        <View style={styles.codeContainer}>
          <View style={styles.square}/>
          <View style={styles.square}/>
          <View style={styles.square}/>
          <View style={styles.square}/>
          <View style={styles.square}/>
          <View style={styles.square}/>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 50
  },
  heading:{
    fontSize: 60,
    fontWeight: '700',
    lineHeight: 70,
    textAlign: 'center',
    marginBottom: 100
  },
  heading2:{
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 50
  },
  text:{
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 17,
    textAlign: 'center',
    marginBottom: 50
  },
  codeContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  square:{
    flex: 0.3,
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  button:{
    width: 340,
    height: 50,
    backgroundColor: '#E3C000',
    justifyContent:'center',
    marginTop: 30
  },
  buttonText:{
    color: '#000',
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21
  }
});