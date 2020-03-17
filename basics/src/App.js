import React from 'react';
import Name from './components/Name';
import Welcome from './components/Welcome';
// import Message from './components/Message';
import Counter from './components/Counter';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheets from './components/StyleSheets';
// import Inline from './components/Inline'
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FrParentInput from './components/FrParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';



function App() {
  return (
    <div className="App">
        {/* <UserProvider value="Lubo"> */}
          <ComponentC />
        {/* </UserProvider> */}
          
          {/* <CounterTwo> 
            { (count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={ incrementCount } />
            )} 
          </CounterTwo>

          <CounterTwo> 
             { (count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={ incrementCount } />
            )} 
          </CounterTwo> */}

          {/* <User render={ (isLoggedIn) => isLoggedIn ? 'Lubo' : 'Guest' }/>          
          <ClickCounterTwo />
          <HoverCounterTwo /> */}
          {/* <HoverCounter />
          <ClickCounter name='Lubo' />  */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
          {/* <FrParentInput /> */}

        {/* <FocusInput /> */}

       {/* <RefsDemo /> */}

      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Inline /> */}
      {/* <StyleSheets primary={true} /> */}
      {/* <NameList />     */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter />
      
      <Message />
      <Name name="Lubo" age="23">
        <p>This is children props</p>
      </Name>
      <Name name="Bobi" age="24">
        <button>OK</button>
      </Name> */}
      {/* <Name name="Gosho" age="27"/>

       <Welcome name="Lubo" age="23">
       <p>This is children props</p>
      </Welcome>
      <Welcome name="Bobi" age="24"/> 
      <Welcome name="Gosho" age="27"/>  */}

    </div>
  );
}

export default App;
