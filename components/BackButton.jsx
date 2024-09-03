import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../constants/theme'

const BackButton = ({size=26, router}) => {
  return (
    <Pressable onPress={()=> router.back()} style={styles.button}>
        <Ionicons size={size} name="arrow-back" color={theme.colors.text}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0,0,0,0.07)'
    }
})