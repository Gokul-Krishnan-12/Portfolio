module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "input",
        name: "moduleName",
        message: "Which module/subfolder does it belongs to?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{moduleName}}/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{moduleName}}/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "templates/component/component.module.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/{{moduleName}}/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/page.ts.hbs",
      },
    ],
  });
};
