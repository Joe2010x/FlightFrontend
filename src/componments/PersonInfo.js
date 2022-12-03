import './PersonInfo.css';
import DatePicker from "react-datepicker";
import { useState } from 'react';

const PersonInfo = ({ index, type, person, updatePerson }) => {
    // console.log('personInfo person props ', person.firstName);
    let newDateOfBirth = person.dateOfBirth ? new Date(person.dateOfBirth) : new Date();
    const [dateOfBirth, setDateOfBirth] = useState(newDateOfBirth)
    //console.log('type',type);
    const [firstName, setFirstName] = useState(person.firstName);
    const [lastName, setLastName] = useState(person.lastName);
    const [email, setEmail] = useState(person.email);
    const [phone, setPhone] = useState(person.phone);

    const [saveBtn, setSaveBtn] = useState('info--btn')

    const handleSave = () => {
        updatePerson (type,index, {
            firstName,
            lastName,
            email,
            phone,
            dateOfBirth,
        });
        setSaveBtn('info--btn active')
    }

    return (
        <div className="personInfo">
            <h2 className='info--title'>{(type === 'adult') ? 'Person' : 'Child'} {index + 1}</h2>
            <div className='info--nameAndContact'>
                <div className='info--name'>
                    <div className='info-label-input'>
                        <span className='info--label'>First Name: </span>
                        <input
                            className='info--input'
                            defaultValue={firstName}
                            placeholder= "Enter here"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Last Name: </span>

                        <input
                            className='info--input'
                            defaultValue={lastName}
                            placeholder='Enter here'
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Email: </span>

                        <input
                            className='info--input'
                            defaultValue={email}
                            placeholder='Enter here'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Phone: </span>

                        <input
                            className='info--input'
                            defaultValue={phone}
                            placeholder='Enter here'
                            onChange={e => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='info-dobAndSave'>
                    <div className='info--dob'>
                        <span>Date of birth: </span>
                        <DatePicker
                            defaultValue={dateOfBirth}
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                        />

                    </div>
                        <button className={saveBtn} onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default PersonInfo;