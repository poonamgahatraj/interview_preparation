import logo from './logo.svg';
import './App.css';
import Interview from './components/interview';
import Btnclk from './components/btnclick';
import Validform from './components/validform';
import Table from './components/table';
import Name from './components/parent';
import Fetchdata from './components/fetchdata';
import Layout from './components/layout';
import Header from './components/header';
import Button from './components/button';
import Usercard from './components/usercard';
import Profile from './components/profile';
import useCounter from './components/usecounter';
import { useState } from 'react';
import Counter from './components/counter';
import Login from './components/login';
import Counters from './components/counters';
import { useContext } from 'react';
import { counterContext } from './components/context/counterContext';
import CounterComp from './components/countercomponent';
import ItemList from './components/list';
import Toogle from './components/toogle';
import Display from './components/display';

function App() {

    const counterState=useContext(counterContext);
return(
    <>
<Display/>

    </>

)
 
}

export default App;
