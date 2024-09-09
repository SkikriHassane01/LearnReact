function List(props){

    const category = props.category
    const itemList = props.itemList

    itemList.sort((a, b) => a.calories - b.calories) // sort in ascending order

    const listItems = itemList.map((item)=>
    <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
    );

    // const HightCalories = itemList.filter((item) => item.calories > 50)
    // const highCaloriesList = HightCalories.map((item)=>
    // <li key={item.id}>
    //     {item.name}: &nbsp; <b>{item.calories}</b>
    // </li>
    // );

    return (
        <div>
            <h2> {category} </h2>
            <ol> {listItems} </ol>

            {/* <h3> High Calories </h3>
            <ol> {highCaloriesList} </ol> */}
        </div>
    );
}

export default List