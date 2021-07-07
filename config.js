
module.exports = [
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
      'fieldset',
      'file upload',
      'footer',
      'header',
      'hint',
      'inset text',
      'label',
      'notification banner',
      'panel',
      'phase banner',
      'radios',
      'select',
      'skip link',
      'summary list',
      'table',
      'tabs',
      'tag',
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
      },
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
      'tooling',
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
      'examples',
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
    group: 'Effort',
    color: 'f3f2f1',
    labels: [
      {
        name: '🕔 days',
        description: 'A few unknowns, but we roughly know what’s involved.',
        aliases: ['Effort: days']
      },
      {
        name: '🕔 hours',
        description: 'A well understood issue which we expect to take less than a day to resolve.',
        aliases: ['Effort: hours']
      },
      {
        name: '🕔 weeks',
        description: 'This is complicated and will require a lot of effort from the team.',
        aliases: ['Effort: weeks']
      }
    ]
  },

  {
    group: 'Audits',
    color: '555555',
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
      }
    ]
  },

  {
    group: 'Meta',
    color: '912b88',
    labels: [
      'analytics',
      'assurance',
      'community',
      'contribution',
      'process',
      'support'
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
        name: 'submitted by user',
        color: 'b1b4b6',
        aliases: ['submitted-by-user']
      },
      {
        name: 'needs research',
        color: '4c2c92'
      }
    ]
  }
]
