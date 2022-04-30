import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddPlatform from './Components/Platform/AddPlatform';
import PlatformList from './Components/Platform/PlatformList';
import React,{ useState } from 'react';

function App() {
  const [platformData, setPlatformData] = useState([]);
  const GetDataFromAddPlatformComponent = (platform, description) => {
    setPlatformData((platforms) => {
      return [...platforms, { platform: platform, description: description, id: Math.random().toString() }]
    })
  }

  return (

    <div className="App bg-dark">
      <header className="container">
        <div className='row'>
          <React.Fragment>
            <AddPlatform onAddPlatform={GetDataFromAddPlatformComponent} />
            <PlatformList platforms={platformData} />
          </React.Fragment>
        </div>
      </header>
    </div>

  );
}

export default App;
