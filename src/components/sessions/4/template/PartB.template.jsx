import React, { useEffect, useState } from 'react';
import { useSessionTitle } from '../../useSession';
import { partApi, universityApi } from '../api';
import Description from '../../../../design/Description';

function PartB() {
  const [parts, setParts]=useState([])
  useSessionTitle({ title: 'GET 실습 2' });
  useEffect(()=>{
    (async ()=>{
      try{
        const res=await universityApi.get();
        const kwu=res.find((university)=>university.name==='')
        {
          /**
           * TODO: kwu가 null이 아니면 partApi.get()을 호출하여 parts를 채우세요.
           */
        }
      }catch(error){
        console.log(error)
      }
    })()
  },[])

  return (
    <div>
      <Description
        title="Q: 광운대학교의 파트 목록을 불러와서 아래에 출력해주세요."
        description="여러 API를 호출하는 흐름을 기억하세요."
        isAssignment={true}
      />
      {
        parts?.map((part)=>(
          <div key={part.id} className='flex gap-8 border-2 border-black p-1.5'>
            <div className='w-24'>고유번호: {part.id}</div>
            <div className='w-64'>파트이름: {part.name}</div>
            <div className='w-24'>파트코드: {part.code}</div>
          </div>
        ))
      }
    </div>
  );
}

export default PartB;
