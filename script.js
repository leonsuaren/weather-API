const App = () => {
  const { useEffect, useState } = React;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=89e5d770eac3d99dee8786f4791aa5fb')
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <div className='container page-layout'>
      <h1>hola</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))