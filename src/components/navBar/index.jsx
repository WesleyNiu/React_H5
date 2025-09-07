import css from './index.module.scss'
import React from 'react'
export function NavBack(){
    const onBack =()=>{
        console.log(' nyf ---  返回推出H5 ');
        if(window.Android){
            window.Android.finish()
            console.log(' nyf ---  退出成功 ');
        }
    }
    return <div className={css.back}>
        <div className={css.btn} onClick={onBack}>返回</div>
    </div>
}