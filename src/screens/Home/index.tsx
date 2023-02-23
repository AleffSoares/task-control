import { Text, View } from "react-native";

import { styles } from "./styles";


export default function Home () {
  return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text  style={styles.task}>
                Task
          </Text>
          <Text  style={styles.control}>
                Control
          </Text>
        </View> 
      </View>
  );
}