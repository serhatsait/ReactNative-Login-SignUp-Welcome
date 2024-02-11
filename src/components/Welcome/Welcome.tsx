import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { LinearGradient } from "react-native-linear-gradient";
import Button from "../Buttons/Button.tsx";

const Welcome = ({ navigation }: any) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
      colors={[Colors.primary, Colors.secondary]}
    >
      <View style={{
        flex: 1
      }}>
        <View>
          <Image
            source={require("../../assets/icons/hero1.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ],
              resizeMode: "cover"
            }}
          />
          <Image
            source={require("../../assets/icons/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              left: 140,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" }
              ],
              resizeMode: "cover"
            }}
          />
          <Image
            source={require("../../assets/icons/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" }
              ],
              resizeMode: "cover"
            }}
          />
          <Image
            source={require("../../assets/icons/hero2.jpg")}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              position: "absolute",
              top: 140,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ],
              resizeMode: "cover"
            }}
          />
        </View>

        <View style={{
          flex: 1,
          position: "absolute",
          top: 450,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20
        }}>
          <Text style={{
            color: Colors.white,
            fontSize: 30,
            fontWeight: "bold"
          }}>Welcome</Text>
          <Text style={{
            color: Colors.white,
            fontSize: 16,
            textAlign: "center",
            marginHorizontal: 20
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lectus auctor, tincidunt urna sed,
            vestibulum urna.</Text>

          <Pressable
            onPress={() => navigation.navigate("Signup")}
            style={{
              backgroundColor: Colors.white,
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginTop: 20
            }}
          >
            <Text style={{
              color: Colors.primary,
              fontSize: 16
            }}>Get Started</Text>
          </Pressable>


          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <Text style={{
              color: Colors.white,
              fontSize: 16,
              marginRight: 10
            }}>
              Already have an account?
            </Text>

            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 10
              }}
            />
          </View>



        </View>


      </View>
    </LinearGradient>
  );
};

export default Welcome;
