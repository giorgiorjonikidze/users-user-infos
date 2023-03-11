const User = ({ firstname, lastname, image, id, openUserHandler }) => {
    const openUser = () => {
        openUserHandler(id)
    }
  return (
    <div onClick={openUser} className="w-[150px] h-[150px] flex flex-col items-center justify-center border-[2px] border-solid border-[#000000] cursor-pointer hover:text-[#06b6d4]">
      <img
        src={image}
        alt="user image"
        className="rounded-full w-[50px] h-[50px] mt-[5px] mb-[20px]"
      />
      <div className="text-[14px] flex ">
        <p className="font-bold">{firstname}</p>
        <p className="font-bold ml-[5px]">{lastname}</p>
      </div>
    </div>
  );
};

export default User;
