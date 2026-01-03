
import Search from "@/components/Search";
import { Avatar, Badge, Modal } from "antd";
import { useState } from "react";
import NotificationMenu from "@/components/NotificationMenu/NotificationMenu";
import NotificationItem from "@/components/NotificationMenu/NotificationItem/NotificationItem";
import FormPersonalInfomation from "@/pages/Admin/PersonalInfor/PersonalInfor";
import { useNavigate} from "react-router-dom";
const HeaderAdmin = () => {
  const [isShow, setShow] = useState(false);
  const [isShowInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  // icon
  const logoHome = './src/assets/images/logohome.png'
  const noticationIcon = "./src/assets/images/noticationIcon.png"
  const flagIcon = "./src/assets/images/flagIcon.png"
  const avatarImg = "./src/assets/images/avatarImg.png"
  //

  const handlShowNotication = () => {
    if (!isShow) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handlShowFormPersonal = () => {
    setShowInfo(true);
  };
  const handleCancel = () => {
    setShowInfo(false);
     navigate("");
  };

  return (
    <header className="fixed right-0 left-0 max-w-full max-h-max z-10 bg-white shadow-sm">
      <div className="p-7 flex items-center w-full">
        <div className="w-[100px] ml-12 mr-40 ">
          <a href="/admin">
            <img className="bg-black" src={logoHome} alt="homesadmin" />
          </a>
        </div>

        {/* Search  */}
        <Search />

        <div className="flex flex-1 mr-12 w-fit">
          <div className="relative ml-auto my-2 text-right px-2 mr-7">
            {/*  */}
            <button className="hover:opacity-75" onClick={handlShowNotication}>
              {/* <img src={noticationIcon} alt="noticationIcon" />
                        <span className='absolute bottom-4 right-0.5 h-[18px] w-[18px] text-center bg-red-600 text-white
                         text-[14px] rounded-full'>3</span> */}
              <Badge size="small" count={6}>
                <Avatar
                  shape="circle"
                  alt="error"
                  size={"small"}
                  src={noticationIcon}
                />
              </Badge>
              {/* ShowMenuNatication */}
            </button>
            {isShow ? (
              <NotificationMenu
                className="absolute right-[-15px] w-[300px] h-[400px] z-50 rounded-xl border-slate-400 bg-white border-y-2 slate-500 shadow-lg"
                title="Notifaication"
              >
                {/* container list notifaication */}
                <div className="h-[330px] w-full overflow-y-auto px-4 bg-white  ">
                  <NotificationItem
                    className="flex flex-col items-start w-full h-fit "
                    title="Admin"
                    detaiTitle="Check product Check product Check product Check product Check 
                                        product Check product Check product Check product"
                  />
                  <NotificationItem
                    className="flex flex-col items-start w-full h-fit"
                    title="Admin"
                    detaiTitle="Check product Check product Check product Check product Check 
                                        product Check product Check product Check product"
                  />
                  <NotificationItem
                    className="flex flex-col items-start w-full h-fit"
                    title="Admin"
                    detaiTitle="Check product Check product Check product Check product Check 
                                        product Check product Check product Check product"
                  />
                  <NotificationItem
                    className="flex flex-col items-start w-full h-fit"
                    title="Admin"
                    detaiTitle="Check product Check product Check product Check product Check 
                                        product Check product Check product Check product"
                  />
                </div>
              </NotificationMenu>
            ) : (
              <></>
            )}
          </div>
{/*  */}
          <div className="flex h-[25px] my-2 ">
            <img className="mr-2" src={flagIcon} alt="flagIcon" />
            <select className="border-none mr-4">
              <option value="english">English</option>
            </select>

            <div className="flex">
              {/* avatar and name */}
              <div className="mt-[-7px]">
                {/* <img className='mt-[-7px] w-[40px]' src={avatarImg} alt="avatar" /> */}
                <Avatar shape="circle" size={"large"} src={avatarImg} />
              </div>
              <div className="ml-3 mt-[-11px] ">
                <button onClick={handlShowFormPersonal}>
                  <h2 className="text-base text-black hover:opacity-80">
                    Admin
                  </h2>
                </button>
                <Modal
                  width="700px"
                  open={isShowInfo}
                  onCancel={handleCancel}
                  footer={null}
                  className="modal-responsive"
                >
                  <div className="my-3 text-center">
                    <h1 className="text-lg font-bold">Personal Information</h1>
                  </div>
                 <FormPersonalInfomation />
                </Modal>
                <span>
                  <p className="text-sm text-gray-600">admin</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;