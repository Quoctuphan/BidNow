import { Select, Image, Upload } from "antd";
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const RegisterSeller = () => {
  const [previewOpen, setPreviewOpen] = useState(false);

  // State for business license
  const [businessFileList, setBusinessFileList] = useState<UploadFile[]>([]);
  const [businessPreviewImage, setBusinessPreviewImage] = useState('');

  // State for company logo
  const [logoFileList, setLogoFileList] = useState<UploadFile[]>([]);
  const [logoPreviewImage, setLogoPreviewImage] = useState('');

  const handleBusinessPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setBusinessPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleLogoPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setLogoPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleBusinessChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setBusinessFileList(newFileList);

  const handleLogoChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setLogoFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="flex flex-col space-y-5 w-full p-4">
      <h1 className="text-[#B7201B] text-center text-[24px] sm:text-[28px] md:text-[30px] font-bold">Seller Information</h1>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">Username/Email</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">First Name</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">Address</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">Country</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">State/Province</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">City</p>
        <input type='text' className="w-full h-[30px] sm:h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">Short description</p>
        <textarea className="w-full border-[1px] rounded-[10px]" rows={4} />
      </div>
      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px]">Terms and conditions of the auction</p>
        <textarea className="w-full border-[1px] rounded-[10px]" rows={4} />
      </div>
      <h2 className="text-[18px] sm:text-[20px] font-bold">Payments</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-10">
        <div className="space-y-2 w-full sm:w-1/3">
          <p className="text-[14px] sm:text-[16px]">Bank Name</p>
          <Select
            showSearch
            placeholder="Bank Name"
            className="w-full h-[30px] sm:h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
        <div className="space-y-2 w-full sm:w-1/3">
          <p className="text-[14px] sm:text-[16px]">Bank Number</p>
          <Select
            showSearch
            placeholder="Bank Number"
            className="w-full h-[30px] sm:h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
        <div className="space-y-2 w-full sm:w-1/3">
          <p className="text-[14px] sm:text-[16px]">Bank Branch</p>
          <Select
            showSearch
            placeholder="Bank Branch"
            className="w-full h-[30px] sm:h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
      </div>
      <h2 className="text-[18px] sm:text-[20px] font-bold">Organization (Individuals may skip this section)</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-10">
        <div className="space-y-2 w-full sm:w-1/2">
          {/* upload business license */}
          <p className="text-[14px] sm:text-[16px]">Business license</p>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={businessFileList}
            onPreview={handleBusinessPreview}
            onChange={handleBusinessChange}
          >
            {businessFileList.length >= 8 ? null : uploadButton}
          </Upload>
          {businessPreviewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setBusinessPreviewImage(''),
              }}
              src={businessPreviewImage}
            />
          )}
        </div>

        <div className="space-y-2 w-full sm:w-1/2">
          {/* upload company logo */}
          <p className="text-[14px] sm:text-[16px]">Logo</p>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={logoFileList}
            onPreview={handleLogoPreview}
            onChange={handleLogoChange}
          >
            {logoFileList.length >= 8 ? null : uploadButton}
          </Upload>
          {logoPreviewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setLogoPreviewImage(''),
              }}
              src={logoPreviewImage}
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-end pt-5">
        <button className="bg-[#B7201B] px-12 py-2 rounded-[10px] text-white font-bold text-[16px] sm:text-[18px]">REGISTER</button>
      </div>
    </div>
  )
}

export default RegisterSeller;
