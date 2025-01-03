export default [
  {
    group: 'Styles',
    color: 'b7deff',
    labels: [
      'colour',
      'images',
      'layout',
      {
        name: 'page template',
        aliases: ['page templates']
      },
      'spacing',
      'typography'
    ]
  },

  {
    group: 'Components',
    color: '1d70b8',
    labels: [
      'accordion',
      'back link',
      'breadcrumbs',
      'button',
      'character count',
      'checkboxes',
      'cookie banner',
      'date input',
      'details',
      'error message',
      'error summary',
      'exit this page',
      'fieldset',
      'file upload',
      'footer',
      'header',
      'hint',
      'inset text',
      'label',
      'notification banner',
      'pagination',
      'panel',
      'password input',
      'phase banner',
      'radios',
      'select',
      'service navigation',
      'skip link',
      'summary list',
      'table',
      'tabs',
      'tag',
      'task list',
      'text input',
      'textarea',
      'warning text'
    ]
  },

  {
    group: 'Patterns',
    color: '0328af',
    labels: [
      // Ask users for...
      {
        name: 'addresses',
        description: 'Ask users for addresses'
      },
      {
        name: 'bank details',
        description: 'Ask users for bank details'
      },
      {
        name: 'dates',
        description: 'Ask users for dates'
      },
      {
        name: 'email addresses',
        description: 'Ask users for email addresses'
      },
      {
        name: 'equality information',
        description: 'Ask users for equality information'
      },
      {
        name: 'gender or sex',
        description: 'Ask users for gender or sex'
      },
      {
        name: 'names',
        description: 'Ask users for names'
      },
      {
        name: 'national insurance numbers',
        description: 'Ask users for National Insurance numbers'
      },
      {
        name: 'passwords',
        description: 'Ask users for passwords'
      },
      {
        name: 'payment card details',
        description: 'Ask users for payment card details'
      },
      {
        name: 'telephone numbers',
        description: 'Ask users for telephone numbers'
      },

      // Help users to...

      {
        name: 'check service is suitable',
        description: 'Help users to check a service is suitable'
      },
      {
        name: 'check answers',
        description: 'Help users to check answers'
      },
      {
        name: 'confirm email address',
        description: 'Help users to confirm an email address',
        aliases: ['confirm an email address']
      },
      {
        name: 'contact dept or service team',
        description: 'Help users to contact a department or service team'
      },
      {
        name: 'create a username',
        description: 'Help users to create a username'
      },
      {
        name: 'create accounts',
        description: 'Help users to create accounts'
      },
      {
        name: 'impact of an emergency',
        description: 'Help users to understand the impact of an emergency on your service'
      },
      {
        name: 'validation errors',
        description: 'Help users to recover from validation errors'
      },

      // Pages

      {
        name: 'confirmation pages',
        description: 'Confirmation pages'
      },
      {
        name: 'page not found',
        description: 'Page not found pages'
      },
      {
        name: 'problem with service',
        description: 'Problem with the service pages'
      },
      {
        name: 'question pages',
        description: 'Question pages'
      },
      {
        name: 'service unavailable',
        description: 'Service unavailable pages'
      },
      {
        name: 'start pages',
        description: 'Start pages'
      },
      {
        name: 'step by step navigation',
        description: 'Step by step navigation'
      },
      {
        name: 'task list',
        description: 'Task list pages'
      }
    ]
  },

  {
    group: 'Technical',
    color: '5bffd8',
    labels: [
      'accessibility',
      'customisation',
      'font',
      'interoperability',
      'javascript',
      'sass / css',
      'nunjucks',
      'localisation',
      'performance',
      'tech debt',
      'tooling'
    ]
  },

  {
    group: 'Content',
    color: '00703c',
    labels: [
      {
        name: 'documentation',
        aliases: ['Enhancement: documentation']
      },
      'guidance',
      'examples'
    ]
  },

  {
    group: 'Design',
    color: 'db2096',
    labels: [
      'usability',
      'consistency',
      'design'
    ]
  },

  {
    group: 'Accessibility',
    labels: [
      {
        name: 'accessibility concern',
        color: 'D93F0B',
        description: 'Bug, feature request or question about the accessibility of a portion of a product (not a WCAG fail)',
        aliases: ['accessibility-concern']
      },
      {
        name: 'accessibility regulations failure',
        color: 'ffdd00',
        description: 'Does not meet the Public Sector Accessibility Regulations (WCAG 2.2 level AA)',
        aliases: ['accessibility-regulations-failure']
      },
      {
        name: 'accessibility statement',
        color: 'bfd4f2',
        description: 'These GitHub issues are or have previously been featured in our accessibility statement',
        aliases: ['accessibility-statement']
      },
      {
        name: 'accessibility strategy activities',
        color: 'bfd4f2',
        description: 'Activities covered in the accessibility strategy',
        aliases: ['accessibility-strategy-activities']
      },
      {
        name: 'WCAG 2.2',
        color: '3352CC',
        description: 'All items related to WCAG 2.2 update activities',
        aliases: ['wcag-2.2']
      }
    ]
  },

  {
    group: 'Accessibility audits',
    color: 'd4c5f9',
    labels: [
      {
        name: 'audit may 2019',
        description: 'Issues from May 2019 external accessibility audit, before version 3.0.0',
        aliases: ['audit: may-2019']
      },
      {
        name: 'audit october 2019',
        description: 'Issues from October 2019 external accessibility audit re-test of May',
        aliases: ['audit: october-2019']
      },
      {
        name: 'audit may 2023',
        description: 'Issues from May 2023 external accessibility audit against WCAG 2.2 criteria',
        aliases: ['audit: may-2023']
      },
      {
        name: 'audit july 2024',
        description: 'Issues from July 2024 external accessibility audit against WCAG 2.2 criteria',
        aliases: ['audit: july-2024']
      }
    ]
  },

  {
    group: 'Meta',
    color: '912b88',
    labels: [
      'analytics',
      'assurance',
      'contribution',
      'comms',
      'event',
      'process',
      'research',
      'research ops',
      'security'
    ]
  },

  {
    group: 'Others',
    labels: [
      {
        name: 'breaking change',
        color: '5319e7',
        aliases: ['breaking-change']
      },
      {
        name: '🐛 bug',
        color: 'fbca04',
        aliases: ['bug']
      },
      {
        name: 'epic',
        color: '0b0c0c'
      },
      {
        name: 'small story',
        color: '0b0c0c'
      },
      {
        name: '🔍 investigation',
        color: 'f3f2f1',
        aliases: ['investigation']
      },
      {
        name: '⚠️ high priority',
        color: 'd4351c',
        aliases: ['Priority: high', 'high priority']
      },
      {
        name: '🚀 release',
        color: 'fcd6bd',
        aliases: ['release']
      },
      {
        name: 'awaiting triage',
        color: 'f3f2f1',
        aliases: ['awaiting-triage']
      },
      {
        name: 'tech debt',
        color: '5bffd8'
      },
      {
        name: 'prototype kit',
        color: 'd53880'
      },
      {
        name: 'DSday',
        color: 'C2E0C6',
        description: 'Tasks related to the planning or delivery of DSday events'
      }
    ]
  }
]
