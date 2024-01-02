import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addnewtask, deletetask, updatetask } from "./JS/TaskSlice";
function App() {
  const [valueinput, setvalueinput] = useState({ name: "" });
  const dispatch = useDispatch();
  const data = useSelector((store) => store.task);
  const [show, setshow] = useState(false);
  const [inputupdate, setinputupdate] = useState();
  console.log(data);

  return (
    <div className="center">
      <div className="add">
      <div className="txt">Add task:</div><input
        type="text"
        onChange={(e) => {
          setvalueinput({ name: e.target.value });
        }}
      ></input>
      <button className="bouton" onClick={() => dispatch(addnewtask(valueinput))}>Add</button></div>
      <div className="list">
        {data.map((el) => (
          <div className="contenu">
            
           <h3>{el.name}</h3>
            <div className="contenu-btn">
            <button className="bouton-list" onClick={() => dispatch(deletetask(el.name))}>
              delete
            </button>
            <button  className="bouton-list" onClick={() => (setshow(!show),setinputupdate(el))}>update</button></div>
            {show ? (
              <div>
                <input
                  type="text"
                  onChange={(e) => setinputupdate({...inputupdate,name:e.target.value})}
                ></input>
                <button  className="bouton" onClick={()=>dispatch(updatetask(inputupdate))}>
                  ok
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
