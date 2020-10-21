import React, { Component } from "react"
import { View, Text, Button,  StyleSheet, TextInput, SafeAreaView, StatusBar } from "react-native"
import { Formik } from 'formik'
import {Picker} from '@react-native-community/picker';



const add_animal = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e05d06'}}>
            <StatusBar backgroundColor="grey"/>
          <Formik initialValues={{id: '123456789', name: 'Animal', animal: 'Horse'}}

        onSubmit={(values) => alert('Submitted: ' +  values.id + ", " + values.name + ", " + values.animal)}
        >
            {({handleChange, handleSubmit, values})=>(
              <SafeAreaView >
                <Text style={{ fontSize: 24, left: 15, top: 20, marginBottom: 10 }}>Add a New Animal</Text>
                <View 
                  style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 40 }}/>
                <Text style={{ fontSize: 20, left: 15 }}>Device ID</Text>
                <TextInput style={styles.input} 
                  backgroundColor='grey'
                  color='black'
                  textAlign={'left'}  
                  editable={false}
                  value={values.id} />
                <Text style={{ fontSize: 20, left: 15 }}>Animal Name</Text>
                <TextInput style={styles.input} 
                  textAlign={'left'} 
                  value={values.name} 
                  onChangeText={handleChange('name')} />
                <Text style={{ fontSize: 20, left: 15 }}>Animal</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, width: 300, height: 40, backgroundColor: 'lightgrey', margin: 15, alignSelf: 'center' }}>
                <Picker
                    style={{height: 40, width: 300 }}
                    selectedValue={values.animal}
                    onValueChange={handleChange('animal')}
                    textStyle={{fontSize: 22}}
                    prompt={'Select an Animal'}
                >
                <Picker.Item label="Horse" value="Horse" />
                <Picker.Item label="Dog" value="Dog" />
                </Picker>
                </View>
                <View style={{ margin: 15 }}>
                    <Button onPress={handleSubmit} title="Submit" color='grey'/>
                </View>
              </SafeAreaView>
            )}
        </Formik>
        </SafeAreaView>
        
    )
  }

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5, 
        fontSize: 18,
        width: 300,
        height: 40,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
    }
})

export default add_animal