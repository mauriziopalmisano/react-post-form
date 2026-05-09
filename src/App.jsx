import { useState, useEffect } from 'react'

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

  const fetchMessaggiGet = () => {
    fetch(URL_API)
      .then(response => {
        return response.json();
      }).then(json => {
        const listMessages = json.map(message => {
          const { author, title, body, public: pubblico } = message;
          const newMessage = { ...defaultOBJ, id: crypto.randomUUID, author, title, body, public: pubblico };
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
      <div className='container'>
        <h1 className='text-center'>Inserisci un nuovo Messaggio</h1>
        <form className='row ' onSubmit={submitHandler}>
          <div className='col-6 my-3'>
            <div className="input-group mb-3">
              <span className="input-group-text">Autore</span>
              <input type="text" className="form-control" value={dataForm.author} name='author' onChange={changeHandler} required />
            </div>
          </div>
          <div className='col-6 my-3'>
            <div className="input-group mb-3">
              <span className="input-group-text">Titolo</span>
              <input type="text" className="form-control" value={dataForm.title} name='title' onChange={changeHandler} required />
            </div>
          </div>
          <div className='col my-3'>
            <div className="input-group">
              <span className="input-group-text">Messaggio</span>
              <textarea className="form-control" rows="10" value={dataForm.body} name='body' onChange={changeHandler} required></textarea>
            </div>
          </div>
          <div className='co-12 my-3'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="checkDefault" checked={dataForm.public} name='public' onChange={changeHandler} />
              <label className="form-check-label" htmlFor="checkDefault">
                Rendi il Messaggio pubblico
              </label>
            </div>
          </div>
          <div className='col-12 my-3'>
            <button type="submit" className="btn btn-dark">Aggiungi</button>
          </div>
        </form>
        <div className='row'>
          <div className='col text-center my-3'>
            <h2>Messaggi salvati</h2>
          </div>
          {dataStoredMessages.map(message => {
            const { id, author, title, body, public: pubblico } = message;
            return (pubblico && (
              <div key={id} className='col=12'>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><strong>Titolo:</strong><br />{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary"><strong>Autore:</strong><br /> {author}</h6>
                    <p className="card-text"><strong>Messaggio:</strong><br />{body}</p>
                  </div>
                </div>
              </div>
            )
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
