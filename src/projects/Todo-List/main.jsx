import { FaCircleCheck, FaRegCircleCheck  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";






function ListsBox({text, check, myId, checkMethod, delMethod, editMethod}){

  const [isCheck, setIsCheck] = useState(check);
  const text_ref = useRef();


  useEffect(() => {
    if(isCheck){
      text_ref.current.style.textDecoration = "line-through";
      text_ref.current.style.fontStyle = "italic";

    }else{
      text_ref.current.style.textDecoration = "none";
      text_ref.current.style.fontStyle = "normal";
    }
  }, [isCheck])

  const onCheckHandler = () => {
    if(isCheck){
      setIsCheck(false);
      checkMethod(myId, !isCheck)
    }else{
      setIsCheck(true)
      checkMethod(myId, !isCheck)
    }
  }


  return (
    <>
    <div className="flex justify-between bg-focusColor p-2 rounded-md">
      <span onClick={onCheckHandler} className="flex gap-2 items-center cursor-pointer">
        <span>{isCheck ? <FaCircleCheck className="box-content p-2 fill-priClr size-5" />: <FaRegCircleCheck className="box-content p-2 fill-priClr size-5" /> }</span>
        <span ref={text_ref}>{text}</span>
      </span>
      <span className="flex items-center gap-2">
        <span onClick={() => editMethod(myId, text)}><FaEdit className="box-content p-2 bg-blue-500 cursor-pointer active:bg-blue-600 rounded-md" /></span>
        <span onClick={() => delMethod(myId)}><MdDelete className="box-content p-2 bg-red-500 cursor-pointer active:bg-red-600 rounded-md" /></span>
      </span>
    </div>
    </>
  )
}


function  EditBox({text, setEditBoxOpen, updateMethod, updateMethodByKeyPress}) {

  const [inpVal, setInpVal] = useState(text);
  const inputField = useRef();
  

  useEffect(() => {
    inputField.current.select();
    inputField.current.setSelectionRange(0,99999);
  }, [inputField])

  return (
    <div onClick={() => setEditBoxOpen(false)} className="bluryBg fixed left-0 top-0 h-screen w-screen flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="p-5 bg-secBgClr rounded-md flex flex-col gap-4 w-[400px]">
          <h2 className="text-center font-semibold text-2xl">Edit List</h2>
          <input
            ref={inputField}
            placeholder="Update List"
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
            onKeyDown={(e) => updateMethodByKeyPress(e,inpVal)}
            className="w-full px-4 py-2 bg-transparent border rounded-md"/>
          <div className="flex gap-2 justify-center">
            <button onClick={() => updateMethod(inpVal)} className="priButton">Update</button>
            <button onClick={() => setEditBoxOpen(false)} className="p-2 px-8 bg-red-500 rounded-md font-medium hover:opacity-85">Cancle</button>
          </div>
      </div>
    </div>
  )
}


function TodoList(){
  const [inpVal, setInpVal] = useState("");
  const [todos, setTodos] = useState([
    // {id: 1, text: "Something", check: false}
  ]);


  // Local Data Base
  const [saveDataFlag, setDataFlag] = useState(false);
  const dataName = "todo-lists";
  useEffect(() => {
    if(saveDataFlag){
      localStorage.setItem(dataName, JSON.stringify(todos));
    }else{ 
      if(localStorage.getItem(dataName) != null && localStorage.getItem(dataName) != "[]"){
        setTodos(JSON.parse(localStorage.getItem(dataName)))
      }else{
        setTodos([{id: 1, text: "Your todo", check: false}])
      }
      setDataFlag(true);
    }
  }, [todos])


  // Add Todo List Handler
  const addTodoHandelr = () => {
    if(inpVal != ""){
      setTodos(prev => [...prev,{id: Date.now(), text: inpVal, check: false}]);
      setInpVal("");
    }
  };

  const addHandlerByKeyPress = (e) => {
    if(e.key == "Enter"){
      if(inpVal != ""){
        setTodos(prev => [...prev,{id: Date.now(), text: inpVal, check: false}]);
        setInpVal("");
      }
    }
  }


  // checker
  const checker = (id, isCheck) => {
    const updateTodo = todos.filter(todo => todo.id === id);
    updateTodo[0].check = isCheck;
    setTodos(prev => [...prev])
  }


  // delete
  const delList = (id) => {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodos(updateTodo);
  }


  // update list
  const [EditBoxOpen, setEditBoxOpen] = useState(false);
  const [selectText, setSelectText] = useState("");
  const [selectId, setSelectId] = useState(null);
  const editBox = (id, text) => {
    setSelectText(text);
    setSelectId(id)
    setEditBoxOpen(true)
  }
  const updateList = (updatedText) => {
    if(selectText && selectId){
      const selectList = todos.filter(todo => todo.id === selectId )
      selectList[0].text = updatedText;
      setTodos((prev) => [...prev]);
      setEditBoxOpen(false)
    }
  }
  const updateListByKeyPress = (e, updatedText) => {
    if(e.key === "Enter"){
      console.log(e.key);
      
      if(selectText && selectId){
        const selectList = todos.filter(todo => todo.id === selectId )
        selectList[0].text = updatedText;
        setTodos((prev) => [...prev]);
        setEditBoxOpen(false)
      }
    }
  }

  return (
    <div className="flex justify-center items-center">
    {EditBoxOpen ? <EditBox updateMethodByKeyPress={updateListByKeyPress} updateMethod={updateList} setEditBoxOpen={setEditBoxOpen} text={selectText}/> : ""}

    {/* main Box */}
      <div className="p-8 bg-secBgClr w-[500px] rounded-md">
          <div className="flex flex-col gap-10 w-full">
              <div className="flex border-2 border-focusColor rounded-md overflow-hidden">
                  <input
                    type="text"
                    value={inpVal}
                    onKeyDown={addHandlerByKeyPress}
                    onChange={(e) => setInpVal(e.currentTarget.value)}
                    placeholder="Enter Your Task"
                    className="w-full px-4 py-2 bg-transparent"/>
                  <button onClick={addTodoHandelr} className="priButton">Add</button>
              </div>
              <div className="flex flex-col gap-2">
                {todos.map(todo => (
                  <ListsBox 
                    key={todo.id}
                    text={todo.text}
                    check={todo.check}
                    myId={todo.id}
                    checkMethod={checker}
                    delMethod={delList}
                    editMethod={editBox}
                  />
                ))}
              </div>
          </div>
      </div>
    </div>
  )
}


export default TodoList;