import React,{useState,useEffect} from 'react'
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [typeMsg,setTypeMsg]=useState("hii")
  // const [dateLabel,setDateLabel] = useState([]);
  const [chatMessages,setChatMessges] =  useState({
    senderName:"",
    messages:"",
    messageTime:"",
    dateLabel:"", 
  })
  const [allMessage,setAllMessage]= useState([]);
  // const [label,setLabel]=useState("Today");
  const [profileName,setProfileName]=useState("Prem");
  const [status,setStatus]=useState("Online");
  const[user,setUser]= useState();

  const handleMessage = (e)=>{
    const{name,value}= e.target;
    setChatMessges({...chatMessages,[name]:value})
  }
   
  const addMessge = (e)=>{
    e.preventDefault();
    
    const newMessage = {...chatMessages,id:new Date().getTime().toString()}

    setAllMessage([...allMessage,newMessage])
    console.log(allMessage)
    setChatMessges({senderName:"",messages:"",messageTime:"",dateLabel:""})

  }

  const handleSelect = (e)=>{ 
    // console.log(e.target.value)
    setUser(e.target.value)
  }

  const handleButton =()=>{
    console.log(allMessage)
  }

  const handleChange = (e)=>{
    if(e.target.value===""){
      setProfileName("Prem")
    }else{

      setProfileName(e.target.value)
    }
  }
  const handleStatus= (e)=>{
    if(e.target.value===""){
      setStatus("Online")
    }else{
      setStatus(e.target.value)
    }

  }



  return (
    <div className="App">
      <div className="container border border-dark  d-flex justify-content-around bg-dark text-white ">
       
        <div className="card" >
          <div className="card-header text-white bg-success">
              <div className="header-content">
                <div className="profile">
                  <div className="profile-image">
                    <img src="data:image/jpeg;base64,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" alt="profile" />
                  </div>
                  <div style={{marginLeft:"10px",width:"50%"}} >
                    <p className="profileName">{profileName}</p>
                    <span style={{fontSize:"12px"}} >{status}</span>
                  </div>
                </div>
                <div className="media">
                  {/* <p>Media</p> */}

                  <div className="videocall">                  
                    <p>Videocall</p>
                  </div>

                  <div className="audiocall">
                   <p>Audio Call</p>
                  </div>
                </div>
              </div>  
          </div>

          <div className="card-body ">
           
              <div className="label">
               {
                  allMessage.map((currLabel) => {
                    return (
                      <div className="label-text">
                      {currLabel.dateLabel} 
                  </div>
                    )

                  })
               } 
              
              </div>
             
             
               <div className="msgconatiner">
               {
                
                 allMessage.map((currMsg) => {
                   return (
                     <div className="msg" >
                         <div>
                           <h2>{currMsg.senderName}</h2>
                           <p className="currMsg">{currMsg.messages}</p>
                         </div>
                         <div className="time">
                           <p className="currentTime">{currMsg.messageTime}</p>
                         </div>
                     </div>
                   )
                 })
               }


<div className="right-msg-container">
            {
              allMessage.map((currMsg) => {
                return(
                  <div className="right-msg "> 
                  <div>
                    <p>{currMsg.senderName}</p>
                    <p className="currMsg">{currMsg.messages}</p>
                  </div>
                  <div className="time">
                    <p className="currentTime">{currMsg.messageTime}</p>
                  </div>
            </div>
                )
              })
            }

        </div>


           </div>
             
             
            
           
              



          </div>
          <div className="card-footer   text-muted" id="msgbox">
              {/* <img src="https://www.svgrepo.com/show/147955/smile.svg" alt="smile" />            */}
              <input type="text"   className="textbox" placeholder="Type a Message"/>
          </div>
        </div>


        <div className="form" >
          <label style={{display:"block"}}>Profile Name</label>
          <input type="text"  className="profileName" onChange={handleChange} placeholder="Profile Name"/>
         
          <label style={{display:"block"}}>Activity Status</label>
          <input type="text" className="profileName" onChange={handleStatus} placeholder="Online"/>
        
          <label style={{display:"block"}}>Date Label</label>


          <div className="dateLabel">
          <input type="text" className="profileName"  onChange={handleMessage} name="dateLabel" value={chatMessages.dateLabel}   placeholder="Today or 18 Mar"/>
          <button className="btn btn-success" onClick={handleButton} >Add</button>
        </div>


         <div className="chatbot" style={{marginTop:"10px"}}>
            <h4>Chat Messeges</h4>
            <div className="dateLabel">
              <label style={{display:"block"}}>Sender Name</label>
              <input type="text" className="profileName" name="senderName" value={chatMessages.senderName} onChange={handleMessage} placeholder="Your Name"/>
              

              <label style={{display:"block"}}>Add new message</label>
              <textarea  className="profileName" name="messages" onChange={handleMessage} value={chatMessages.messages} placeholder="Add your messeges"/>

                <div className="sender-reciver">
                <Form.Select className="bg-dark text-white"  onChange={handleSelect} aria-label="Default select example">
                    
                    <option Selected value="sender">Sender</option>
                    <option value="reciver">Reciver</option>
                </Form.Select>
                  
                </div>

              <div>
                  <label style={{display:"block"}}>Message Time</label>
                  <input type="text" className="timeBox"  name="messageTime" onChange={handleMessage} value={chatMessages.messageTime} placeholder="10:30AM"/>
                  <button className="btn btn-primary mt-2" style={{display:"block",width: "70%"}} onClick={addMessge} >Add</button>
              </div>

            </div>
        </div>   

          
         <div className="msgcrudbox">
             <ul>
               {
                 allMessage.map((currLabel)=>{
                   return(

                  <li>
                  <div className="crudactions">
                    <div>
                    <h6>{currLabel.dateLabel}</h6>
                    </div>
                    <div>

                    <button>Edit</button>
                    <button>Delete</button>  
                      </div>
                    </div> 
                </li> 
                   )

                 }) 
               }

               {
                 allMessage.map((currLabel)=>{
                  return(

                 <li>
                 <div className="crudactions">
                   <div>
                   <h6>{currLabel.messages  }</h6>
                   </div>
                   <div>

                   <button>Edit</button>
                   <button>Delete</button>  
                     </div>
                   </div> 
               </li> 
                  )

                }) 
                 
               }

             </ul>
         </div>
        </div>

      </div>
    
    </div>
  );
}

export default App;
