import React, { useState } from 'react';

const ForgetPass = () => {
  const [userName, setUsername] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');

  return (
    <div className="mx-auto flex justify-center p-4 text-center">
      <div className="w-full max-w-3xl">
        <div className="text-right">
          <button className="p-2 rounded-full px-3 bg-[#B41712] text-white">
            X
          </button>
        </div>

        <div className="pt-2 flex flex-col md:flex-row justify-center text-[#B41712] font-semibold text-[40px] items-center space-x-3">
          <div className="mb-4 md:mb-0">
            <img src="/image 10.png" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]" alt="Auction BIDMASTER" />
          </div>
          <div>
            <span>
              Auction <br />
              BIDMASTER
            </span>
          </div>
        </div>

        <div className="text-black text-[20px] py-4">
          <span>You forgot email/password? <span className="font-bold">Change your password here</span></span>
        </div>

        <div className="text-left space-y-6">
          <div>
            <span>Username</span>
            <br />
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
              placeholder="Username"
              type="text"
              className="border border-black w-full rounded-md py-2 mt-1"
            />
          </div>

          <div>
            <span>New Password</span>
            <br />
            <input
              onChange={(e) => setNewPass(e.target.value)}
              value={newPass}
              placeholder="New Password"
              type="password"
              className="border border-black w-full rounded-md py-2 mt-1"
            />
          </div>

          <div>
            <span>Confirm Password</span>
            <br />
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
              placeholder="Confirm Password"
              type="password"
              className="border border-black w-full rounded-md py-2 mt-1"
            />
          </div>
        </div>

        <div className="text-center pt-10">
          <button className="bg-[#B41712] px-8 py-2 text-white rounded-md">Change your password</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
