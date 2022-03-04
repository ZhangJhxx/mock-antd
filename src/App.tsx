import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from './components/button/button'
import Msg from './components/message/message'
library.add(fas)


function App() {
  return (
    <div className="App">
      <Button label="success" onClick={()=>{Msg.success("success")}}/>
    </div>
  );
}

export default App;
