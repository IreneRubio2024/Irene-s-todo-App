import { useNavigation } from "@react-navigation/native";



export default function ModalScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}></Text>
        <Button onPress={() => navigation.goBack()}>Dismiss</Button>
      </View>
    );
  }