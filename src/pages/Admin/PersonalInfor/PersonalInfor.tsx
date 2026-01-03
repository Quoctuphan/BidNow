
import { Form, Row, Col, Input } from "antd";
interface MenuProps {

}
//http/personal_infomation
const FormPersonalInfomation: React.FC<MenuProps> = () => {
  const [form] = Form.useForm();
  return (
    <div className="w-full h-[700px]">
      <Form
        form={form}
        name="personal information"
        className="lg:justify-center overflow-y-auto"
        style={{ maxWidth: "800px", width: "100%", maxHeight: "100%" }}
      >
        <Row gutter={11} className="flex flex-wrap">
          {/* Email */}
          <Col lg={24} xs={24} md={12} >
            <Form.Item
              name="email"
              label="Username/Email"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="Username/Email" readOnly />
            </Form.Item>
          </Col>
          {/* Firstname */}
          <Col lg={24} xs={24} md={12} >
            <Form.Item
              name="firstname"
              label="Firstname"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Firstname" />
            </Form.Item>
          </Col>
          {/* Address */}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="address"
              label="Address"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Address" />
            </Form.Item>
          </Col>
          {/* Country  row 2*/}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="country"
              label="Country"

              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Country" />
            </Form.Item>
          </Col>
          {/* State/Province  row 2*/}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="State/Province"
              label="State/Province"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="State/Province" />
            </Form.Item>
          </Col>
          {/* City row 2*/}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="City"
              label="City"

              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="City" />
            </Form.Item>
          </Col>
          {/* Payments row3 */}
          <Col>
            <h2 className="text-xl font-normal mb-[12px]">
              Payments
            </h2>
          </Col>
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="bankname"
              label="Bank Name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Bank Name" />
            </Form.Item>
          </Col>
          {/* Banknumber row 3*/}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="banknumber"
              label="Bank Number"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Bank Number" />
            </Form.Item>
          </Col>

          {/* Bankbranch row 3*/}
          <Col lg={24} xs={24} md={12}>
            <Form.Item
              name="bankbranch"
              label="Bank Branch"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly placeholder="Bank Branch" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default FormPersonalInfomation