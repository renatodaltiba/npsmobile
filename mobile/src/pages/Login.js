import React,{ useState, useEffect } from 'react';

import { View, KeyboardAvoidingView, AsyncStorage, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert  } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';
export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(()=>{
        AsyncStorage.getItem('token').then(token => {
            if(token){
                navigation.navigate('Rewardss');
            }
        })
    }, [])
    async function verificaUsuario(){
        if(email.length === 0 || password.length === 0 ){
            Alert.alert('Campo em branco', 'Usuario ou senha não foi preenchido'); 
        }else{
            try{
            const response = await api.post('/authenticate', {
                email,
                password
            })
            const { token } = response.data;
            await AsyncStorage.setItem('token', token);
            navigation.navigate('Rewardss');
        }catch(error){
            Alert.alert('Erro de Login', 'Usuario ou senha errado'); 
            console.log(error)
        }
    }
    }
    async function esqueceuSenha(){

    }
    async function cadastrarUsuario(){
        navigation.navigate('Register')
    }

    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} styles={styles.logo}/>
            <View style={styles.form}>
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
            
            <TouchableOpacity onPress={esqueceuSenha} style={styles.forgotpassword}>
                <Text style={styles.forgotpasswordtext}>ESQUECI A SENHA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={verificaUsuario} style={styles.button}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cadastrarUsuario} style={styles.button2}>
                <Text style={styles.buttonText2}>CADASTRAR</Text>
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
        marginTop: 120,
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
        marginBottom: 2,
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
    }
})