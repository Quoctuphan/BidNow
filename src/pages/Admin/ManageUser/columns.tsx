import { Select } from "antd";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'DATE',
    dataIndex: 'create_at',
    key: 'date',
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    key: 'role',

    render: ({ ...dataIndex }) => (
      <Select defaultValue={dataIndex.role} style={{ width: 100 }}>
        <Select.Option value='Admin'>Admin</Select.Option>
        <Select.Option value='Staff'>Staff</Select.Option>
        <Select.Option value='Supervision'>Supervision</Select.Option>
        <Select.Option value='Buyer'>Buyer</Select.Option>
        <Select.Option value='Seller'>Seller</Select.Option>
      </Select>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: ({ ...dataIndex }) => (
      <Select defaultValue={dataIndex.status} style={{ width: 90 }}>
        <Select.Option value='Active'>Active</Select.Option>
        <Select.Option value='Inactive'>Inactive</Select.Option>
      </Select>
    ),
  },

]
export default columns