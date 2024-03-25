import React, { useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ConsumoDatosComponent from './ConsumoDatosComponent';


const CountryPicker = () => {
  const [valor,setValor]  = useState(0);
  const [pais, setPais] = useState('');
  const [moneda, setmoneda] = useState('');
  const [bandera, setBandera]= useState(null);

  const handlePickerChange = (Itemvalue) => {
    setPais(Itemvalue);
    
    let valor = 0;
    let moneda = '';
    let bandera = null
  
    switch (Itemvalue) {
      case 'Mexico':
        valor = 10;
        moneda = 'MXN';
        bandera=  require('../imagenes/bmexico.png')
        break;
      case 'Colombia':
        valor = 800;
        moneda = 'COP';
        bandera=  require('../imagenes/bcolombia.png')
        break;
      case 'ARGENTINA':
        valor = 500;
        moneda = 'SPA';
        bandera=  require('../imagenes/bargentina.png')
        break;
        case 'Ecuador':
            valor = 200;
            moneda = 'USD';
            bandera=  require('../imagenes/becuador.png')
            break; 
        case 'PERU':
            valor = 300;
            moneda = 'PEN';
            bandera=  require('../imagenes/bperu.png')
            break;
        
      default:
        valor = 0;
        moneda = '';
        alert('Por favor, seleccione su país');
        break;
    }
  
    setValor(valor);
    setmoneda(moneda);
    setBandera(bandera);
  };
  
  

  return (
    
    <View style={styles.container}>
        <Text style={styles.text}>CUAL ES TU PAIS</Text>
        
        {bandera && <Image source={bandera} style={styles.bandera} />}
    <View style={styles.selector}>
      <RNPickerSelect style={styles.RNPickerSelect}
        onValueChange={handlePickerChange}
        items={[
            { label: 'Selecciona un país', value: '' },
            { label: 'Colombia', value: 'Colombia' },
            //{ label: 'Argentina', Value:'ARGENTINA' },
            { label: 'Mexico', value: 'Mexico' },
            { label: 'Ecuador', value: 'Ecuador' },
            { label: 'Peru', value: 'PERU' },
            { label: 'ARGENTINA', value: 'ARGENTINA' },
          // Agrega más países según sea necesario
        ]}value={pais}
      />
</View > 
      <Text style={styles.text}> El valor consumo por  KW/H : {valor} {moneda}</Text>
       <ConsumoDatosComponent valor={valor}/>   
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    width:'100%',
    backgroundColor:'#56C596',
    borderRadius: 15,
    marginBottom:5,
    
    

  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
  },
  RNPickerSelect:{
    borderRadius:12,
    
  },
  bandera: {
    width: 60, // Ajusta el ancho según las medidas de tu bandera
    height: 40, // Ajusta la altura según las medidas de tu bandera
    marginTop: 10,
    marginBottom: 10,
  },
  selector:{
    width: '99%',
    backgroundColor:'white',
    borderRadius:10,
    shadowOffset:2
  }
});

export default CountryPicker;
