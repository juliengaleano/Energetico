import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';

//constantes y usestates 
const ConsumoDatosComponent = ({valor}) => {
//consumos
  const [consumoTotal, setConsumoTotal] = useState(0);
//lista de electrodomesticos
  const [electrodomesticos, setElectrodomesticos] = useState([]);
//agregar nuevos electrodomesticos a la lista de arriba  
  const [nuevoElectrodomestico, setNuevoElectrodomestico] = useState('');
// se agrega un input para ver el tiempo de uso  
  const [nuevoElectrodomesticotiempo, setNuevoElectrodomesticotiempo] = useState('');
// se agrega  para  tomar el valor de la suma de las horas de uso 
const [horas,sethoras]=useState(0)  ;
//se agrega un input para ingresar el consumo   
  const [consumoElectrodomestico, setConsumoElectrodomestico] = useState('');
// se agrega funcion para mostra el resultado de hora semana y mes   
  const [resultado, setResultado] = React.useState(null);
  const [consumosemana, setconsumosemana] = useState(0);
  const [consumoQuincenal, setconsumoQuincenal] = useState(0);
  const [consumoMes, setconsumoMes] = useState(0);
// se agrega para configurar animacion
  const animatedValue = new Animated.Value(1);
  // Lógica para obtener el costo por kWh según el país seleccionado
  const obtenerCostoPorKwh = () => {
    const costosPorPais = {
      'Mexico': 0.15,
      'colombia': 800,
      'España': 0.20,
      // Otros países...
    };

    return costosPorPais[paisSeleccionado] || 0;
  };

  const agregarElectrodomestico = () => {
    if (nuevoElectrodomestico && consumoElectrodomestico) {
      const nuevoConsumoTotal = consumoTotal + parseFloat(consumoElectrodomestico);
      const nuevotiempo =  horas + parseFloat(nuevoElectrodomesticotiempo);
      setConsumoTotal(nuevoConsumoTotal);
      sethoras(nuevotiempo);
      

      const nuevoElectrodomesticos = [
        ...electrodomesticos,
        {
          nombre: nuevoElectrodomestico,
          consumo: parseFloat(consumoElectrodomestico),
          tiempo: nuevoElectrodomesticotiempo
        },
      ];

      setElectrodomesticos(nuevoElectrodomesticos);
      setNuevoElectrodomestico('');
      setConsumoElectrodomestico('');
      setNuevoElectrodomesticotiempo('');

// Animación del resultado de la suma
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.2,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.spring(animatedValue, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
//borrar array electrodomesticos
  const Borrardatos= () =>{
    setElectrodomesticos([]);
    setConsumoTotal(0);
    sethoras(0);
    
  }
//agregamos  la funcion para hacer la suma tomando el  estaod del valo de  countries 
const realizarOperacion = () => {
  // Realizar operaciones matemáticas utilizando el valor del estado
  const consumofinal = valor * consumoTotal;
  const consumosemanal = consumofinal * 8;
  const consumoQuincenales = consumofinal * 15;
  const consumoMensual = consumofinal * 30;
  setconsumosemana(consumosemanal);
  setconsumoQuincenal(consumoQuincenales);
  setconsumoMes(consumoMensual);
  setResultado(consumofinal);
  console.log('Resultado de la operación:', consumosemanal);
  console.log('Resultado de la operación:', consumoQuincenales);
  console.log('Resultado de la operación:', consumoMensual);
  
  
};


  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };
// vamos a renderisar el componente  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> ¡COMENCEMOS!</Text>
      
      <View style={styles.inputContainer}>

      <Text style={styles.header}> ¿Cuantos Dispositivos Mantienes Conectados?</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del electrodoméstico"
          value={nuevoElectrodomestico}
          onChangeText={(text) => setNuevoElectrodomestico(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Consumo en kWh"
          keyboardType="numeric"
          value={consumoElectrodomestico}
          onChangeText={(text) => setConsumoElectrodomestico(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="tiempo de uso"
          keyboardType="numeric"
          value={nuevoElectrodomesticotiempo}
          onChangeText={(text) => setNuevoElectrodomesticotiempo(text)}
        />
        
        <Button color="#56C596"  title="Agrega tus Electrodoméstico" onPress={agregarElectrodomestico} />
        

        <Text style={styles.label}>Electrodomésticos Agregados:</Text>
        {electrodomesticos.map((electrodomestico, index) => (
          <Text key={index} style={styles.listado}>
            {electrodomestico.nombre}: {electrodomestico.consumo} kWh, Uso {electrodomestico.tiempo} HORAS
          </Text>
          
        ))}
        <Button  title="Borrar listado" color="red" fontWeight="bold" onPress={Borrardatos} />
        
      </View>
      <Animated.Text style={[styles.totalLabel, animatedStyle]}>
         Consumo  de tus electrodomesticos : {consumoTotal} kWh  tiempo {horas}
        </Animated.Text>
        <Text>Valor en el Componente Hijo: {valor}</Text>
        
        <TouchableOpacity  style={styles.botoninfo} onPress={realizarOperacion}  >
            <Text style={{color:'white', fontWeight: 'bold', fontSize:20}}> Mira tu consumo sera de :</Text>
        </TouchableOpacity>
      
      {resultado !== null && (
        <View>
        <Text>Total KW por hora : ${resultado} </Text>
        <Text>Total KW por semana : ${consumosemana} </Text>
        <Text>Total KW por Quincena : ${consumoQuincenal} </Text>
        <Text>Total KW por Mes : ${consumoMes} </Text>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    width:'99%',
    borderRadius: 15,
    padding: 30,
    paddingHorizontal:20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginBottom: 10,
    paddingHorizontal: 40,
    textAlign:'center',
    
  },
  titulo:{
    color:'#56C596',
    fontWeight:'bold',
    fontSize:20,
    textDecorationLine: 'underline',
    padding:5,
    
    


  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#957DAD',
    paddingTop:20,
    padding:110,
    borderRadius: 25,
  },
  input: {
    height: 60,
    borderColor: '#07F8BE',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:25,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    textAlign:'center',
    textDecorationLine: 'underline',
  },
  totalLabel: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'orange',
    textDecorationLine: 'underline',
  },
  
  listado:{
    color:'#56C596',
    fontWeight:'bold',
    fontSize:20,
    textDecorationLine: 'underline',
    paddingBottom:10,
  },
  botoninfo:{
    backgroundColor: '#957DAD',
    padding: 10,
    borderRadius:15,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal:50
  }

});

export default ConsumoDatosComponent;
