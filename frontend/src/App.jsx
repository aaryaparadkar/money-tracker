import './App.css'

function App() {
  const [name, setName] = useState('')
  const [datetime, setDatetime] = useState('')
  const [description, setDescription] = useState('')

  function addNewTransaction() {
    
  }

  return (
    <>
      <main>
        <h1>₹400<span>.00</span></h1>
        <form onSubmit={addNewTransaction}>
          <div className='Basics'>
          <input type="text" 
                 value={name} 
                 onChange={ev => setName(ev.target.value)}
                 placeholder='+200' />
          <input type="datetime-local"
                 value={datetime}
                 onChange={ev => setDatetime(ev.target.value)} />
          </div>
          <div className='Description'>
          <input type="text" 
                 placeholder='Description' 
                 value={description}/>
                 onChange={ev => setDescription(ev.target.value)}
          </div>
          <button type='submit'>Add new Transaction</button>
        </form>
        <div className="Transactions">
          <div className="Transaction">
            <div className="left">
              <div className="Name">New Mobile</div>
              <div className="Description">Old phone died</div>
            </div>
            <div className="right">
              <div className="Price Red">-₹37,000</div>
              <div className="Datetime">2023-1-08 20:12</div>
            </div>
          </div>
          <div className="Transaction">
            <div className="Left">
              <div className="Name">New Mobile</div>
              <div className="Description">Old phone died</div>
            </div>
            <div className="Right">
              <div className="Price Green">+₹37,000</div>
              <div className="Datetime">2023-1-08 20:12</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App