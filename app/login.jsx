import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/Icons'
import Ionicons from '@expo/vector-icons/Ionicons';

const Login = () => {
  return (
    <ScreenWrapper>
      <View>
        <Text>Login</Text>
        <Ionicons name="home-outline" color="red" size={24}/>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})