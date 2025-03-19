import { ScrollView, StyleSheet, View } from "react-native";
import RobotCard from "./component/robotCard";

const Index = () => {
  return (
    
    <ScrollView style={styles.contact}>
      <View style={styles.container}>
        <RobotCard
          imageSource={require("../../../../assets/images/robot.png")}
          labelText="Unlock the Power of Future AI"
          Text="Chat with the smartest AI. Future Experience power of AI with us."
        />
        </View>
        
      
    </ScrollView>

  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding :20,
    alignItems: "center",
    justifyContent: "center",
   flexDirection :'row'
    
  },
  contact: {
   
    flexDirection:'row',
      },
});
