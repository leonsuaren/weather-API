const App = () => {
  const { useState } = React;
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState('');
  
  function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89e5d770eac3d99dee8786f4791aa5fb`)
    setTemp(tempToF(result.data.main.temp));
    setIcon(result.data.weather[0].icon);
    console.log(result.data);
  }

  return (
    <div className='container page-layout' onSubmit={handleOnSubmit}>
      <h1>Weather by City</h1>
      <form>
        <label>
          <input className="form-control" name='city' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
      <div>
        <h5>Temperature: {temp} &#8457;</h5>
        <img 
        src={icon === '' ? '' : `http://openweathermap.org/img/w/${icon}.png`}
      />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));