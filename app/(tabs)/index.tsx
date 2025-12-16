import { StyleSheet, Button , View, Image, 
  TouchableWithoutFeedback, Keyboard,
   Pressable,ScrollView, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { categories } from '@/constants/Categories';
import { tasks } from '@/constants/Tasks';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View as ThemedView  } from '@/components/Themed';

// import { ScrollView } from 'react-native/types_generated/index';

export default function TabOneScreen() {
  const router =  useRouter();
  const [query, setQuery] = useState('');
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        {/*  Header View */}
        <View style={styles.headerView}>
          <View>
            <Text style={styles.headerTitle}>Welcome Julia</Text>
            <Text style={styles.headerSubtitle}>8 pending bills</Text>
          </View>
          <View>
            <Image
            source={require('../../assets/images/woman.png')}
            style={styles.headerImage}
            resizeMode="contain"
            />

          </View>
        </View>

        {/* Searchbar View */}
        <View>
            <Searchbar
          placeholder="Search  reminder"
          onChangeText={setQuery}
          value={query}
          style={styles.searchBar}
        />
        </View>

        {/* Categories View */}
        <View style = {styles.categoriesBox}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}

          >
            {categories.map((category)=>(
              <Pressable  style={styles.card}
              key={category.id}
              >
                <Text style={styles.cardText}>{category.name}</Text>
                 <Text style={styles.subtitle}>
                {category.taskCount} tasks
              </Text>
                <Image source={category.image} style={styles.categoryImage}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>
        {/* Due Tasks */}
        <View style={styles.taskContainer}>
          <Text style={styles.taskHeader}>
            Ongoing Task
          </Text>
          <View  style={{ flex: 1 }}>
          <FlatList
            data={tasks}
            keyExtractor={(item)=>item.id}  
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
               <View style={styles.taskCard}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.taskName}>{item.name}</Text>
              <Text style={styles.taskDue}>Due: {item.dueDate}</Text>
              <View style={styles.progressBarBackground}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${item.progress}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{item.progress}% completed</Text>
            </View>
          </View>
            )  }
          /> 
          </View>
          
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    marginTop:60,
    padding:10,
    backgroundColor:'BBDCE5',
  },
  headerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  headerTitle:{
    fontSize:25,
    fontWeight:'bold',
    padding:5,
  },
  headerSubtitle:{
    fontSize:15,
    color:'#0BA6DF',
    padding:5,
  },
  headerImage:{
    width:50,
    height:50,
  },
  searchBar:{
    backgroundColor: '#fff',
  },
categoriesBox: {
    marginTop: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  card: {
    width: 200,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    fontWeight:'bold',
  },
  categoryImage:{
    width:80,
    height:60,
    marginBottom:10,
    resizeMode:'contain',
  },
  // Tasks
    taskContainer: {
    flex: 1,
    padding: 16,
  },
  taskHeader: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    
  },
  taskCard: {
    flexDirection: 'row',
    backgroundColor: '#fff', 
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,             
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  taskName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  taskDue: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
  },
  progressBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 10,
    color: '#555',
  },

});


