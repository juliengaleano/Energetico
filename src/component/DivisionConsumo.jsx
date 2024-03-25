import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DivisionConsumo = ({consumoTotal, valor, horas, resultado, consumosemana, consumoQuincenal, consumoMes}) => {
  const [costo, setcosto]=useState(0);
  const cuantomecuesta = () => {
    const operacion = consumoTotal * valor * horas;
    setcosto(operacion);
    console.log(costo);
    if(consumoTotal === 0){
      setcosto(0);
    }
    
  }
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.item}>
      <Text style={styles.title}>Consumo KW</Text>
        <Text style={styles.xkwh}> {consumoTotal}</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.title}>consumo horas</Text>
        <Text style={styles.xkwh}> {horas} </Text>
      </View>
      
      
    </View>
    <TouchableOpacity style={styles.btncalcularprecios} onPress={cuantomecuesta}>
    <Text style={styles.xkwh}>CUANTO ME CUESTA </Text>
    </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.titleresul}>consumo dinero</Text>
      <Text style={styles.xkwh}> ${costo} </Text>
      
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Flexbox horizontal
    justifyContent: 'space-between', // Distribución equitativa del espacio entre los items
    alignItems: 'center', // Centra verticalmente los items
    padding: 20,
    backgroundColor: '#85AB8D',
    width:'100%',
    borderRadius:10
  },
  item: {
    flex: 1, // Cada item ocupa la misma cantidad de espacio
    backgroundColor: '#FF7140',
    marginHorizontal: 2,
    padding: 10,
    borderRadius:10,
    borderColor: 'white',
    borderWidth: 1,
  },
  itemresultado: {
    flex: 1, // Cada item ocupa la misma cantidad de espacio
    backgroundColor: '#FF7140',
    marginHorizontal: 2,
    padding: 20,
    borderRadius:10,
    borderColor: '#92FF40',
    borderWidth: 1,
  },
  
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
    color:'white',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor:'#687CFF',
    borderRadius:10,
    fontSize:15 
  },
  titleresul: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
    color:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius:10,
    fontSize:15,
    padding:10 
  },
  xkwh:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  },
  btncalcularprecios :{
    backgroundColor: '#40FF68',
    padding: 10,
    borderRadius:10,
    margin:5,
  }
});

export default DivisionConsumo;
