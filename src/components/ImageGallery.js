import React, { useState, useEffect } from 'react';
import { Image } from "antd";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 假設你已經知道所有圖片的名稱，可以手動列出來
    const imageList = [
      '1 (1).jpg',
      '1 (2).jpg',
      '1 (3).jpg',
      '1 (4).jpg',
      '1 (5).jpg',
      '1 (6).jpg',
      '1 (7).jpg',
      '1 (8).jpg',
      '1 (9).jpg',
      '1 (10).jpg',
      '1 (11).jpg',
      '1 (12).jpg',
      '1 (13).jpg',
      '1 (14).jpg',
      '1 (15).jpg',
      '1 (16).jpg',
      '1 (17).jpg',
      '1 (18).jpg',
      '1 (19).jpg',
      '1 (20).jpg',
      '1 (21).jpg',
      '1 (22).jpg',
      '1 (23).jpg',
      '1 (24).jpg',
      '1 (25).jpg',
      '1 (26).jpg',
      '1 (27).jpg',
      '1 (28).jpg',
      '1 (29).jpg',
      // 在這裡繼續添加更多圖片名稱
    ];

    // 設定圖片的路徑
    const imagePaths = imageList.map(image => `${process.env.PUBLIC_URL}/images/${image}`);

    setImages(imagePaths);
  }, []);

  return (
    <div>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`img-${index}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;