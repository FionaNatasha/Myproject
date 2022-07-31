import './New.css'

function New(props) {
    return (
      <div className="new">
       <div className="wrap_new"><img src={props.img} alt=''/>
       <div className="headers" >{props.header}</div>
       <div className="description">{props.discriptions}</div>
       </div>
     
      </div>
    );
  }
  
  export default New;