# ReactStart

Command : "npm run dev" : To run vite project created using "npm create vite@latest"
Command : "npm run start" : To run project created using "npx create-react-app 01basics"

#Redux-toolkit

reducers : properties and functions defined to change functionality
in methods defined in reducers, two parameters are found(state and action). Example : 
in AddTodo(state,action)
state : give initialState (state.todos.push(todo))
action : values passed as parameter(can be accessed using action.payload)

// we have to extract individual functionality present in reducers

//export todoSlice.reducer
step1 : 
create store : created using {configureStore(reducers passed as parameter)} present in redux-toolkit

step 2 : 
create slice : defind using {createSlice} method present in redux toolkit
parameter passed in createSlice  = an object having name, initial state and reducers 

step 3 : use useDispatch(to send send) and useSelector(to access data)
const dispatch = useDispatch();
dispatch(addTodo(tittle))

const arr = useState(state => state.todos)


#REACT MEGA PROJECT

1) Appwrite
2) Tinymce
3) Reacthookform

// Environment variables are created in root modules(means in home diretory of project like readme, package are in root of project folder)
// Again run project when you make changes in .env file


//If application is created using create react app then, it is compulsory to start variable name with (REACT_APP_) and this variable is accessed with (process.env.REACT_APP_NAMEOFVARIABLE)

// If application is created using vite react app then, it is compulsory to start variable name with (VITE_) and this variable is accessed with (import.meta.env.VITE_NAMEOFVARIABLE )

//While making backend using appwrite, set (database->collections->settings-> change the permissions), also set in (storage->buckets->settings->change permissions)