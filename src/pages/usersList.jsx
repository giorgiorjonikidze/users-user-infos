import axios from "axios";
import { useState, useEffect } from "react";
import User from "../components/user";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const apiUrl = "https://randomuser.me/api/?results=20";

  const [fetchedData, setFetchedData] = useState([]);
  const [showFriends, setShowFriends] = useState(false);

  const navigate = useNavigate();

  const fetchData = () => {
    axios(apiUrl)
      .then((res) => setFetchedData(res.data.results))
      .then((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openUserHandler = (id) => {
    navigate("/user-info/" + id, { state: id})
    console.log(id)
  }

  const usersListing = () => {
    return fetchedData.map((user, index) => (
      <User
        key={index}
        id={index}
        image={user.picture.medium}
        firstname={user.name.first}
        lastname={user.name.last}
        openUserHandler={openUserHandler}
      />
    ));
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  return (
    <div className="w-screen h-screen flex  justify-center gap-[50px] mt-[100px]">
      <button
        onClick={toggleFriends}
        className="border-[2px] border-solid border-[#000000] rounded-[20px] box-border px-[20px] h-fit font-bold text-[20px] border-opacity-40"
        style={showFriends ? {color: "#06b6d4"} : { color: "#000000" } }
      >
        Friends
      </button>
      <div className="w-[600px]">
        {showFriends && (
          <ul className="flex w-[600px] flex-wrap gap-[50px]">
            {usersListing()}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UsersList;
