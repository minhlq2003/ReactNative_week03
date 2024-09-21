import React from 'react';
import {Text, View,StyleSheet, TouchableOpacity} from 'react-native'
const App = () =>{
  return(
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View>
        <Text style={styles.heading}>GROW YOUR BUSSINESS</Text>
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
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00CCF9',
    padding:20
  },
  logo:{
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 15,
    borderColor: '#000', 
    backgroundColor: '#00CCF9',
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
  }
})