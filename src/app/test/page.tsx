'use client'

import React, { useEffect } from 'react';
import { onGetCurrentChatBot } from '@/actions/bot';

export default function TestPage() {
  const domainId = '422da55c-1cac-496b-b7dd-798f7a184969';

  useEffect(() => {
    onGetCurrentChatBot(domainId).then(chatbot => {
      console.log(chatbot);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>TestPage</div>
  );
}