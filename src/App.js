import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));


  const handleSubmit = (e) => {

    e.preventDefault();

    try {

      setError(false);

      let colors = new Values(color).all(10);

      setColorList(colors);

      toast.success('Colors generated successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {

      setError(true);

      console.log(error);

      toast.error('Invalid Input', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

  };

  return (
    <>

      <h3>Colors Generator</h3>

      <section className="container">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder='#f15025'
            name={color}
            className={`${error ? 'error' : null}`}
            onChange={(e) => setColor(e.target.value)}
          />

          <button className='btn' type='submit'>Generate Colors</button>
        </form>

      </section>

      <section className="colors">
        {colorList.map((color, index) => {
          return (
            <>
              <SingleColor key={index} {...color} index={index} />
            </>
          );
        })};
      </section>

      <ToastContainer />

    </>
  )
}

export default App;




