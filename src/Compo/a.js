import React, {useState, useEffect} from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const data = [{fname:'Pragya', lname:'Gupta', id:'3'},{fname:'Charmi',lname:'Chaudhri',id:'4'},{fname:'Darshan',lname:'Parekh',id:'5'}]

export default function Table(){

    const [myData,setMyData] = useState(data);
    const [editPersonId,setEditPersonId] = useState(null);
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmit, setisSubmit] = useState(false);
    const [previous,setPrevious] = useState({
        id: '',
        fname: '',
        lname: ''
    });
    const [editFormData,setEditFormData] = useState({
        id: '',
        fname: '',
        lname: ''
    });

    const handleEditFormSubmit = (event)=>{
        event.preventDefault();
        const editedPerson = {
            id: editFormData.id,
            fname: editFormData.fname,
            lname: editFormData.lname
        }
        // if(formErrors){
        //     formErrors.map((error)=>{
        //         return <>
        //             <h1>{error}</h1>
        //         </>
        //     })
        // }
        const newData = [...myData];
        const index = myData.findIndex((person)=>person.id==editPersonId);
        // console.table(newData);
        if(editedPerson.id.length!=0 && editedPerson.fname.length!=0 && editedPerson.lname.length!=0){
            newData[index] = editedPerson;
            setMyData(newData);
        }
        setisSubmit(true);
        setEditPersonId(null);
        setFormErrors([]);
    }



    const validate = (values) => {
        let errors=[];
        if (values.id=='') {
            errors.push("id required!");
        }
        if (values.fname=='') {
            errors.push("fname required!");
        }
        if (values.lname=='') {
            errors.push("lname required!");
        }
        setFormErrors(errors);
    }

    const handleEditFormChange = (event)=>{
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        // console.log(fieldName,' ', fieldValue)
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        const response = validate(newFormData);
        if(formErrors.length!=0){
            setEditPersonId(null);
            console.table(previous);
            setEditFormData(previous);
        }
        else{
            setEditFormData(newFormData);
        }

        // console.table(myData)
    }

    const handleEditClick = (event, person)=>{
        event.preventDefault();
        setEditPersonId(person.id);

        const formValues = {
            id: person.id,
            fname: person.fname,
            lname: person.lname
        }
        setPrevious(formValues);
        setEditFormData(formValues);
        // if(!response.length==0){
        // }
        // else{
        //     response.map((error)=>{
        //         return <>
        //             <h1>{error}</h1>
        //         </>
        //     })
        // }
    }

    const handleCancelClick = ()=>{
        setEditPersonId(null);
  }
  

    const handleDeleteClick = (personId)=>{
        const newData = [...myData];
        const index = myData.findIndex((person)=>person.id==personId);
        newData.splice(index,1);
        // console.log(newData);
        setMyData(newData);
        // console.log(newData);
    }

    useEffect(() => {
        console.log(formErrors)
        if (formErrors.length === 0 && isSubmit) {
            console.log(editFormData);
        }
        < p > {editFormData.fname}</p >
    }, [handleEditFormSubmit])
    return (
        <div className="table">
            <form onSubmit={handleEditFormSubmit}>
                <table border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fname</th>
                            <th>lname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myData.map((person,key)=>{
                        return <>
                           {
                               editPersonId==person.id 
                                ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} /> 
                                : <ReadOnlyRow person={person} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                           }
                        </>
                        })
                    }
                    </tbody>
                </table>
            </form>
            <div>
            {
                formErrors.length==0
                ? null
                : formErrors.map((error)=>{
                    return <>
                        <h1>{error}</h1>
                    </>
                })
            }
            </div>
        </div>
    )
};