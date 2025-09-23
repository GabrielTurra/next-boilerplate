import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: action('Button cliked.')
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: 'select',
      table: {
        category: 'Appereance',
        type: {
          summary: 'enum (string)',
          detail: '"default" | "sm" | "lg" | "icon"'
        },
        defaultValue: {
          summary: 'default'
        }
      }
    },
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      control: 'select',
      table: {
        category: 'Appereance',
        type: {
          summary: 'enum (string)',
          detail: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"'
        },
        defaultValue: {
          summary: 'default'
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
    },
    asChild: {
      table: {
        category: 'Behaviour',
        type: {
          summary: 'boolean'
        }
      }
    },
    onClick: {
      table: {
        category: 'Event Listeners'
      }
    }
  }
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    asChild: false,
    size: 'default',
    variant: 'default',
    disabled: false
  }
};
