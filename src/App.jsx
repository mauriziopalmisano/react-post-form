import { useState, useEffect } from 'react'

const defaultOBJ = { title: '', author: '', body: '', public: false };

function App() {
  const [dataForm, setDataForm] = useState(defaultOBJ);

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    const newDataForm = { ...dataForm, [name]: type === 'checkbox' ? checked : value };
    setDataForm(newDataForm);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
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
    });
  }


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
          <div className="mt-4 p-3 bg-light border rounded">
            <small className="text-muted d-block mb-1">
              Stato corrente (debug):
            </small>
            <code className="small">{JSON.stringify(dataForm, null, 2)}</code>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
