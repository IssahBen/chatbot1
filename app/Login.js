import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useData } from "./context/DataContext";
import { useNavigation } from "@react-navigation/native";

export default function Login({ onLogin }) {
  const {
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
  } = useData();
  const navigation = useNavigation();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      navigation.navigate("Bot");
    }, 1000);
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&auto=format&fit=crop&q=80",
        }}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1 bg-black/60 px-6 justify-between">
          {/* Header Section */}
          <View className="mt-12 items-center mb-10">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&auto=format&fit=crop&q=80",
              }}
              className="w-32 h-32 rounded-full mb-6"
            />
            <Text className="text-white text-3xl font-extrabold mb-2">
              Welcome Back
            </Text>
            <Text className="text-white/90 text-base text-center mb-4">
              Sign in to continue to your account
            </Text>
          </View>

          {/* Form Section */}
          <View className="items-center px-4">
            {/* Email Field */}
            <View className="w-full mb-4">
              <Text className="text-white text-base font-semibold mb-2">
                Email Address
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-white/60 px-4 py-3 rounded-xl text-base text-black"
              />
            </View>

            {/* Password Field */}
            <View className="w-full mb-6">
              <Text className="text-white text-base font-semibold mb-2">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                className="bg-white/60 px-4 py-3 rounded-xl text-base text-black"
              />
              <TouchableOpacity className="self-end mt-2">
                <Text className="text-indigo-500 text-sm font-semibold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign-In Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={isLoading}
              className={`bg-indigo-600 py-2  px-2 rounded-xl items-center mt-6 ${
                isLoading ? "opacity-70" : ""
              }`}
            >
              <Text className="text-white text-base font-semibold">
                {isLoading ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Section */}
          <View className="mb-6 items-center">
            <Text className="text-white text-sm">Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text className="text-indigo-500 text-sm font-semibold ">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
