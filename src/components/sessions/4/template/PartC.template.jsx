import React, { useState } from 'react';
import { useSessionTitle } from '../../useSession';
import { memberApi } from '../api';
import Description from '../../../../design/Description';

function PartC() {
  const [name, setName]=useState("");
  const [universityId, setUniversityId]=useState("");
  
  useSessionTitle({ title: 'POST 실습' });

  const postMember=async()=>{
    const response=await memberApi.post(universityId,{name})
    console.log(response)
    setName("")
    setUniversityId("")
  }
  
  return (
    <div>
      <Description
        title="Q: POST 요청을 보내보세요."
        description="이름과 학교 고유번호를 입력하고 확인 버튼을 눌러보세요."
        isAssignment={true}
        />
     <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="이름을 입력해주세요." className="border-2 border-black p-1.5"/>
     <input value={universityId} onChange={(e)=>setUniversityId(e.target.value)} placeholder="학번을 입력해주세요." className="border-2 border-black p-1.5"/>
     <button onClick={postMember} className="border-2 border-black p-1.5">확인</button>
    </div>
  );
}

export default PartC;
