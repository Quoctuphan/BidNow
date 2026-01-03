import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Radio, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const RegisterProduct = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [cbSaleBid, setCbSaleBid] = useState(false);
  const [cbOnline, setCbOnline] = useState(false);

  const [productImageList, setProductImageList] = useState<UploadFile[]>([]);
  const [certificateImageList, setCertificateImageList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChangeProductImages: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setProductImageList(newFileList);

  const handleChangeCertificateImages: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setCertificateImageList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="text-[#B7201B] text-center text-2xl md:text-3xl lg:text-4xl font-bold">Register Product</h1>
      <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div className="flex flex-col space-y-2 md:w-1/2">
          <div className="space-y-2">
            <p className="text-lg">Name</p>
            <input type='text' className="w-full h-10 border rounded-md" />
          </div>
          <div className="space-y-2">
            <p className="text-lg">Starting price</p>
            <input type='text' className="w-full h-10 border rounded-md" />
          </div>
        </div>
        <div className="flex flex-col space-y-2 md:w-1/2">
          <div className="space-y-2">
            <p className="text-lg">Bid Increments</p>
            <input type='text' className="w-full h-10 border rounded-md" />
          </div>
          <div className="space-y-2">
            <p className="text-lg">Buyer's Premium</p>
            <input type='text' className="w-full h-10 border rounded-md" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-lg">Description</p>
        <textarea className="w-full h-20 border rounded-md" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Product Images (Upload up to 4 photos)</h2>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={productImageList}
          onPreview={handlePreview}
          onChange={handleChangeProductImages}
        >
          {productImageList.length >= 8 ? null : uploadButton}
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
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Certificates</h2>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={certificateImageList}
          onPreview={handlePreview}
          onChange={handleChangeCertificateImages}
        >
          {certificateImageList.length >= 8 ? null : uploadButton}
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
      </div>
      <div className='flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-20'>
        <Radio onClick={() => { 
          if (cbSaleBid === true) {
            setCbSaleBid(false);
            setCbOnline(false);
          } else {
            setCbSaleBid(true);
            setCbOnline(false);
          }
        }}
          checked={cbSaleBid}
        >Sealed-bid auction item</Radio>
        <Radio onClick={() => { 
          if (cbOnline === true) {
            setCbSaleBid(false);
            setCbOnline(false);
          } else {
            setCbSaleBid(false);
            setCbOnline(true);
          }
        }}
          checked={cbOnline}
        >Online auction item</Radio>
      </div>
      <div className="flex justify-center md:justify-end">
        <button className="bg-[#B7201B] px-8 py-2 rounded-md text-white font-bold text-lg">REGISTER</button>
      </div>
    </div>
  );
}

export default RegisterProduct;
