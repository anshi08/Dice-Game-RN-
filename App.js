import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Image , Pressable , Vibration} from 'react-native';
import diceOne from './assets/dice1.png';
import diceTwo from './assets/dice2.png';
import diceThree from './assets/dice3.png';
import diceFour from './assets/dice4.png';
import diceFive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

export default function App() {
  
   const [uri,setUri] = useState(diceThree)

   function onchangehandler() {
    //console.log ("hii");
    let randomnumber = Math.floor(Math.random() * 6) + 1
    switch(randomnumber) {
     case 1:
      setUri(diceOne);
      break;
      case 2:
        setUri(diceTwo);
        break;
        case 3:
          setUri(diceThree);
          break;
          case 4:
            setUri(diceFour);
            break;
            case 5:
              setUri(diceFive);
              break;
              case 6:
                setUri(diceSix);
                break;
                  default:
                    setUri(diceTwo);
    }
       Vibration.vibrate()  //function name!!    //inline fn - () => {}
  
  }
    
 return (
    
    <View style={styles.container}>
      <Image 
      style ={styles.image}
      source={uri}/>
      <Pressable onPress={onchangehandler} >  
    <Text style={styles.button}>Tap</Text> 
    </Pressable>
    </View>
);
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00fa9a'
  },
  image:{
    marginBottom: 50,
    height:100,
    width:100
  },
  button: {
    borderColor: "#30475E",
    borderWidth: 3,
    paddingVertical: 6,
    paddingHorizontal: 40,
    color:"#000000",
    backgroundColor: "#ffe4e1"
  },
})
