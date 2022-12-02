import './PersonInfo.css';
import ReactDatePicker from 'react-datepicker';

import DatePicker from "react-datepicker";
import { useState } from 'react';

const PersonInfo = () => {
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    return (
        <div className="personInfo">
            <span>First Name: </span>
            <input  />
            <span>Last Name: </span>

            <input  />
            <span>Date of birth: </span>
            <DatePicker
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                        />
            <span>Email: </span>

            <input  />
            <span>Phone: </span>

            <input  />
        </div>
    )
}

export default PersonInfo;