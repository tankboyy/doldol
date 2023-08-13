import React from 'react';

type propsType = {};

export default function Page(props: propsType) {
  const NAVER_CLIENT_ID = 'ruU3xxiQPkyB03JKV_D3';
  const REDIR_URL = 'http://localhost:3000'
  const STATE = 'false'
  const NAVER_AUTH_URL = ''
  return (
    <div>
      <div className="flex flex-col w-">
        <input type="text"/>
        <input type="text"/>
      </div>
    </div>
  );
}