/* eslint-disable no-undef */
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useData } from "../../context/DataContext";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export default function Signup() {
  const {
    setIsLoggedIn,
    setConfirmPassword,
    confirmPassword,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
    fullName,
    setFullName,
    createUser,
  } = useData();
  const navigation = useNavigation();

  const handleSignup = async () => {
    const formprops = {
      user: {
        username: fullName,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      },
    };
    setIsLoading(true);
    const result = await createUser(formprops);
    if (result === "success") {
      console.log("Signup successful");
      setIsLoading(false);
      setIsLoggedIn(true);
      navigation.navigate("Bot");
    } else {
      console.log("Signup failed");
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      {isLoading ? (
        <View
          className="flex-1 loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
     aspect-square w-8 flex justify-center items-center text-yellow-700"
        ></View>
      ) : null}
      {!isLoading ? (
        <ImageBackground
          source={require("../../../assets/smallleaf.jpg")}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <SafeAreaView className="flex-1 justify-center items-center bg-opacity-40">
            <View className="w-11/12 max-w-md p-6 bg-white rounded-lg shadow-xl">
              <View className="gap-4">
                {/* Full Name Input */}
                <View>
                  <Text className="text-gray-700 text-sm font-inter-medium mb-1">
                    Username
                  </Text>
                  <TextInput
                    className="text-black border-b border-gray-500 px-2 py-3 text-lg font-inter-regular"
                    placeholder="username"
                    placeholderTextColor="#cfe6ed"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>

                {/* Email Input */}
                <View>
                  <Text className="text-gray-700 text-sm font-inter-medium mb-1">
                    Email
                  </Text>
                  <TextInput
                    className="text-black border-b border-gray-500 px-2 py-3 text-lg font-inter-regular"
                    placeholder="Email"
                    placeholderTextColor="#cfe6ed"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>

                {/* Password Input */}
                <View>
                  <Text className="text-gray-700 text-sm font-inter-medium mb-1">
                    Password
                  </Text>
                  <TextInput
                    className="text-black border-b border-gray-500 px-2 py-3 text-lg font-inter-regular"
                    placeholder="Password"
                    placeholderTextColor="#cfe6ed"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                {/* Confirm Password Input */}
                <View>
                  <Text className="text-gray-700 text-sm font-inter-medium mb-1">
                    Confirm Password
                  </Text>
                  <TextInput
                    className="text-black border-b border-gray-500 px-2 py-3 text-lg font-inter-regular"
                    placeholder="Confirm Password"
                    placeholderTextColor="#cfe6ed"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                  />
                </View>

                {/* Signup Button */}
                <TouchableOpacity
                  onPress={handleSignup}
                  disabled={isLoading}
                  className={`mt-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 ${
                    isLoading ? "opacity-70" : ""
                  }`}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                  }}
                >
                  <Text className="text-white text-xl text-center font-inter-semibold">
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Text>
                </TouchableOpacity>

                {/* Sign in link */}
                <TouchableOpacity onPress={handleLogin} className="mt-4">
                  <Text className="text-teal-500 text-center font-inter-medium">
                    Already have an account? Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      ) : null}
    </>
  );
}
