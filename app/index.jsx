import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { hp } from '../helpers/common';
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
    <View>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push('welcome')} />
    </View>
    </ScreenWrapper>
    
  )
}

export default index