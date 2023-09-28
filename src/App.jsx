
import "./App.css"
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBarMui from "./components/NavBarMui/NavBarMui";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <div>
      <NavBarMui />
      <Header 
      title="A L M A @ Z E N" 
      subtitle="Tienda Natural"
      />
      <NavBar />
      <ItemListContainer />

      <div className="UserSection">
        <CardUser
          name="Semillas"
          description="x Kg desde..."
          price="$1500"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1MqlghxTLLUjlg1h4KOsWscjmxiYgccqqQ&usqp=CAU"
        />
        <CardUser
          name="Legumbres"
          description="x Kg desde..."
          price="$2100"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZBuWoq69RNnj7OReNMv9G70O-JHOwCGZ8A&usqp=CAU"
        />
        <CardUser
          name="Frutos Secos"
          description="x Kg desde..."
          price="$3600"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfjZ5o5k2UD5gi7OtArFkim4P0ZGmdxrN8MpzH9V8UgENKxo5X7EuJ0PtBFg3f_ISxQo&usqp=CAU"
        />
        <CardUser
          name="Granolas"
          description="x Kg desde..."
          price="$1800"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44uh67iL5IbEQzoYxkDF7yudWT2RABTopuA&usqp=CAU"
        />
        <CardUser
          name="Harinas"
          description="x Kg desde..."
          price="$1100"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4fH3fTR0VUKhnQxJ0C3WUw0SY-O3IO-Fzl46yhGxm7RR90twb4Z3UV1bTS1EQHHNoR0&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default App;
