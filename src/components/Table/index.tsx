import React from "react";

import type { TableProps } from "antd";
import { Table } from "antd";

const onChange: TableProps<any>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

interface CusTomTableProps extends TableProps {
  data: any[] | [];
}

const AppTable: React.FC<CusTomTableProps> = ({ data, ...rest }) => (
  <Table
    columns={[]}
    dataSource={data.map((item, index) => ({ ...item, key: index }))}
    onChange={onChange}
    {...rest}
  />
);

export default AppTable;