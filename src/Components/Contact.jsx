import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [viewerCount, setViewerCount] = useState(650); // Initial viewer count

  useEffect(() => {
    const fetchViewerCount = async () => {
      const updatedCount = viewerCount + 1;
      setViewerCount(updatedCount);
    };
    fetchViewerCount();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted successfully!');
  };

  return (
    <StyledWrapper>
      <div className="absolute top-0 z-[-2] h-screen w-screen vt323-font bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Contact Me</p>
          <p className="message">Feel free to Ask me Something😁</p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder required />
              <span>Name</span>
            </label>
          </div>
          <label>
            <input className="input" type="email" placeholder required />
            <span>Email</span>
          </label>
          <label>
            <input className="input" type="text" placeholder required />
            <span>Subject</span>
          </label>
          <label>
            <textarea className="input" placeholder=" " rows="5" required></textarea>
            <span>Message</span>
          </label>
          <button type="submit" className="submit">Submit</button>
        </form>

        <footer className="footer">
          <a href="https://github.com/dpushkar26" target="_blank" rel="noopener noreferrer">
            Made with ❤️ by <span className="neon-name"> Aditya Jadhav</span>
          </a>
          <p className="viewer-count">Viewer Count: {viewerCount}</p>
        </footer>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .title::after {
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: rgba(51, 51, 51, 0.5);
    color: #fff;
    width: 100%;
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .submit {
    border: 2px dotted #fff;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    background-color: #00bfff;
    transition: 0.3s ease;
    cursor: pointer;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  .footer {
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 20px;
  }

  .viewer-count {
    margin-top: 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Contact;
