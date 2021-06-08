import logo from './logo.svg';
import './App.css';
import Spanish from './Spanish'
import Mandarin from './Mandarin'
import Cantonese from './Cantonese'
import Russian from './Russian'
import FrenchCreole from './FrenchCreole'
import Arabic from './Arabic'
import Urdu from './Urdu'
import Hindi from './Hindi'
import Korean from './Korean'
import Polish from './Polish'
import Tagalog from './Tagalog'


import {langaugeData} from './components/LanguageData'
import {BrowserRouter, Link, Switch , Route} from 'react-router-dom';

import React,{useState} from 'react'

function App() {
  const[language,setLanguage] = useState('none')
  
  return (
    <BrowserRouter>
    <div className="container">
      
                <header className="header">
                    <h1>Interpreters</h1>
                </header>
                <aside className="aside">
                    List of Languages.

                    {langaugeData.map((item,index) => {
                      return(
                        <li key={index} className={item.lName}>
                            <div className='langs'>
                              <Link to={item.path} className={item.lName}>
                              {item.language}
                              </Link>
                              </div> 
                        </li>
                      )
                    })}
                </aside>
                
                <Switch>
                  <Route path='/spanish' component={Spanish}/>
                  <Route path='/mandarin' component={Mandarin}/>
                  <Route path='/cantonese' component={Cantonese}/>
                  <Route path='/russian' component={Russian}/>
                  <Route path='/french' component={FrenchCreole}/>
                  <Route path='/arabic' component={Arabic}/>
                  <Route path='/urdu' component={Urdu}/>
                  <Route path='/hindi' component={Hindi}/>
                  <Route path='/korean' component={Korean}/>
                  <Route path='/polish' component={Polish}/>
                  <Route path='/tagalog' component={Tagalog}/>
                  <Route path='/' component={Spanish}/>
                </Switch>
                
                
            </div>
            </BrowserRouter>
  );
}

export default App;
