import React, { useRef, useState} from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";


export default function Home () {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
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

        <View style={styles.form}>
            <TextInput
              ref={inputRef}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)} 
              style={isFocused ? styles.inputFocus : styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor='#454545'
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
        </View>

        
      </View>
  );
}