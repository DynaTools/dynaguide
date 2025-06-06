import React from 'react';
import AutoLanguageWrapper from '../components/AutoLanguageDetection';

export default function Root({ children }) {
  return (
    <AutoLanguageWrapper>
      {children}
    </AutoLanguageWrapper>
  );
}
