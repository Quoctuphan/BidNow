import { Form } from "antd";

const DeleteNews = () => {
  return (
    <Form className="flex flex-col space-y-5 m-[10px]">
      <p className="font-medium text-lg">Are you sure you want to delete this news?</p>
      <p>This action cannot be undone. Once you click the "Delete" button,
        the news will be permanently deleted and cannot be recovered.</p>
      <p>Please confirm your action:</p>
    </Form>
  );
}

export default DeleteNews;