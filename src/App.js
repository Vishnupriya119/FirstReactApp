import pho from './photo.jpeg';
import './App.css';


function App() {

  return (
    <div className="App">

        <header className='App-header'>
          <p></p>
          <img src={pho} alt="" style={{width:'170px',height: '250px',position:'absolute',top:'5%',left:'20%'}}/>
          
          <div style ={{textAlign:'centre',fontsize:'30px',color:'white'}}>
          <p>This is VishnuPriya</p>
          <p>My age is 20</p>
          <p>I am from Coimbatore</p>
          </div>


      </header>
      <p></p>

      <Movies>

        mname="Lift"
        year="2021"
        rate="4"
      </Movies>

      <p></p>

      <Movies>

        mname="Ponniyin Selvan 1"
        year="2022"
        rate="4.8"
      </Movies>

    <p></p>
    <Movies>

      mname="Varisu"
      year="2023"
      rate="4.4"
    </Movies>
    <p>
      
    </p>
    </div>
  );
}

export default App;
