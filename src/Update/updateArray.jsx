import react, {useState} from 'react';

function UpdateArray(){

    const [foods, setFood] = useState(["Apple", "Banana", "Orange"]);
    
    const listItem = foods.map((food, index) => (
        <li key={index} onClick={() => handleRemoveIndex(index)}>{food}</li>
    ));

    const handleAddFood = () => {
        const foodId = document.getElementById('foodId').value;
        document.getElementById('foodId').value = '';
        setFood(f => [...f, foodId]);
    }

    const handleRemoveFood = () => {
        const foodId = document.getElementById('removeId').value;
        document.getElementById('removeId').value = '';
        setFood(f => f.filter(food => food !== foodId));
    }

    const handleRemoveIndex = (index) => {
        setFood(f => f.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {listItem}
            </ul>
            <input type="text" id='foodId' placeholder='What food you want to add?' />
            <button onClick={handleAddFood}>Add Food</button>
            <br />
            <input type="text" id='removeId' placeholder='What food you want to remove?' />
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>

    );

}
export default UpdateArray;