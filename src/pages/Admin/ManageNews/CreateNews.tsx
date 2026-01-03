import { Button, Col, DatePicker, Form, Input, Row, } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

function CreateNews() {
  const [form] = Form.useForm();
  const [story, setStory] = useState('');
  const handleChange = (event: any) => {
    setStory(event.target.value);
  };
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

    <div className=" w-[750px]  h-fit bg-white rounded-lg shadow-lg mt-5">
      <header className="h-11 justify-items-center">
        <h1 className="text-center text-xl font-semibold p-1">Add News</h1>

      </header>
      <body className="bg-white w-full h-[700px]">
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
                label="ID"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="000001" />
              </Form.Item>
            </Col>
            {/* News Name */}
            <Col lg={24} xs={24} md={12} >
              <Form.Item
                name="name"
                label="News Name"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="News title" />
              </Form.Item>
            </Col>
            {/* Detail */}
            <Col lg={24} xs={24} md={12}>
              <Form.Item
                name="detail"
                label="New Detail"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <TextArea
                  rows={5}
                  value={story}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            {/* Detail */}
            <Col lg={24} xs={24} md={12}>
              <Form.Item
                name="author"
                label="Author"
                rules={[
                  {
                    required: true,
                    message: "You must input this field!"

                  }
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input placeholder="Author" />
              </Form.Item>
            </Col>
            {/* Data time 2*/}
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
          </Row>
          <Row gutter={16}>
            <Col lg={24}>
              <Form.Item
                wrapperCol={{ span: "24", offset: "16" }}
              >
                <Button className="bg-transparent ml-5 mr-10 mt-10">Cancel</Button>
                <Button htmlType="submit" className="bg-[#4ad991]">Add News</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </body>
    </div>
  );
}

export default CreateNews;