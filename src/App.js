import './App.css';
import menu from './menu';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(menu);

  function filterItems(category) {
    const updatedItems = menu.filter((item) => item.category === category);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1 className="header text-center mt-5 main-heading">FILTER IMAGE GALLERY</h1>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around mt-5">
          <button className="btn btn-warning" onClick={() => filterItems('car')}>CAR</button>
          <button className="btn btn-warning" onClick={() => filterItems('bike')}>BIKE</button>
          <button className="btn btn-warning" onClick={() => setItems(menu)}>ALL</button>
        </div>
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {/* Map through items and display cards */}
                {items.map((item) => (
                  <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                    {/* Adjust column size to display 3 items in a row */}
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                        <p className="price">{item.price}</p>
                        <a href="#" className="btn btn-primary">BOOK NOW</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
