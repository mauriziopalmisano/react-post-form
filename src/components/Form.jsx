function Form({
    submitHandler,
    changeHandler,
    dataForm
}) {


    return (
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
    )
}
export default Form