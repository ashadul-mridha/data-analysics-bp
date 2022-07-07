import { createContext, useEffect, useState } from 'react';

export const AllContext = createContext();

const ContextApiCompo = ({children}) => {

    const [formData , setFormData] = useState();

    const [showForm, setShowForm] = useState(false);

    const clickShowForm = () => {
        setShowForm(!showForm);
    };

    useEffect( () => {
        if (showForm) {
            document.body.classList.add('openForm')
        } else {
            document.body.classList.remove('openForm')
        }
    } ,[showForm] );

    const setFormValues = (values) => {
        setFormData((prevValues) => ({
        ...prevValues,
        ...values,
        }));
    };

    return (
        <AllContext.Provider value={{showForm,clickShowForm,formData,setFormValues}}>
            {children}
        </AllContext.Provider>
    );
};

export default ContextApiCompo;