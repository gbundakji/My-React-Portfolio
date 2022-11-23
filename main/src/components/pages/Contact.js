import { useState } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contact'>
        <div>
            <h1>Contact Me!</h1>
        </div>
            <div className='contact-info'>
            <h2>Hello {userName}!</h2>
                <form className="form">
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                    {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
            </div>
            )}
        </div>
    </div>    
  );
}

export default Contact;