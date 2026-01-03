import { Select, Image, Upload, Radio } from "antd";
import { FC, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Product } from "@/types/Product";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface CreateEditProductProps {
  product: Product | null;
}

const CategoryOption = [
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
]

const SellerOption = [
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
]

const CreateEditProduct: FC<CreateEditProductProps> = ({ product }) => {
  const initialFormData = {
    id: '',
    productName: '',
    image: [] as UploadFile[],
    startingPrice: '',
    category: '',
    bidIncrement: '',
    quantity: '',
    seller: '',
    appraiser: '',
    warehouse: '',
    description: '',
    isOnlineAuction: false,
    isSealedBidAuction: false,
  }
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        productName: product.productName,
        image: product.image.map((url) => ({ uid: url, name: url, status: 'done', url })),
        startingPrice: product.startingPrice.toString(),
        category: product.category,
        bidIncrement: product.bidIncrement.toString(),
        quantity: product.quantity.toString(),
        seller: product.seller,
        appraiser: product.appraiser,
        warehouse: product.warehouse,
        description: product.description,
        isOnlineAuction: product.isOnlineAuction,
        isSealedBidAuction: product.isSealedBidAuction,
      })
    }
  }, [product])

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setFormData({ ...formData, image: newFileList });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (type: 'isOnlineAuction' | 'isSealedBidAuction', value: boolean) => {
    setFormData({
      ...formData,
      isOnlineAuction: type === 'isOnlineAuction' ? value : false,
      isSealedBidAuction: type === 'isSealedBidAuction' ? value : false,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to server

    // Display the form data in an alert
    const formDataString = JSON.stringify(formData, null, 2);
    alert(formDataString);
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <form className="flex flex-col space-y-10 m-[10px]" onSubmit={handleOnSubmit}>
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Product Form</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-2/5 flex flex-col justify-between">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
          <div className='flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-20'>
            <Radio onClick={() => handleRadioChange('isSealedBidAuction', !formData.isSealedBidAuction)}
              checked={formData.isSealedBidAuction}
            >Sealed-bid auction item</Radio>
            <Radio onClick={() => handleRadioChange('isOnlineAuction', !formData.isOnlineAuction)}
              checked={formData.isOnlineAuction}
            >Online auction item</Radio>
          </div>
        </div>
        <div className="w-3/5 space-y-5">
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Id</p>
            <input type="text" name="id" value={formData.id} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Product Name*</p>
            <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Starting Price*</p>
            <input type="number" name="startingPrice" value={formData.startingPrice} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Category</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={CategoryOption}
              value={formData.category}
              onChange={(value) => handleSelectChange('category', value)}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Bid increment</p>
            <input type="text" name="bidIncrement" value={formData.bidIncrement} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Quantity</p>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Seller</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={SellerOption}
              value={formData.seller}
              onChange={(value) => handleSelectChange('seller', value)}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Appraiser</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={SellerOption}
              value={formData.appraiser}
              onChange={(value) => handleSelectChange('appraiser', value)}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Warehouse</p>
            <input type="text" name="warehouse" value={formData.warehouse} onChange={handleInputChange} className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[grey]">Description*</p>
        <textarea name="description" value={formData.description} onChange={handleTextAreaChange} className="w-full rounded-[5px] border-2" rows={6} />
      </div>
      <div className="flex flex-row justify-end space-x-5">
        <button type='button' onClick={() => setFormData(initialFormData)} className="bg-[#d8d8d8] px-5 py-2 rounded-[10px] text-white font-bold">Reset</button>
        <button type="submit" className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Submit</button>
      </div>
    </form>
  );
}

export default CreateEditProduct;
