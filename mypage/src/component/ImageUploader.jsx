// ImageUploader.jsx

import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  // 파일 입력 변경 시 실행되는 콜백 함수
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // 파일 선택 창에서 첫 번째 파일 가져오기
    if (file) {
      const reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성
      reader.onload = () => {
        setImage(reader.result); // 읽은 파일을 이미지 URL로 설정하여 상태 업데이트
      };
      reader.readAsDataURL(file); // 파일을 읽어서 데이터 URL로 변환
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />} {/* 선택된 이미지 미리보기 */}
    </div>
  );
}

export default ImageUploader;
