import './index.scss'
import React from 'react'
export function NavBack(){
    const onBack =()=>{
        console.log(' nyf ---  返回推出H5 ');
        if(window.Android){
            window.Android.finish()
            console.log(' nyf ---  退出成功 ');
        }
    }
    return <div className="back">
        <div className="btn" onClick={onBack}>返回</div>
    </div>
}