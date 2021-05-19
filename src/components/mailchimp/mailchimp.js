import * as React from "react"
import {useState, useEffect} from "react"
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Container = styled.div`
width: 100%;
padding: 30px;
min-width: 400px;

@media(max-width: 650px){
  min-width: auto;
}
p{
  font-family: obviously;
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 18px;
}
`

const Boxes = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
font-family: obviously;
font-weight: 500;
input{
  font-family: obviously;
  font-weight: 500;
  text-transform: uppercase;
  width: 50%;
  border: none;
  outline: 4px solid var(--char);
  padding: 10px;
  margin: 0;
  background-color: var(--cream);
  &.email{
    width: 100%;
  }
}

button{
  font-family: obviously;
  font-weight: 500;
  text-transform: uppercase;
  width: 50%;
  outline: 4px solid var(--char);
  padding: 10px;
  background-color: var(--orange);
  :hover{
    cursor: pointer;
  }
}
`

const Signup = (props) => {
  const [closeBox, checkClosed] = useState(false);



  const [email, checkEmail] = useState(null);
  const [result, checkResult] = useState(null);

  const [fName, checkFname] = useState(null);
  const [lName, checkLname] = useState(null);

  const [closeTemp, setCloseTemp] = useState(undefined)
  const [storeClose, setStoreClose] = useState(undefined)

  const clickBox = () => {
    checkClosed(!closeBox);
    sessionStorage.setItem('tempClose', true);
  }


  useEffect(() => {
    setCloseTemp(sessionStorage.getItem('tempClose'))
    setStoreClose(localStorage.getItem('closed'))
  }, [])

  console.log(closeTemp);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      FNAME: fName,
      LNAME: lName
    })
    checkResult({result: result})
    }

  const handleChange = e => {
    checkEmail(e.target.value)
  }

  const fNameChange = e => {
    checkFname(e.target.value)
  }

  const lNameChange = e => {
    checkLname(e.target.value)
  }

  let peepResult;
  let resultMessage;
  let hideform;
  let delayform;

  if(result === null){
    peepResult = 'default'
  }else {
    peepResult = result.result.result
    if(result.result.msg === 'The email you entered is not valid.'){
        resultMessage = result.result.msg
    }else resultMessage = "looks like you're already subscribed."

  }



  if(peepResult === 'success'){
    setTimeout(() => {checkClosed(true)}, 2000);
    setTimeout(() => {localStorage.setItem('closed', true)}, 2000) ;
  }

  return(

        <form onSubmit={handleSubmit} className={`form ${hideform}`}>

        <Container className="">
        <>
        {peepResult === 'success' ? <p>{props.successText}</p>
        : peepResult === 'error' ? <p>{resultMessage}</p>
        :
        <p>{props.text}</p>
        }
        <h3>{props.emailText}</h3>
        <Boxes>
        <input
        className={'box'}
        type="text"
        value={fName}
        onChange={fNameChange}
        placeholder="first name"
        />
        <input
        className={'box'}
        type="text"
        value={lName}
        onChange={lNameChange}
        placeholder="last name"
        />
       <input
       className={'box email'}
       type="text"
       value={email}
       onChange={handleChange}
       placeholder="email address"
       />
       <button className={'box'}  type="submit">{props.submitText}</button>

       </Boxes>
       </>
        </Container>

        </form>

  )
}

export default Signup
