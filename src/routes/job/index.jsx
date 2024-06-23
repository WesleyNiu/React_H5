import { useState } from "react";
import { NavBack } from "../../components/navBar";
import "./index.scss";
import React from "react";
import { useEffect } from "react";


export function useAndroidImg(){
  const [src,setSrc] = useState(null) 
  useEffect(()=>{
    window.handlePhotoResult = function(base64Data) {
      console.log('Received photo data:', base64Data);
      setSrc( 'data:image/jpeg;base64,' + base64Data)
    };
  },[window.handlePhotoResult])

  return [src]
}

export function Solider() {
  const [imgData] = useAndroidImg()
  const takePhotoss = () => {
    if(window.Android){
     window.Android.takePhoto()
    }
    console.log("---  nyf photo");
  }


  return (
    <div className="job_box">
      <NavBack />
      <div className="btn_group">
        <div className="photo btn" onClick={takePhotoss}>
          拍照
        </div>
        <div className="upload btn">上传</div>
        
      </div>
      <img alt="" src={imgData}  className="image"/>
    </div>
  );
}
