import React, { useState } from 'react';
import { useSessionTitle } from '../../useSession';
import { memberApi } from '../api';
import Description from '../../../../design/Description';

function PartE() {
  const [code, setCode]=useState("")
  useSessionTitle({ title: 'PATCH 실습' });
  const patchCode = async () => {
      /**
       * TODO: memberApi.patch()를 호출하여 XX..인 code의 당신을 변경하세요.
       * 힌트: 광운대학교의 id는 5, 프론트엔드의 id는 1이에요.
       */
      try{
      
      }catch(error){
        console.log(error)
      }
  }
  return (
    <div>
      <Description
      title="Q: PATCH 요청을 보내보세요."
      description="코드를 입력하고 확인 버튼을 눌러 수정될 수 있도록 하세요."
      isAssignment={true}
      />
      <input
      type="text"
      onChange={(e)=>setCode(e.target.value)}
      value={code}
      placeholder="코드를 입력해주세요."
      className="border-2 border-black p-1.5"
      />
      <button
      onClick={()=>patchCode()}
      className="border-2 border-black p-1.5"
      >
        확인
      </button>
    </div>
  );
}

export default PartE;
