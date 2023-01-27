
import './App.css';
import {data} from './components/data'

function App() {
  const list=data.map((car)=>{
        return (
          <div className='card-body' key={car.id}>
              <img className="image" src={car.link}/>
              <h2 className="heading">{car.name}</h2>
              <div className="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna aliquam erat volutpat.</div ><div className="body">
              <button className="button">{car.content}</button>
              </div>
          </div>
        )
      }

  )

  return(
    <div className="Card">
      {list}
      </div>
  );
}

export default App;
