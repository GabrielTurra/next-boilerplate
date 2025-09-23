import type { Meta, StoryObj } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { TextInput } from '.';
import { TextInputControlProps } from './control';

export default {
  title: 'Components/Inputs/Text',
  component: (props) => (
    <TextInput.Root>
      <TextInput.Control {...props} />
    </TextInput.Root>
  ),
  args: {
    placeholder: 'Input',
    type: 'text'
  },
  argTypes: {
    type: {
      options: ['text', 'file', 'password'],
      control: 'select',
      table: {
        category: 'Behaviour',
        type: {
          summary: 'enum (string)',
          detail: '"text" | "file" | "password"'
        },
        defaultValue: {
          summary: 'text'
        }
      }
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'Behaviour',
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
} as Meta<TextInputControlProps>;

export const Default: StoryObj<TextInputControlProps> = {
  args: {
    disabled: false,
    type: 'text'
  }
};

export const Password: StoryObj<TextInputControlProps> = {
  args: {
    disabled: false,
    type: 'password'
  },
  render: (props) => (
    <TextInput.Root>
      <TextInput.Control {...props} />
    </TextInput.Root>
  )
};

export const Decorator: StoryObj<TextInputControlProps> = {
  args: {
    disabled: false,
    type: 'text'
  },
  render: (props) => (
    <div className="flex flex-col gap-y-4">
      <TextInput.Root>
        <TextInput.Decorator Icon={FaUser} />
        <TextInput.Control {...props} placeholder="Left Decorator" />
      </TextInput.Root>

      <TextInput.Root>
        <TextInput.Control {...props} placeholder="Right Decorator" />
        <TextInput.Decorator Icon={FaUser} />
      </TextInput.Root>

      <TextInput.Root>
        <TextInput.Decorator Icon={FaUser} />
        <TextInput.Control {...props} placeholder="Password and Decorator" type="password" />
      </TextInput.Root>
    </div>
  )
};
