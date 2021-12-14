import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputNumberBtn from '../../components/SectionAComponents/InputNumberBtn'
import { COLORS } from '../../res/Constants'


const buttons=[
    ['CLEAR','DEL'],
    ['7','8','9','/'],
    ['4','5','6','*'],
    ['1','2','3','+'],
    ['0','.','=','-'],
]
export default function CalculatorApp() {
    const [display, setDisplay] = useState('0')
    const [operator, setOperator] = useState(null)

    const handlePress=(input)=>{
        switch(input){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                setDisplay(display==='0'?input:display+input)
                break
            case '+':
            case '-':
            case '*':
            case '/':
                setDisplay(operator!==null?display.substring(0,display.length-1):display+input)
                break
            case ".":
                let dot=display.slice(-1)
                setDisplay(dot!=='.'?display+input:display)
                break
            case 'CLEAR':
                setDisplay('0')
                break
            case 'DEL':
                let string=display.toString()
                let deleteString=string.substring(0,string.length-1)
                setDisplay(deleteString.length==1?'0':deleteString)
        }
    }

   const renderBtn=()=>{
        const layouts=buttons.map((btnRows,index)=>{
            let rowItem=btnRows.map((btnItem,btnIndex)=>{
                return <InputNumberBtn 
                key={btnIndex} 
                value={btnItem} 
                onPress={()=>handlePress(btnItem)}/>
            })
            return <View style={styles.inputRow} key={index}>{rowItem}</View>
        })
        return layouts
   }
    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{display}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {renderBtn()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    resultContainer:{
        flex:0.3,
        backgroundColor:COLORS.primary,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingBottom:20
    },
    buttonsContainer:{
        flex:0.7,
        backgroundColor:COLORS.secondary

    },
    resultText:{
        color:COLORS.white,
        fontSize:45,
        fontWeight:'bold',
        paddingRight:10,
    },
    inputRow:{
        flex:1,
        flexDirection:"row"
    }
})
