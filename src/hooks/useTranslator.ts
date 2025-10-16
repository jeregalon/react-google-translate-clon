import { useReducer } from 'react';
import type { State, Action } from '../types.d';

// 1. Create an initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '', 
  result: '',
  loading: false 
}

// 2. Create a reducer function
function reducer(state: State, action: Action) {
   const { type } = action

   if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
   }

   if (type === 'SET_FROM_LANGUAGE') {
      return {
        ...state,
        fromLanguage: action.payload
      }
   }

   if (type === 'SET_TO_LANGUAGE') {
      return {
        ...state,
        toLanguage: action.payload
      }
   }

   if (type === 'SET_FROM_TEXT') {
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
   }

   if (type === 'SET_RESULT') {
      return {
        ...state,
        loading: false,
        result: action.payload
      }
   }

   return state
}

export function useTranslator () {
  // 3. Use the useReducer hook
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  // No devolver directamente el dispatch

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = payload => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = payload => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = payload => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = payload => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}