function CardsMessage({ dataMessages }) {
  return <>
    {dataMessages.map(message => {
      const { id, author, title, body, public: pubblico } = message;
      return (pubblico && (
        <div key={id} className='col=12'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><strong>Titolo:</strong><br />{title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary border-bottom border-top border-3 border-black py-2"><strong>Autore:</strong><br /> {author}</h6>
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