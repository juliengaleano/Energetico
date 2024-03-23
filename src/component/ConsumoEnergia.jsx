import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picker from '@react-native-picker/picker'

const ConsumoEnergia = () => {
  const [consumo, setConsumo] = useState();
  const [pais, setPais] = useState('');

  const calcularCosto = () => {
    const costoTotal = consumo * obtenerCostoPorKwH(pais);
    return costoTotal.toFixed(2);
  };

  const obtenerCostoPorKwH = (pais) => {
    const costosPorPais = {
      'Mexico': 0.15,
      'España': 0.20,
      // Otros países...
    };

    return costosPorPais[pais] || 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consumo de Energía</Text>
      <View style={styles.content}>
        <Text style={styles.label}>Consumo de energía (kWh): {consumo}</Text>
        <Picker
          selectedValue={pais}
          onValueChange={(itemValue) => setPais(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona un país" value="" />
          <Picker.Item label="Mexico" value="Mexico" />
          <Picker.Item label="España" value="España" />
          {/* Agrega más países según tus necesidades */}
        </Picker>
        <Text style={styles.label}>Costo total: ${calcularCosto()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Color de fondo
    borderRadius: 15, // Radio de borde
    padding: 20, // Espaciado interno
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff', // Color de fondo del Picker
    borderRadius: 5, // Radio de borde del Picker
  },
});

export default ConsumoEnergia;
