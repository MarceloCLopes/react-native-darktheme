import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from "nativewind";
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);

  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <Text className="mx-4 text-justify" style={colorScheme === 'dark' ? styles.whireText : styles.blackText} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsam nam saepe? Tempore laudantium ipsa eos iusto consequatur architecto recusandae, quasi praesentium, deserunt dolor, in deleniti et error autem necessitatibus?</Text>
      <View className="h-48 w-full bg-sky-400 dark:bg-emerald-500" />
    </View>
  );
}

const styles = StyleSheet.create({
  whireText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  }
})

