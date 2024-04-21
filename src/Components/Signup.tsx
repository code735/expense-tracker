import { CircularProgress } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function SignUp() {

  const [username, setUsername]             = useState("");
  const [password, setPassword]             = useState("");
  const [signupDisabled, setSignupDisabled] = useState(true);
  const [errorMessage, setErrorMessage]     = useState("");
  const [loading, setLoading]               = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true)
  
    const payload = {
      username,
      password,
    };
  
    console.log('payload', payload);
  
    try {
      if (username === "" || password === "") {
        setErrorMessage("Please enter both username and password.");
        return;
      }
  
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters long.");
        return;
      }
  
      const response = await fetch(process.env.REACT_APP_API + `/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        if (response.status === 400) {
          setErrorMessage("Bad request. Please check your input.");
        } else if (response.status === 401) {
          setErrorMessage("User already exists.");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const data = await response.json();
  
        if (data.status === 'success') {
          console.log('Success:', data);
          setErrorMessage("");
        } else {
          console.log('Error:', data);
          setErrorMessage(data.message);
        }
      }

      setTimeout(() => {
        setLoading(false)
      }, 1000);

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("An error occurred. Please try again later.");
      
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      
    }
  };
    

  useEffect(() => {
    if (username && password) {
      setSignupDisabled(false);
    } else {
      setSignupDisabled(true);
    }
  }, [username, password]);

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className="form-content">
          <button type="submit" className='google-signin signup-element'>
            Sign in with google
          </button>
          <input type="text" placeholder='username' className='signup-element' value={username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
            setErrorMessage("");
          }} />
          <input type="password" placeholder='password' className='signup-element' value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
            setErrorMessage("");
          }} />
          <button type="submit" style={{ color: signupDisabled ? "#b4b4b4" : "#000" }} disabled={signupDisabled} className='signup-btn signup-element'>
            {
              loading ? <CircularProgress size={30} /> : <p>Sign Up</p>
            }
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className="wave-patterns">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CCAFA5" fillOpacity="1" d="M0,96L6.2,80C12.3,64,25,32,37,32C49.2,32,62,64,74,69.3C86.2,75,98,53,111,69.3C123.1,85,135,139,148,154.7C160,171,172,149,185,144C196.9,139,209,149,222,160C233.8,171,246,181,258,165.3C270.8,149,283,107,295,106.7C307.7,107,320,149,332,138.7C344.6,128,357,64,369,80C381.5,96,394,192,406,234.7C418.5,277,431,267,443,234.7C455.4,203,468,149,480,133.3C492.3,117,505,139,517,154.7C529.2,171,542,181,554,154.7C566.2,128,578,64,591,53.3C603.1,43,615,85,628,128C640,171,652,213,665,224C676.9,235,689,213,702,176C713.8,139,726,85,738,106.7C750.8,128,763,224,775,250.7C787.7,277,800,235,812,213.3C824.6,192,837,192,849,208C861.5,224,874,256,886,245.3C898.5,235,911,181,923,186.7C935.4,192,948,256,960,266.7C972.3,277,985,235,997,186.7C1009.2,139,1022,85,1034,69.3C1046.2,53,1058,75,1071,112C1083.1,149,1095,203,1108,218.7C1120,235,1132,213,1145,186.7C1156.9,160,1169,128,1182,138.7C1193.8,149,1206,203,1218,197.3C1230.8,192,1243,128,1255,101.3C1267.7,75,1280,85,1292,101.3C1304.6,117,1317,139,1329,160C1341.5,181,1354,203,1366,229.3C1378.5,256,1391,288,1403,293.3C1415.4,299,1428,277,1434,266.7L1440,256L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DCD2CC" fillOpacity="1" d="M0,128L6.2,154.7C12.3,181,25,235,37,256C49.2,277,62,267,74,250.7C86.2,235,98,213,111,181.3C123.1,149,135,107,148,112C160,117,172,171,185,208C196.9,245,209,267,222,272C233.8,277,246,267,258,266.7C270.8,267,283,277,295,256C307.7,235,320,181,332,181.3C344.6,181,357,235,369,218.7C381.5,203,394,117,406,90.7C418.5,64,431,96,443,133.3C455.4,171,468,213,480,208C492.3,203,505,149,517,138.7C529.2,128,542,160,554,186.7C566.2,213,578,235,591,208C603.1,181,615,107,628,96C640,85,652,139,665,165.3C676.9,192,689,192,702,197.3C713.8,203,726,213,738,229.3C750.8,245,763,267,775,266.7C787.7,267,800,245,812,234.7C824.6,224,837,224,849,224C861.5,224,874,224,886,218.7C898.5,213,911,203,923,202.7C935.4,203,948,213,960,202.7C972.3,192,985,160,997,128C1009.2,96,1022,64,1034,74.7C1046.2,85,1058,139,1071,138.7C1083.1,139,1095,85,1108,101.3C1120,117,1132,203,1145,224C1156.9,245,1169,203,1182,176C1193.8,149,1206,139,1218,122.7C1230.8,107,1243,85,1255,80C1267.7,75,1280,85,1292,80C1304.6,75,1317,53,1329,85.3C1341.5,117,1354,203,1366,224C1378.5,245,1391,203,1403,170.7C1415.4,139,1428,117,1434,106.7L1440,96L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>        </div>
      </form>
    </div>
  );
}
