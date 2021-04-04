import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import { Add, Delete } from './Actions/Add';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';


function AddOrDelete() {
    
    
    const dispatch = useDispatch();
    const items = useSelector(state => state.add);

    const unique = [...new Set(items.map((val)=>val.category))]
    let Options = [];

    unique.forEach((val)=>{
        const obj = {
            label : val
        }
        Options.push(obj);
    })

    const AddItem = (event) => {
        // event.preventDefault()
        let category = document.getElementById("Category").value
        let model = document.getElementById("Model").value

        dispatch(Add({
            category,
            model
        }))
    }

    const DeleteItem = (e) => {

        
        let category = selectedValue.label;
        let model = document.getElementById("DelModel").value
        console.log(unique);

        dispatch(Delete({
            category,
            model
        }))
        

    }
    
    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = obj => {
      setSelectedValue(obj)
    }

    return (
        <div>
            <form>
                <div id = "ToAdd">
                    <div class = 'd-flex flex-column'>
                    <h2>Add Product</h2>
                    </div>
                    <div id ="Input">
                    <input id="Category" type='data' placeholder="product category to add" />
                    <input id="Model" class = 'mx-2' type='data' placeholder="product model to add" />
                    <Button onClick={(event) => AddItem(event)} variant='primary'> Add </Button>
                    </div>
                </div>
                <div id = "To Delete">
                    <h2>Delete Product</h2>
                    
                    {/* <input id="DelCategory" type='data' placeholder="product category to del" /> */}
                    <div class = 'DelInput'>
                    <Select 
                    options = {Options}
                    value = {selectedValue}
                    onChange = {handleChange}
                    />
                    <input id="DelModel" class = 'mx-2' type='data' placeholder='product model to del' />
                    <Button onClick={(e) => DeleteItem(e)} variant="danger">Delete</Button>
                    </div>
                    
                    
                    
                </div>
            </form>
        </div>
    )
}

export default AddOrDelete;