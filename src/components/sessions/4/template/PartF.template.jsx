import React from 'react';
import { useSessionTitle } from '../../useSession';
import Description from '../../../../design/Description';

function PartF() {
  useSessionTitle({ title: 'DELETE 실습' });

  const deleteMember = async () => {
    /**
     * TODO: deleteMember를 구현해서 [삭제 요망]인 당신을 삭제하세요.
     * 힌트: 학교번호와 파트번호는 swagger에서 확인이 가능해요
     */
    try{
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <Description
      title="Q: DELETE 요청을 보내보세요."
      description="코드를 입력하고 확인 버튼을 눌러 수정될 수 있도록 하세요."
      isAssignment={true}
      />
      <button onClick={deleteMember}>확인</button>
    </div>
  );
}

export default PartF;
