import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UsersInfo = () => {
  const location = useLocation();
  const userData = location.state.userData;

  const phoneNumber = userData.phone;
  const normalizedPhoneNumber = phoneNumber.replace(/-/g, "");

  const [aboutmeIsShowen, setAboutmeIsShowen] = useState(true);
  const [securityIsShowen, setSecurityIsShowen] = useState(false);

  const showAboutmeHandler = () => {
    setAboutmeIsShowen(true);
    setSecurityIsShowen(false);
  };

  const showSecurityHandler = () => {
    setAboutmeIsShowen(false);
    setSecurityIsShowen(true);
  };

  return (
    <>
      <div className="w-screen h-[2px] bg-black opacity-5 mt-[50px]"></div>
      <div className="flex gap-[100px] mt-[50px]  w-screen justify-center ">
        <div>
          <img className="w-[200px]" src={userData.picture.large} alt="user image" />
        </div>
        <div>
          <p className="font-bold text-[35px] mb-[30px]">
            {userData.name.first + " " + userData.name.last}
          </p>
          <div className="mb-[30px] flex gap-[20px] font-bold text-[18px]">
            <button>
              {" "}
              <div className="w-[15px] h-[15px] bg-black inline-block"></div>{" "}
              Messages
            </button>
            <button className="text-[#06b6d4] px-[20px] py-[1px] bg-[#60a5fa] bg-opacity-20 rounded-[4px]">
              Contacts
            </button>
            <button>About me</button>
          </div>
          <div className="flex gap-[20px] mb-[10px]">
            <button
              onClick={showSecurityHandler}
              style={
                !securityIsShowen ? { opacity: "0.5" } : { fontWeight: "bold" }
              }
            >
              Security
            </button>
            <button
              onClick={showAboutmeHandler}
              style={
                !aboutmeIsShowen ? { opacity: "0.5" } : { fontWeight: "bold" }
              }
            >
              About me
            </button>
          </div>
          <div className="h-[1px] w-full bg-black opacity-30"></div>
          {aboutmeIsShowen && (
            <div className="font-bold">
              <table className="h-[130px]">
                <tr className="">
                  <td>Phone</td>
                  <td className="pl-[40px] text-[#06b6d4] ">
                    <a
                      className="cursor-pointer"
                      href={"tel:" + { normalizedPhoneNumber }}
                    >
                      {"+" + normalizedPhoneNumber}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="pl-[40px]">
                    {userData.location.street.name +
                      " " +
                      userData.location.street.number}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="pl-[40px]">
                    <a
                      className="cursor-pointer text-[#06b6d4]"
                      href={"mailto:" + userData.email}
                    >
                      {userData.email}
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UsersInfo;
