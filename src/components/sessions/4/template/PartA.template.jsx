import React, { useState } from 'react';
import { useSessionTitle } from '../../useSession';
import { useEffect } from 'react';
import { universityApi } from '../api';
import Description from '../../../../design/Description';

function PartA() {
  const [universities, setUniversities]=useState ([])
  useSessionTitle({ title: 'GET 실습' });

  useEffect(() => {
   {
    /**
     * TODO: universityApi.get()을 호출하여 universities를 채우세요.
     * 요구사항 try-catch 구문을 사용하여 에러를 잡아주세요
     * 힌트: 비동기 즉시호출 함수로 구현 시 편합니다.
     */
   }
  }, []);
  return (
    <div>
      <Description
        title="Q: 학교 목록을 불러와서 아래에 출력해주세요."
        description="요구사항 try-catch 구문을 사용하여 에러를 잡아주세요"
        isAssignment={true}
      />
      <div>
        {universities?.map((university) => (
          <div key={university.id}
            className="flex gap-8 border-2 border-black p-1.5"
          >
            <div>고유번호: {university.id}</div>
            <div className="w-64">학교이름: {university.name}</div>
            <div className="w-24">국가: {university.country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartA;
