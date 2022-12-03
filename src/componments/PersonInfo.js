import './PersonInfo.css';
import ReactDatePicker from 'react-datepicker';

import DatePicker from "react-datepicker";
import { useState } from 'react';

const PersonInfo = ({ index, type, person, updatePerson }) => {
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    //console.log('type',type);
    const [firstName, setFirstName] = useState(null);

    return (
        <div className="personInfo">
                    <h2 className='info--title'>{(type === 'adult') ? 'Person' : 'Child'} {index + 1}</h2>
            <div className='info--nameAndDob'>
                <div className='info--name'>
                    <span className='info--label'>First Name: </span>
                    <input
                        className='info--input'
                        defaultValue={null}
                        placeholder='Enter here'
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <br></br>
                    <span className='iinfo--label'>Last Name: </span>

                    <input
                        className='info--input'
                        defaultValue={null}
                        placeholder='Enter here'
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className='info--dob'>
                    <span>Date of birth: </span>
                    <DatePicker
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                    />
                </div>
            </div>
            <div className='info--contactAndSave'>
            <div className='info--contact'>
                <span className='iinfo--label'>Email: </span>

                <input />
                <br></br>
                <span className='iinfo--label'>Phone: </span>

                <input />
            </div>
            <button>Save</button>
            </div>
        </div>
    )
}

export default PersonInfo;