function CardsMessage({ dataMessages, remove }) {
  return <>
    {dataMessages.map(message => {
      const { id, author, title, body, public: pubblico } = message;
      return (pubblico && (
        <div key={id} className='col-6 mb-4'>
          <div className="card card-messaggio position-relative">
          <button className=" btn btn-close position-absolute location" onClick={() => remove(id)}></button>
            <div className="card-body">
              <h5 className="card-title"><strong>Titolo:</strong><br />{title}</h5>
              <h6 className="card-text mb-2"><strong>Autore:</strong><br /> {author}</h6>
              <p className="card-text"><strong>Messaggio:</strong><br />{body}</p>
            </div>
          </div>
        </div>
      )
      )
    })}
  </>
}
export default CardsMessage