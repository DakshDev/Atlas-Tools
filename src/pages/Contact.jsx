
function Contact() {
function sendDataHandler(e){
    e.preventDefault()
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if(firstName != "" && lastName != "" && email != "" && message != ""){
      fetch("http://localhost:8080",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message
        })
      }).then(() => {
        alert("Message is Sended !")
          e.target.firstName.value = "";
          e.target.lastName.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
      })
      .catch(err => console.log("While Post Data : ", err.message));
    }  
}

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={sendDataHandler} className="flex flex-col gap-2 w-[500px]">
        <div className="flex gap-2">
          <div className="w-full"><input className="bg-secBgClr rounded-md" placeholder="Enter first name" type="text" name="firstName"/></div>
          <div className="w-full"><input className="bg-secBgClr rounded-md"  placeholder="Enter last name" type="text" name="lastName"/></div>
        </div>
        <div><input className="bg-secBgClr rounded-md"  placeholder="Enter email" type="email" name="email" /></div>
        <div><textarea name="message"  placeholder="Enter message" className="h-40 resize-none bg-secBgClr rounded-md"></textarea></div>
        <div className="flex justify-center items-center">
          <button className="priButton" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
