import * as React from 'react';

import Review from './Review';
import Video from './Video';
import WikiSearch from './WikiSearch';

export default [
  {
    id: 'intro-1',
    message: 'Hello, they called me stupid scripted BOT!',
    trigger: 'intro-2',
  },
  {
    id: 'intro-2',
    message: 'But to be honest I have been built within a couple of hours and you might find out I can do several things. Of course that I have some boundaries, so I will try to guide you during the whole flow.',
    trigger: '2',
  },
  {
    id: '2',
    message: 'May I ask you what your name is?',
    trigger: 'name',
  },
  {
    id: 'name',
    trigger: '3',
    user: true,
    validator: (value:any) => {
      if (!value) {
        return 'Please tell me your name';
      }

      return true;
    },
  },
  {
    id: '3',
    message: 'Hi {previousValue}, it is a pleasure to meet you! May I ask you what is your gender?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Male', trigger: '5' },
      { value: 'female', label: 'Female', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: ({ previousValue }:any) => {
      if (previousValue === 'male') {
        return 'So you are "He", they actually call me "It". How old are you?'
      }

      return 'So you are "She", they actually call me "It". How old are you?';
    },
    trigger: 'age',
  },
  {
    id: 'age',
    trigger: '6',
    user: true,
    validator: (value:any) => {
      if (!value) {
        return 'Please tell me your age'
      } else if (isNaN(value)) {
        return 'Your age must be a number';
      } else if (value < 0) {
        return 'Your age should be positive :)';
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: '6',
    message: 'In which company do you work at the moment?',
    trigger: 'company',
  },
  {
    id: 'company',
    trigger: ({ value }:any) => {
      if (value.toLowerCase().indexOf('adecco') !== -1) {
        return 'adecco';
      }

      return '7';
    },
    user: true,
    validator: (value:any) => {
      if (!value) {
        return 'Please tell me your company name';
      }

      return true;
    },
  },
  {
    id: 'adecco',
    message: 'Great! Since you are working in The Adecco Group I have a small surprise for you!',
    trigger: 'adecco-video',
  },
  {
    component: <Video />,
    id: 'adecco-video',
    trigger: 'review',
  },
  {
    id: '7',
    message: 'Great! Check out your summary.',
    trigger: 'review',
  },
  {
    asMessage: true,
    component: <Review />,
    id: 'review',
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'search' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Name', trigger: 'update-name-text' },
      { value: 'gender', label: 'Gender', trigger: 'update-gender-text' },
      { value: 'age', label: 'Age', trigger: 'update-age-text' },
      { value: 'company', label: 'Company', trigger: 'update-company-text' },
    ],
  },
  {
    id: 'update-name-text',
    message: 'Please tell me your real name.',
    trigger: 'update-name',
  },
  {
    id: 'update-gender-text',
    message: 'Please tell me your real gender.',
    trigger: 'update-gender',
  },
  {
    id: 'update-age-text',
    message: 'I know you are still young, but please share with me your real age.',
    trigger: 'update-age',
  },
  {
    id: 'update-company-text',
    message: 'Do not be shy and share with me the company where you work.',
    trigger: 'update-company',
  },
  {
    id: 'update-name',
    trigger: '7',
    update: 'name',
  },
  {
    id: 'update-gender',
    trigger: '7',
    update: 'gender',
  },
  {
    id: 'update-age',
    trigger: '7',
    update: 'age',
  },
  {
    id: 'update-company',
    trigger: '7',
    update: 'company',
  },
  {
    id: 'search',
    message: 'Well, I want to show you that I am not just a stupid BOT. I can actually search for you and provide you with some basic descriptions. Do you want me to search something about your company for example?',
    trigger: 'search-company-option',
  },
  {
    id: 'search-company-option',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'search-company' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    asMessage: true,
    component: <WikiSearch />,
    id: 'search-company',
    trigger: 'search-done',
  },
  {
    id: 'search-done',
    message: 'Interesting, right? Do you want to search some else?',
    trigger: 'search-option',
  },
  {
    id: 'search-more',
    message: 'Please write something that you would like to search: Ex.: Adecco Group.',
    trigger: 'searchCustom',
  },
  {
    id: 'search-option',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'search-more' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'searchCustom',
    trigger: 'search-company',
    user: true,
    validator: (value:any) => {
      if (!value) {
        return 'Please tell me what should I search for';
      }

      return true;
    },
  },
  {
    end: true,
    id: 'end-message',
    message: 'Thanks! It has been a pleasure talking to you and may be we will meet in person!',
  },
]