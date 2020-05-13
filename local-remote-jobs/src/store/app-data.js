let data = {
  landing: {
    header: {
      Landing: {
        logo: 'LRJ.',
        loboSubTitile: 'Local Remote Jobs'
      },
      right: {
        Search: 'search',
        Notifications: 'notifications',
        Settings: 'settings',
        Menu: 'menu',
      }
    },
    leftNavigation: {
      Dashboard: 'dashboard',
      Profile: 'account_circle',
      Mail: 'mail',
      Work: 'work',
    },
    userProfile: {
      personal: {
        Name: 'Chandrashekar Boggavarpu',
        Title: 'Fullstach Developer',
        Status: 'Active'
      },
      revenue: {
        Total: 758,
      },
      projects: {
        Active: 2,
        InProgress: 2,
        Completed: 7
      },
      portfolio: {}
    },
    footer: {
      year: 2020,
      licence: 'Copyright'
    }
  },
  dashboard: {},
  jobs: {
    loading: false,
    formData: {
      title: '',
      company: '',
      position: '',
      category: '',
      description: '',
      requirement: ''
    }
  }
}

export { data }