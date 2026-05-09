import { PersonFill, Fonts, JournalText, FileEarmarkPlusFill } from 'react-bootstrap-icons'

function Form({
    submitHandler,
    changeHandler,
    dataForm
}) {


    return (
        <form className='row ' onSubmit={submitHandler}>
            <div className='col-6 my-3'>
                <label  className='mb-2' >Autore</label>
                <div className="input-group mb-3">
                    <span className="input-group-text text-black"><PersonFill color='black'/></span>
                    <input type="text" className="form-control " value={dataForm.author} name='author' onChange={changeHandler} id="author" required />
                </div>
            </div>
            <div className='col-6 my-3'>
                <label  className='mb-2' >Titolo</label>
                <div className="input-group mb-3">
                    <span className="input-group-text"><Fonts color='black'/></span>
                    <input type="text" className="form-control" value={dataForm.title} name='title' onChange={changeHandler} id='title' required />
                </div>
            </div>
            <div className='col my-3'>
                <label className='mb-2'>Messaggio</label>
                <div className="input-group">
                    <span className="input-group-text"><JournalText color='black'/></span>
                    <textarea className="form-control" rows="5" value={dataForm.body} name='body' onChange={changeHandler} required></textarea>
                </div>
            </div>
            <div className='co-12 my-3'>
                <div className="form-chec form-switch d-flex gap-2 ">
                    <input className="form-check-input box-shadow" type="checkbox" role="switch" id="checkDefault" checked={dataForm.public} name='public' onChange={changeHandler} />
                    <label className="form-check-label" htmlFor="checkDefault">
                        Rendi il Messaggio pubblico
                    </label>
                </div>
            </div>
            <div className='col-12 d-flex justify-content-center my-3'>
                <button type="submit" className="btn btn-outline-primary  rounded-pill px-4 d-flex align-items-center column-gap-1"><FileEarmarkPlusFill />Aggiungi</button>
            </div>
        </form>
    )
}
export default Form