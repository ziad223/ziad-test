'use client';

import { MdClose } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';

export default function QRCodeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleRequestCamera = () => {
    // طلب إذن الكاميرا
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        console.log('Camera access granted');
        // هنا تقدر تضيف logic لمسح الـ QR
      })
      .catch((error) => {
        console.error('Camera access denied:', error);
        alert('Camera access denied');
      });
  };

  const handleScanImage = () => {
    // فتح File Picker
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        console.log('Image selected:', file);
        // هنا تقدر تضيف logic لمسح الـ QR من الصورة
      }
    };
    input.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <MdClose className="text-2xl" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Scan QR Code
          </h2>

          {/* QR Icon and Actions */}
          <div className="border-2 border-gray-200 rounded-xl p-8 mb-6">
            <div className="flex flex-col items-center gap-6">
              {/* Icon */}
              <div className="text-gray-400">
                <FaMobileAlt className="text-6xl" />
              </div>

              {/* Actions */}
              <div className="w-full space-y-4">
                <button
                  onClick={handleRequestCamera}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Request Camera Permissions
                </button>

                <button
                  onClick={handleScanImage}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium underline"
                >
                  Scan an Image File
                </button>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-gray-500 text-sm">
            Point your camera at a QR code to scan
          </p>
        </div>
      </div>
    </div>
  );
}