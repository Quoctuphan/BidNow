import { useNavigate } from 'react-router-dom';
import { PiUserListThin } from "react-icons/pi";
import { TbCategoryPlus } from "react-icons/tb";
import { LiaWarehouseSolid } from "react-icons/lia";
import { RiAuctionLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { TfiStamp } from "react-icons/tfi";
import { CiSquareQuestion, CiLogout } from "react-icons/ci";
import { ContainerOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import { useEffect, useState } from 'react';
// import ManageProduct from '@/pages/Admin/ManageProduct';
// import PresidingAuction from '@/pages/Admin/PresidingAuction';
// import ManageAuction from '@/pages/Admin/ManageAuction';
// import ManageWarehouse from '@/pages/Admin/ManageWarehouse';
// import ManageNews from '@/pages/Admin/ManageNews';
import Dashboard from '@/pages/Admin/Dashboad/Dashboard';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {key: '10', label: 'Dashboard'},
  { key: '1', icon: <PiUserListThin />, label: 'Manager List User', },
  { key: '2', icon: <TbCategoryPlus />, label: 'Manager Category', },
  { key: '3', icon: <ContainerOutlined />, label: 'Manager News ', },
  { key: '4', icon: <LiaWarehouseSolid />, label: 'Manager Warehouse', },
  { key: '5', icon: <RiAuctionLine />, label: 'Manager Auction', },
  { key: '6', icon: <AiOutlineProduct />, label: 'Manager Product', },
  { key: '7', icon: <TfiStamp />, label: 'Presiding Auction', },
  { key: '8', icon: <CiSquareQuestion />, label: 'Customer request', },
]
const itemLogOut: MenuItem[] = [
  { key: '9', icon: <CiLogout />, label: 'Logout', },
]
const theme = {
  components: {
    Menu: {
      itemSelectedBg: "#4880ff",
      itemSelectedColor: "#ffffff",
      itemMarginInline: 0,
      groupTitleFontSize: 16,
      itemMarginBlock: 15,
      iconSize: 20,
    },
  },

};
function SidebarAdmin() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(true)
  const [isKey, setIsKey] = useState('10')

  console.log(isShow)
  console.log(isKey)
  useEffect(() => {
        navigate('')
  }, [10])
  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    if(key==='10'){
      setIsShow(true)
      setIsKey(key)
    }else{  
      setIsShow(false)
      setIsKey(key)
    }
    switch (key) {
      case '1':
        navigate('manager-list-user')
        break;
      case '2':
        navigate('manager-category')
        break;
      case '3':
        navigate('manager-news')
        break;
      case '4':
        navigate('manager-warehouse')
        break;
      case '5':
        navigate('manager-auction')
        break;
      case '6':
        navigate('manager-product')
        break;
      case '7':
        navigate('presiding-auction')
        break;
      case '8':
        navigate('customer-request')
        break;
      case '9':
        navigate('/signin')
        break;
      case '10':
        navigate('')
        break;
    }
  }
    return (
      <>
          <ConfigProvider theme={theme}>
          <div style={{ width: 256, height:170, display: 'flex', flexDirection: 'column' }}>
          <Menu
            defaultSelectedKeys={[isKey]}
            mode="inline"
            inlineIndent={50}
            theme="light"
            items={items}

            onSelect={handleSelect}
   
           
          />
          <div className='m-auto w-[200px] h-[2px] bg-gray-600 '>
            ----------------
          </div>
          <Menu
            defaultSelectedKeys={['']}
            mode="inline"
            inlineIndent={50}
            theme="light"
            items={itemLogOut}
            onSelect={handleSelect}
          />
        </div>
      </ConfigProvider>
      {(isShow && isKey=='10') ? (
      <div className='flex-1 w-5/6' >
                <Dashboard/>
      </div>)  : (<></>)
      }
      </>
    );
  }


export default SidebarAdmin;