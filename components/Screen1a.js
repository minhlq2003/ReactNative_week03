import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const App = () =>{
  return(
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
      <View style={styles.logo}></View>
      <View>
        <Text style={styles.heading}>GROW YOUR BUSSINE</Text>
      </View>
      <View>
        <Text style={styles.text}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBorder}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading2}>HOW WE WORK?</Text>
      </View>
    </View>
    </LinearGradient>
  )
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#C7F4F6',
    padding:20,
  },
  logo:{
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 15,
    borderColor: '#000', 
    backgroundColor: '#C7F4F6',
    marginBottom:90
  },
  heading:{
    fontSize: 25,
    fontWeight:'700',
    color:'#000',
    marginBottom: 50,
    textAlign:'center',
  },
  text:{
    textAlign:'center',
    fontWeight:'700',
    fontSize: 15,
    marginBottom: 100
  },
  button:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
  buttonBorder:{
    backgroundColor:'#E3C000',
    width:119,
    height:48,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  btnText:{
    textAlign:'center',
    fontSize: 18,
    fontWeight: '700'
  },
  heading2:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 30,
  }
})