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
    columns: {
      label: {
          en: 'Columns',
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
    stripedRowsControl: {
      label: { en: 'Striped table rows control' },
      type: 'OnOff',
      section: 'style',
      defaultValue: false,
    },
    paginatorControl: {
      label: { en: 'Paginator control' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
    },
    removeableSortControl: {
      label: { en: 'Removable sort control' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
    },
    showHeaderControl: {
      label: { en: 'Search header control' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
    },
    searchInputPlaceholder: {
      label: { en: 'Search placeholder text' },
      type: 'Text',
      options: {
        placeholder: 'Search'
      },
      section: 'settings'
    }
  },
};
