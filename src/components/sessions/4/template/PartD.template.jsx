import React from 'react';
import { useSessionTitle } from '../../useSession';
import Description from '../../../../design/Description';

function PartD() {
  useSessionTitle({ title: '??????????' });

  return (
    <div className='w-full flex items-center justify-center h-full  text-center'>
   <Description
   title="잘 호출 되었나요? Swagger나 POSTMAN으로 확인해보세요."
   description="이상한 점이 있다면 확인해보세요."
   isAssignment={true}
   />
    </div>
  );
}

export default PartD;
