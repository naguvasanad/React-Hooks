  import Home from './Home';
import { MyContext } from './MyContext';
export default function App() {
  
  //const FirstName = createContext();
  

  return (
    <>

      <MyContext.Provider value={"Vasanad"}>
            <Home />
      </MyContext.Provider>
     
     </>
    
  );
}








