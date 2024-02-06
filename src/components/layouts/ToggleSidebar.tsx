import { Button } from 'antd';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const ToggleSidebar:React.FC<{
    showSideBar: boolean;
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  }> = ({showSideBar, setShowSideBar}) => {
  return (
    <Button
    type="text"
    size="large"
    icon={
      showSideBar === true ? (
        <AiOutlineMenu size={25} />
      ) : (
        <AiOutlineClose size={25} />
      )
    }
    onClick={() => setShowSideBar((val) => !val)}
  />
  )
}

export default ToggleSidebar