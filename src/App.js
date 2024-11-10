import { useState } from 'react';
import './App.css';


function App() {

  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];


  const [data, setData] = useState(tableData);

  const sortbyDate = () => {
    const newData = [...data];
    const sortedData = newData.sort((a,b)=> new Date(a.date) - new Date(b.date) ); 
    setData(sortedData);
  };

  const sortbyViews = () => {
    const newData = [...data];
    const sortedData = newData.sort((a,b)=>a.views-b.views);
    setData(sortedData);
  };

  return (
    <div className="App">
       <h1>Date and Views Table</h1>

       <button onClick={()=>sortbyDate()}>Sort by Date</button>
       <button onClick={()=>sortbyViews()}>Sort by Views</button>
       <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
          {data.map((e, index)=>(
            <tr key={index}>
              <td>{e.date}</td>
              <td>{e.views}</td>
              <td>{e.article}</td> 
            </tr>
          ))}
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default App;
