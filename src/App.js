import React,{useEffect,createContext,useReducer,useContext} from 'react'
import NavBar from './components/navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/Screens/Home'
import Signin from './components/Screens/Signin'
import Profile from './components/Screens/Profile'
import Signup from './components/Screens/Signup'
import CreatePost from './components/Screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
import UserProfile from './components/Screens/UserProfile'
import SubscribedUserPosts from './components/Screens/SubscribesUserPosts'
//import Reset from './components/screens/Reset'
//import NewPassword from './components/screens/Newpassword'
const url='https://insta12.adaptable.app/'

export const UserContext = createContext()


const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
     
    }else{
        if(!history.location.pathname.startsWith('url/reset'))
             history.push('url/signin')
      }
    },[])
return(
  <Switch>
    
      
      
       <Route exact path="url/">
        <Home/>
       </Route>
      

       <Route exact path="url/Profile">
        <Profile/>
       </Route>

       <Route path="url/Signup">
        <Signup/>
       </Route>

       <Route path= "url/Signin">
        <Signin/>
       </Route>
       <Route path="url/createpost">
        <CreatePost/>
       </Route>
       <Route path="url/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="url/myfollowingpost">
        <SubscribedUserPosts />
      </Route>
       </Switch>
  
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
   
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
