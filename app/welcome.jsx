import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { hp, wp } from '../helpers/common'
import Button from '../components/Button'
import { theme } from '../constants/theme'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <View style={styles.container}>

        <Image resizeMode="contain" style={styles.welcomeImage} source={require('../assets/images/stitch_logo_transparent.png')}/>

        <View style={styles.footer}>
          <Button title="Get Started" buttonStyle={{marginHorizontal: wp(3),color: theme}} onPress={() => router.push('signUp')} />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account!
            </Text>
            <Pressable onPress = {() => router.push('login')}>
              <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.extrabold}]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
        
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alaignItems: 'center',
    justifyContent : 'space-around',
    backgroundColor : 'white',
    paddingHorizontal : wp(4)
  },
  welcomeImage : {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  },
  footer:{
    gap: 30,
    width: '100%'
  },
  bottomTextContainer : {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 5
  },
  loginText: {
    textAlign : 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)

  }
})