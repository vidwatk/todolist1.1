import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'
import React, {useState}  from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems ([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/*Today's tasks*/}
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Today's tasks are</Text>

        {/* Task container */}
          <View style = {styles.items}>
            {
              taskItems.map ((item, index)=> {
                return (
                  <TouchableOpacity key = {index}   onPress={()=> completeTask( index)}>
                    <Task  text = {item}/>
                  </TouchableOpacity>
                )
              } )
            }      
            {/*<Task text={'Task 1'} />
            <Task text={'Task 2'}/>*/}
          </View>
      </View>
      
      {/*Writing the tasks*/}
      <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'} 
        style= {styles.writeTaskWrapper}>
          <TextInput style= {styles.input} placeholder = {'Write something bitch'} value = {task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style = {styles.addWrapper}>
              <Text style = {styles.addText}> + </Text>              
            </View>

          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfbfbf',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 40

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',  

  },
  input: {
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 60,
    borderColor: '#808080',
    borderWidth: 1,
    marginLeft: 20

  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    marginRight: 15,
    borderWidth: 1

  },
  addText: {

  },
});
