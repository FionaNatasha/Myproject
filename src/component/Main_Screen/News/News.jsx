import {useSelector}  from 'react-redux'
import New from './New/New.jsx'
import './News.css'


function News() {
  const turs = useSelector((state)=>state.typeOfTurs)
 
  const blockOfTurs = turs.map((elem, i)=><New key={i} {...elem}/>)//так как новости о турах имеют однотипное строение
                                                                    //используем метод map, который в данном случае возрашает массив компонентов.
   console.log(blockOfTurs)  
   return (
      <div className="news">
       {blockOfTurs}
      </div>
    );
  }
  
  export default News;