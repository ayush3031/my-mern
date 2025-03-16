import React from 'react'
import Leftside from '../components/Leftside'
import Feed from '../components/Feed'
import Right from '../components/Right'
import { useState } from 'react';
import axios from 'axios';
import {Provider} from 'react-redux'
import { Store } from '../redux/store';

export default function Home() {
  

  return (
    <div className='flex'>
      <Leftside />
      <Feed />
      <Right />
    </div>

  )
}
