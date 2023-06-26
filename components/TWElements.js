"use client";
import { useEffect } from 'react';

export const TWElementsInit = () => {
  useEffect(() => {
    ;(async () => (await import('tw-elements')))()
  }, []);
  return null
}
