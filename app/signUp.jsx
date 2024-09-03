import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useRef, useState} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/Icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/input'
import Button from '../components/Button'

const SignUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  
  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current)
      {
      Alert.alert('Sign Up', "Please fill all the fields!");
      return;
    }
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <View style={styles.container}>
        <BackButton router={router}/>
        {/* welcome */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize: hp(1.5), color: theme.colors.text}}> Please fill the details to craete an account </Text>
          <Input icon={<Ionicons size={26} name='person-outline'/>} placeholder="Enter your username" placeholderTextColor={theme.colors.text} onChangeText={value=> nameRef.current = value}/>
          <Input icon={<Ionicons size={26} name='mail-outline'/>} placeholder="Enter your email" placeholderTextColor={theme.colors.text} onChangeText={value=> emailRef.current = value}/>
          <Input icon={<Ionicons size={26} name='lock-closed-outline'/>} placeholder="Enter your password" placeholderTextColor={theme.colors.text}secureTextEntry onChangeText={value=> passwordRef.current = value}/>
          <Button title={'Sign Up'} loading={loading} onPress={onSubmit}/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={()=> router.push('login')}>
            <Text style={[styles.footerText,{color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  welcomeText:{
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap : 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }


})