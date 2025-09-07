import { useState } from "react";
import { NavBack } from "../../components/navBar";
import css from "./index.module.scss";
import React from "react";
import { useEffect } from "react";
import {classNames} from "../../utils/utils";


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
  }


  return (
    <div className={css.job_box}>
      <NavBack />
      <div className={css.btn_group}>
        <div className={classNames(css.photo,css.btn,'take_photo-nyf')} onClick={takePhotoss}>
          拍照
        </div>
        <div className={classNames(css.btn,css.upload)}>上传</div>
      </div>
      <img alt="" src={imgData}  className={css.image}/>
    </div>
  );
}
