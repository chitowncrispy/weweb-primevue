export default {
  options: {
    layout: ['flex'],
  },
  inherit: {
    type: 'ww-layout',
  },
  editor: {
    label: {
      en: "PrimeVue Table",
    },
  },
  
  properties: {
    tableData: {
      label: {
          en: 'Records',
      },
      type: 'Info',
      options: {
          text: { en: 'Bind your data' },
      },
      bindable: 'repeatable',
      section: 'settings',
      /* wwEditor:start */
      bindingValidation: {
          validations: [
              {
                  type: 'array',
              },
              {
                  type: 'object',
              },
          ],
          tooltip: 'A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`',
      },
      /* wwEditor:end */
  },
  // tableData: {
  //   label: { en: "Data" },
  //   type: "Array",
  //   defaultValue: "",
  // },
  },
};
