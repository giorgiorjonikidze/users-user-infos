import "./App.css";
import {Routes , Route} from "react-router-dom";
import UsersInfo from "./pages/usersInfo";
import UsersList from "./pages/usersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/user-info/:id" element={<UsersInfo />} />
    </Routes>
  );
}

export default App;
