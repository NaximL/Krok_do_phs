import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js'

const MoadReg = ({ state,o }) => {
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);

    if (state === true) {        
        document.getElementsByClassName("Mad")[0].style = "transform:translate(-50%,-50%)";
        document.getElementsByClassName("back")[0].style = "display:block";
        document.body.style.overflow = 'hidden';
    }

    function zvern() {
        if (phone === '' || firstName === '' || lastName === '') {
            console.log('Заповніть всі поля');
            document.getElementsByClassName("Mad")[0].style.border = "3px solid red";
            setTimeout(() => {

                document.getElementsByClassName("Mad")[0].style.border =  "0px solid red";
            },1000);
            return;
        }
        
        const data = {
            phone,
            firstName,
            lastName
        };
        document.getElementsByClassName("Mad")[0].style = "transform:translate(200%,-50%)";
        document.getElementsByClassName("back")[0].style = "display:none";
        document.body.style.overflow = 'auto';
        o();
    }

    function zvernn() {
        document.getElementsByClassName("Mad")[0].style = "transform:translate(-300%,-50%)";
        document.getElementsByClassName("back")[0].style = "display:none";
        document.body.style.overflow = 'auto';
        console.log(321);
        o();
    }

    const validatePhoneNumber = (number) => {
        if (isValidPhoneNumber(number, 'UA')) {
           
            return number
          }
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
        const valid = validatePhoneNumber(value);
        setIsValidPhone(valid);
    };

    return (
        <div className="Mad">
            <div className="Frosm">
                <h1><b>Форма</b> Звернення</h1>
                <br />
                <div>         
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Номер телефону</label>
                        <div className="input-group">
                            <span className="input-group-text">+380</span>
                            <input
                                type="tel"
                                className={`form-control ${isValidPhone ? '' : 'is-invalid'}`}
                                id="phoneNumber"
                                value={phone}
                                onInput={handlePhoneChange}
                                placeholder="380123456789"
                                aria-label="Phone number"
                            />
                        </div>
                        {!isValidPhone && (
                            <div className="invalid-feedback">
                                Номер телефону введено некоректно.
                            </div>
                        )}
                        <div className="form-text">Введіть номер телефону для зв’язку з вами в Telegram.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Ім'я</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ваше ім'я"
                            aria-label="First name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Прізвище</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ваше прізвище"
                            aria-label="Last name"
                        />
                    </div>
                    <button onClick={zvern} className="B2_card_butt sigma_class">Звернутися!</button>
                </div>
            </div>
            <button onClick={zvernn} className="B2_card_butt ne_sigma_class">Відмова</button>
        </div>
    );
};

export default MoadReg;