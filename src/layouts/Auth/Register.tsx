import { useEffect, useState } from "react";
import { Button, Col, Form, Input, InputNumber, message, Row, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { number } from "yup";
import Item from "antd/es/list/Item";
import axios from "axios";
import { error } from "console";
const { Option } = Select;

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//   },
// };

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 16,
    },
    lg: {
      span: 16,
      offset: 4,
    },
    md: {
      span: 16,
      offset: 4,
    },
  },
};
const logoRegister = './src/assets/images/logoRegister.png'
const closerIcon = './src/assets/images/closerIcon.png'

function Register() {
  const [form] = Form.useForm();
  const [opacity, setOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  // Save state value of selectBankName
  const [selectBank, setSelectBank] = useState(null)
  const handleChangeBank = (value:any) => {
        setSelectBank(value)
        console.log(value)
  }
  const bankNameValue = [
    {id:"1",
     name:[
      {
      nameBank:"Montgomery, AL - Regions Bank",
      branch: ["Regions Bank - Montgomery Main Branch"]
      }
    ],
  },
    {id:"2",
      name:[
        {
        nameBank:"Anchorage, AK - Alaska USA Federal Credit Union",
        branch: [" Alaska USA Federal Credit Union - Anchorage Downtown Branch"]
        }
      ],
    },
    {
      id:"3",
      name:[
        {
        nameBank:"Phoenix, AZ - Bank of America",
        branch: ["Bank of America - Phoenix Central Avenue Branch"]
        }
      ],
    },
    {id:"4",
      name:[
        {
        nameBank:"Little Rock, AR - Bank of the Ozarks",
        branch: ["Bank of the Ozarks - Little Rock Midtown Branch"]
        }
      ],
    },
  ]
  const branches = selectBank ? bankNameValue.find( item => item.name[0].nameBank === selectBank)?.name[0].branch : []
 

  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
    navigate('/');
  };
  const onFinish = (values: any) => {
    axios.post('https://b9e6-116-110-80-136.ngrok-free.app/api-docs/#/User/post_user_register',values)
          .then( response => {
            message.success("Form submit form")
            console.log("data",response)}
          )
          .catch(() => {
            message.error("failed to submit form")})
  };
  
  useEffect(() => {
    const timer = setTimeout(() => setOpacity(100), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="flex flex-col items-center ms:w-screen min-h-screen md:w-full bg-black z-0  bg-[url('https://img.freepik.com/premium-vector/people-auction-art-flat-poster_275655-2065.jpg?size=626&ext=jpg&ga=GA1.1.1270318471.1721545716&semt=sph')]  bg-opacity-50 ">
          <div className={`w-full max-w-2xl lg:max-w-[760px] lg:w-full  md:max-h-max md:mx-4 md:max-w-[800px] md:w-full sm:max-h-max sm:mx-4 sm:w-full lg:h-full bod sm:my-1  items-center z-50 bg-white lg:rounded-2xl md:rounded-2xl sm:rounded-none shadow-lg opacity-${opacity} transition-opacity duration-1000 ease-in-out`}>
            <div className="px-4 py-2 md:w-full">
              <div className=" h-fit flex flex-row-reverse">
                <button onClick={handleClose} className="w-[45px] h-auto">
                  <span className="block w-full h-full m-1 p-2 hover:cursor-pointer hover:opacity-85 sm:active:opacity-30 ">
                  <img
                    className="w-fit h-fit object-cover"
                    src={closerIcon}
                    alt="close"
                  />
                  </span>
                </button>
              </div>
              <header className="flex flex-col items-center w-full">
                <div className="w-4/12">
                  <img className="w-fit" src={logoRegister} alt="logo" />
                </div>
                <p className="text-center xl:text-xl lg:text-lg  mt-5 mb-5 sm:text-lg">
                  Do already have an account?{" "}
                  <Link to={"/signin"} className="font-bold hover:cursor-pointer hover:opacity-50 ">
                    Login now
                  </Link>
                </p>
              </header>
              <body className="flex w-full">
                <Form
                  // {...formItemLayout}
                  form={form}
                  name="register"
                  className="lg:justify-center"
                  onFinish={onFinish}
                  style={{ maxWidth: "800px", width:"100%",maxHeight: "100%" }}
                  scrollToFirstError
                >
                  <Row gutter={16} className="flex flex-wrap">
                    {/* Email */}
                    <Col lg={8} xs={24} md={12} >
                      <Form.Item
                        name = {["email"]}
                        label="Username/Email"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Username/Email" />
                      </Form.Item>
                    </Col>
                    {/* Firstname */}
                    <Col lg={8} xs={24} md={12} >
                      <Form.Item
                        name="name"
                        label="Firstname"
                        // tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: true,
                            message: "Please input your firstname!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Firstname" />
                      </Form.Item>
                    </Col>
                    {/* Address */}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="address"
                        label="Address"
                        // tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Address" />
                      </Form.Item>
                    </Col>
                    {/* Country  row 2*/}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="country"
                        label="Country"
                        // tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: true,
                            message: "Please input your country!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Country" />
                      </Form.Item>
                    </Col>
                    {/* State/Province  row 2*/}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="State"
                        label="State/Province"
                        rules={[
                          {
                            required: true,
                            message: "Please input your State/Province!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="State/Province" />
                      </Form.Item>
                    </Col>
                    {/* City row 2*/}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="City"
                        label="City"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="City" />
                      </Form.Item>
                    </Col>

                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="bankName"
                        label="Bank Name"
                        rules={[
                          {
                            required: true,
                            message: "Please select bankname!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Select onChange={handleChangeBank} placeholder="select your Bank Name">
                          {
                            bankNameValue.map((item) => (
                              item.name.map((nameItem)=> (
                                <Option key={item.id} value={nameItem.nameBank}>{nameItem.nameBank}</Option>
                              ))
                            ))
                          }
                  
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Banknumber row 3*/}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="bankNum"
                        label="Bank Number"
                        // tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: true,
                            message: "Please input your bank number!",
                          },

                          { //IsNaN (not a number)
                            //validator is an attribute in Ant Design's testing rules. This property receives a function to perform a custom check.
                            validator: (_, value) => {
                              if (value && isNaN(value) ) {
                                return Promise.reject("Please input a valid number!");
                              }
                              //// Check if the input value contains leading spaces
                              if(/^\s/.test(value)){
                                return Promise.reject("Value should not start with whitespace!");
                              }
                              return Promise.resolve();
                          },
                        }
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input type="text" className="h-[32.5px]" placeholder="Bank Number" />
                      </Form.Item>
                    </Col>

                    {/* Bankbranch row 3*/}
                    <Col lg={8} xs={24} md={12}>
                      <Form.Item
                        name="bankBranch"
                        label="Bank Branch"
                        rules={[
                          {
                            required: true,
                            message: "Please select bank branch",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Select  placeholder="select your Bank Branch">
                            {/* <Option value="test1">tes1</Option> */}
                            {
                                branches?.map((branch, index)=>(
                                  <Option key={index} value={branch}>{branch}</Option>
                                ))
                          }
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col lg={12} xs={24} md={12}>
                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        hasFeedback
                      >
                        <Input.Password />
                      </Form.Item>
                    </Col>
                    {/* Confirm Password */}
                    <Col lg={12} xs={24} md={12}>
                      <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The new password that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Col>
                  <Form.Item
                    {...tailFormItemLayout}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="lg:w-full ms:justify-center md:w-full lg:my-4  bg-red-700 hover:bg-red-600/100"
                    >
                      Register
                    </Button>
                  </Form.Item>
                  </Col>
                 
                </Form>
              </body>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
