/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useTranslator } from './hooks/useTranslator';

function App() {
   
  const {
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
  } = useTranslator()

  console.log(fromLanguage)

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Cambiar a Español</button>
    </div>
  )
}

export default App
