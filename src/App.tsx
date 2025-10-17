/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import './App.css'
import { useTranslator } from './hooks/useTranslator';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { TextArea } from './components/TextArea';
import { SectionType } from './types.d';
import { useEffect } from 'react';
import { translate } from './services/translate';

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

  useEffect(() => {
    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [fromText])

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage} 
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              loading={loading}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' 
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
