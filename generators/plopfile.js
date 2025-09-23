module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'list',
        name: 'template',
        message: 'Choose a component template:',
        choices: ['Default (common component)', 'UI (forwarded ref component with tests and storybook)']
      }
    ],
    actions: function(data) {
      let actions = [];

      if(data.template.includes('Default')) {
        actions.push({
            type: 'add',
            path: '../src/components/{{kebabCase name}}/index.tsx',
            templateFile: 'templates/component/index.tsx.hbs'
        });

        actions.push({
          type: 'add',
          path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: 'templates/component/component.tsx.hbs'
        });
      }

      if(data.template.includes('UI')) {
        actions.push({
          type: 'add',
          path: '../src/components/ui/{{kebabCase name}}/index.tsx',
          templateFile: 'templates/component/index.tsx.hbs'
        });

        actions.push({
          type: 'add',
          path: '../src/components/ui/{{kebabCase name}}/{{kebabCase name}}.tsx',
          templateFile: 'templates/component/ui-component.tsx.hbs'
        });

        actions.push({
          type: 'add',
          path: '../src/components/ui/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
          templateFile: 'templates/component/spec.tsx.hbs'
        });

        actions.push({
          type: 'add',
          path: '../src/components/ui/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
          templateFile: 'templates/component/stories.tsx.hbs'
        });
      }

      return actions;
    }
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is your page path? (One word per level. Empty for root)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{pathCase path}}/{{kebabCase name}}/page.tsx',
        templateFile: 'templates/page/page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/{{pathCase path}}/{{kebabCase name}}/layout.tsx',
        templateFile: 'templates/page/layout.tsx.hbs'
      }
    ]
  });
};
