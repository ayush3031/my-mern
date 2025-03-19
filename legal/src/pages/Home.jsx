import React from 'react'
import Leftside from '../components/Leftside'
import Feed from '../components/Feed'
import Right from '../components/Right'
import { useState } from 'react';
import axios from 'axios';
import {Provider} from 'react-redux'
import { Store } from '../redux/store';

export default function Home() {
  
  const [focusInput, setFocusInput] = useState(false);

  const handleAskQuestionClick = () => {
    setFocusInput(true);
  };



  return (
    <div className='flex'>
      <Leftside />
      <Feed focusInput={focusInput} setFocusInput={setFocusInput}/>
      <Right onAskQuestionClick = {handleAskQuestionClick} />
    </div>

  )
}
