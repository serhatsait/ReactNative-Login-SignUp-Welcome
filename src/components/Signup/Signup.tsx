import {View, Text} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const Signup = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          
        </View>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 12,
          color: Colors.black
        }}>
        Create Account  
        </Text>
        <Text
        style = {{
          fontSize: 16,
          color: Colors.black
        }}
        >
          Connect with your today!
        </Text>
    
      </View>
    </SafeAreaView>
  );
};

export default Signup;
