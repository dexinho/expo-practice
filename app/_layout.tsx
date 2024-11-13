import { StyleSheet, Text, View } from "react-native";
import "../global.css";

const _layout = () => {
  return (
    <View className="flex w-full h-full justify-center items-center">
      <View>
        <Text>Root Layout</Text>
      </View>
      <View>
        <Text>Root Layout</Text>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({});
