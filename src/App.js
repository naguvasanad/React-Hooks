  import Home from './Home';
import { MyContext } from './MyContext';

export default function App() {
  
  // const [user,setUSer] = useState({name:"nagu",place:"Koppal"});
  const user = {    
    name:"nagu",
    place:"koppal"
    }

  return (
    <>

      <MyContext.Provider value={user}>
            <Home />
      </MyContext.Provider>
     
     </>
    
  );
}








