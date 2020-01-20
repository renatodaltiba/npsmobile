import React,{ useEffect, useState } from 'react';

import { View, KeyboardAvoidingView, AsyncStorage, Image, Text, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';
export default function Register({navigation}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(()=>{
        AsyncStorage.getItem('token').then(token => {
            if(token){
                navigation.navigate('Rewardss');
            }
        })
    }, []);

    async function Cadastrar(){
        await api.post('/register', {
            username,
            email,
            password
        })
        navigation.navigate('Login');
    
    }

    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} styles={styles.logo}/>
            <View style={styles.form}>
            <Text style={styles.label}>NOME COMPLETO*</Text>
            <TextInput 
                style={styles.input}
                placeholder="DIGITE SEU NOME "
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={true}
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput 
                style={styles.input}
                placeholder="DIGITE SEU E-MAIL"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>SUA SENHA*</Text>
            <TextInput 
                style={styles.input2}
                placeholder="DIGITE SUA SENHA."
                placeholderTextColor="#999"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={Cadastrar} style={styles.button}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={styles.button2}>
                <Text style={styles.buttonText2}>VOLTAR</Text>
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
        paddingHorizontal: 30,
        marginTop: 80,
    },
    label: {
        fontWeight: 'bold',
        color: '#0d5ccf',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    input: {
        borderWidth: 2,
        borderColor: '#0d5ccf',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 60,
        marginBottom: 20,
        borderRadius: 40
    },
    input2: {
        borderWidth: 2,
        borderColor: '#0d5ccf',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 60,
        marginBottom: 20,
        borderRadius: 40
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
        borderRadius: 40
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
        borderColor: '#0d5ccf',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 10
    },
    buttonText2: {
        color: '#0D5CCF',
        fontWeight: 'bold',
        fontSize: 16,
    },

})