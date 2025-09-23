'use client';

import { FaRegUser } from 'react-icons/fa';
import { TextInput } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="flex flex-col items-center align-middle justify-center space-y-8 mt-8 h-screen">
      <div className="w-full h-[2px] bg-gray-200" />

      <TextInput.Root>
        <TextInput.Label>Label Example 2</TextInput.Label>

        <TextInput.Content>
          <TextInput.Decorator Icon={FaRegUser} />
          <TextInput.Control type="text" placeholder="Input 2" />
        </TextInput.Content>

        <TextInput.Error>Error Example 2</TextInput.Error>
      </TextInput.Root>
    </div>
  );
}
