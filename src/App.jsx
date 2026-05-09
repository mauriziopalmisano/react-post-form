import { useState, useEffect } from 'react'
import CardsMessage from './components/CardsMessage';
import Form from './components/Form';
import { ArrowRepeat } from 'react-bootstrap-icons';

const defaultOBJ = { title: '', author: '', body: '', public: false };
const URL_API = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';


function App() {
  const [dataForm, setDataForm] = useState(defaultOBJ);
  const [dataStoredMessages, setStoredMessages] = useState([]);






  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const newDataForm = { ...dataForm, [name]: type === 'checkbox' ? checked : value };
    setDataForm(newDataForm);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(URL_API, {
      // Se non mettete questa proprietà le API non funzioneranno XD
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(dataForm)
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log('Risposta server', json);
      alert('messaggio inviato con successo');
      setDataForm(defaultOBJ);
      fetchMessaggiGet();
    }).catch(error => {
      alert(`messaggio non inviato ${error}`);
    });
  }

  const removeMessage = (id) => {
    const updatedMessageList = dataStoredMessages.filter(message => message.id !== id);
    setStoredMessages(updatedMessageList);
  }

  const fetchMessaggiGet = () => {
    fetch(URL_API)
      .then(response => {
        return response.json();
      }).then(json => {
        const listMessages = json.map(message => {
          const { author, title, body, public: pubblico } = message;
          const newMessage = { ...defaultOBJ, id: crypto.randomUUID(), author, title, body, public: pubblico };
          return newMessage;
        });
        setStoredMessages(listMessages);
      }).catch(error => {
        alert(`eeeeh abbiamo superato il kilowatt ${error}`);
      });
  }

  useEffect(() => {
    fetchMessaggiGet();
  }, []);



  return (
    <>
      <div className='sfondo-moderno'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center'>Inserisci un nuovo Messaggio</h1>
            </div>
          </div>
          <Form
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            dataForm={dataForm}
          />
          <div className='row'>
            <div className='col-12 text-center my-3 d-flex justify-content-center align-items-center column-gap-2'>
              <h2>Messaggi salvati</h2>
              <button className='btn btn-outline-primary d-flex justify-content-center align-items-center box-shadow' onClick={() => fetchMessaggiGet()}><ArrowRepeat /></button>
            </div>
            <CardsMessage
              remove = {removeMessage}
              dataMessages={dataStoredMessages}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
