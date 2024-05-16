
import {useState} from 'react';
function App () {
  const [count, setCount] = useState(0);
  const [hesap , setHesap] = useState(4);


  
  function handleClick() {
    setCount(count + 1);
    setHesap(hesap+3);
  }

  function Bas () {
    setHesap(hesap +5);
  }
  return (
    <>
    <button onClick={handleClick}>
      you presset here {count} times
    </button>
    
    <button onClick={Bas}>

      {hesap} kere bastin
    </button>
    </>
  )
}

export default App;
