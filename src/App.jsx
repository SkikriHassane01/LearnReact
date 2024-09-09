import Card from './Card/Card'
import Button from './ButtonWithClickEvent/Button'
import Student from './Props/student'
import ProfilePicture from './ButtonWithClickEvent/ProfilePicture';
import List from './renderList/List'
import MyComponents from './UseState/counter'
import OnChangeEvent from './UseState/onchangenvent'
import ColorPicker from './UseState/ColorPicker'
import UpdateArray from './Update/updateArray'
import UpdateArrayObject from './Update/updateArrayObject';
import DigitalClock from './DigitalClock/DigitalClock'
import ComponentA from './useContext/componentA'
function App() {
  const fruits = [
    {id: 1, name: 'Apple', calories: 52},
    {id: 2, name: 'Banana', calories: 89},
    {id: 3, name: 'Orange', calories: 47},
    {id: 4, name: 'Mango', calories: 60},
    {id: 5, name: 'Pineapple', calories: 50},
]

const vegetables = [
    {id: 6, name: 'Carrot', calories: 41},
    {id: 7, name: 'Broccoli', calories: 34},
    {id: 8, name: 'Cucumber', calories: 16},
    {id: 9, name: 'Tomato', calories: 18},
    {id: 10, name: 'Spinach', calories: 23},
]
  return(
    <>
      <Card></Card>
      <hr />
      <hr />
      <Button></Button>
      <hr />
      <hr />
      <Student name="hassane" age ={30} isStudent={true}></Student>
      <Student></Student>
      <hr />
      <hr />
      <ProfilePicture></ProfilePicture>
      <hr />
      <hr />
      { fruits.length > 0 && <List category='fruits' itemList= {fruits}/> }
      { vegetables.length > 0 && <List category='vegetables' itemList= {vegetables}/> }
      <hr />
      <hr />
      <MyComponents></MyComponents>
      <hr />
      <hr />
      <OnChangeEvent></OnChangeEvent>
      <hr />
      <hr />
      <ColorPicker></ColorPicker>
      <hr />
      <hr />
      <UpdateArray></UpdateArray>
      <hr />
      <hr />
      <UpdateArrayObject></UpdateArrayObject>
      <hr />
      <hr />
      <ComponentA></ComponentA>
      <br />
      <br />
      <DigitalClock></DigitalClock>
    </>
  );
}

export default App
