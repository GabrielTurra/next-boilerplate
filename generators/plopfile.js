module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/component/spec.tsx.hbs'
      }
    ]
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
