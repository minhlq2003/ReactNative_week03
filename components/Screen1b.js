import { Text, Image, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import lock_img from '../assets/image/padlock_icon.png'
import email_icon from '../assets/image/email_icon.png'
export default function App() {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <View>
          <Image style={styles.img01} source={lock_img}></Image>
        </View>
        <View>
          <Text style={styles.heading}>FORGET PASSWORD</Text>
        </View>
        <View>
          <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
        </View>
        <View style={styles.email}>
          <Image style={styles.img02} source={email_icon}></Image>
          <TextInput style={styles.input} placeholder='Email'/>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  img01:{
    width: 150,
    height: 150,
    marginBottom: 50
  },
  heading:{
    fontSize: 25,
    lineHeight: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  text:{
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 17,
    textAlign: 'center',
    marginBottom: 50
  },
  email:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#C4C4C4',
    margin: 30
  },
  img02:{
    width: 90,
    height: 50,
  },
  input:{
    backgroundColor: '#C4C4C4',
    width: 250
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
})