import React,{ useEffect,useState } from 'react';

import { View, KeyboardAvoidingView, AsyncStorage, Image, Text, StyleSheet, TouchableOpacity,  ToastAndroid, Alert  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import api from '../services/api';
import logo from '../assets/logo.png';



export default function Rewardss({navigation}){
    
    const [ content, setContent ] = useState('');

    votes = [
        {label: '0', value: 0},
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: '10', value: 10}
        ];
    async function votetation(){      
        try{
          const token = await AsyncStorage.getItem('token');
          await api.post('/app',{
              content
          }, { headers: { Authorization: 'Bearer ' + token } })
          Alert.alert('Sucesso', 'Avaliação registrada com sucesso');
          navigation.navigate('Rewardss');
        }catch(error){
            console.log(error)
        }
    }
    function handleLogout(){
        AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    } 
    
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.form}>
            <RadioForm
                radio_props={votes}
                onPress={(value) => (setContent(value))}
                formHorizontal={true}
                buttonSize={17}
                buttonOuterSize={33}
                animation={true}
                labelHorizontal={false}
                initial={1}
            />
            <TouchableOpacity onPress={votetation} style={styles.button}>
                <Text style={styles.buttonText}>AVALIAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.button2}>
                <Text style={styles.buttonText2}>SAIR</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        marginTop: 120,
    },
    label: {
        fontWeight: 'bold',
        color: '#0d5ccf',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    forgotpassword: {
        paddingTop: -20,
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    forgotpasswordtext: {
        color: '#0d5ccf',

    },
    button: {
        height: 60,
        backgroundColor: '#0D5CCF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 40,
        marginTop: 150
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button2: {
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 10
    },
    buttonText2: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    }


})


