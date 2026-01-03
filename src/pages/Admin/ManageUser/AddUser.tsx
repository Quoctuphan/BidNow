import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
function FormAddUser() {
  const [form] = Form.useForm();
  // const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log("values", values)
    //Using to format date
    // const formattedValues = {
    //   ...values,
    //   date: values.date ? values.date.format('DD-MM-YYYY') : null,
    // };
    // const formdata = new formattedValues(event.target);

    // const data = {};
    // for (const [key, value] of formdata.entries()) {
    //   data[key] = value;
    // }
    // navigate("/manager-list-user",{state: formdata})
  };
  //
  return (

    <div className=" w-[750px] px-4 h-fit bg-white rounded-lg shadow-lg mt-5">
      <header className="h-11 justify-items-center">
        <h1 className="text-center text-xl font-semibold p-1">Add User</h1>

      </header>
      <body className="bg-white w-full h-[600px]">
        <Form
          onFinish={onFinish}
          form={form}
          //  defaull value date
          //  initialValues={{
          //     remember: true,
          //     birthdate: moment('2000-01-01'),
          //   }}
          name="add user"
          className="lg:justify-center overflow-y-auto"
          style={{ maxWidth: "700px", width: "100%", padding: "8px", maxHeight: "100%" }}>
          <Row gutter={11} className="flex flex-wrap">
            {/* ID */}
            <Col lg={24} xs={24} md={12} >
              <Form.Item
                name="ID"
                label="id"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 8 }}
              >
                <Input placeholder="000001" />
              </Form.Item>
            </Col>
            {/* Name */}
            <Col lg={24} xs={24} md={12} >
              <Form.Item
                name="name"
                label="NAME"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            {/* Address */}
            <Col lg={24} xs={24} md={12}>
              <Form.Item
                name="address"
                label="ADDRESS"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
            {/* Data created 2*/}
            <Col lg={24} xs={24} md={12}>
              <Form.Item
                name="create_at"
                label="DATE CREATED"
                rules={[
                  {
                    required: true,
                    message: "Please input date !",
                  },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col lg={8} xs={24} md={12}>
              <Form.Item
                name="role"
                label="ROLE"
                rules={[
                  {
                    required: true,
                    message: "Please select role",
                  },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Select placeholder="select your Bank Branch">
                  <Select.Option value='Admin'>Admin</Select.Option>
                  <Select.Option value='Staff'>Staff</Select.Option>
                  <Select.Option value='Supervision'>Supervision</Select.Option>
                  <Select.Option value='Buyer'>Buyer</Select.Option>
                  <Select.Option value='Seller'>Seller</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={8} xs={24} md={12}>
              <Form.Item
                name="status"
                label="STATUS"
                rules={[
                  {
                    required: true,
                    message: "Please select status of user",
                  },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Select placeholder="Select status of user">
                  <Select.Option value='Active'>Active</Select.Option>
                  <Select.Option value='Inactive'>Inactive</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={24}>
              <Form.Item
                wrapperCol={{ span: "24", offset: "16" }}
              >
                <Button className="bg-transparent ml-5 mr-10 mt-10">Cancel</Button>
                <Button htmlType="submit" className="bg-[#4ad991]">Add User</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </body>
    </div>
  );
}

export default FormAddUser;