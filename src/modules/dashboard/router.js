

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import AdminView from './pages/AdminView.vue'
import ContactMessagesTable from './components/ContactMessagesTable.vue'
import UsersTable from './components/UsersTable.vue'
import AdminInfo from './components/AdminInfo.vue'
import AddClinicHistory from './components/AddClinicHistory.vue'
import EditClinicHistory from './components/EditClinicHistory.vue'
import ClinicHistoryTemplate from './components/ClinicHistoryTemplate.vue'

import ClinicHistoriesTable from './components/ClinicHistoriesTable.vue'


export const routes = [
  { 
    path: '',               
    label: "🎛️ Dashboard",       
    component: Dashboard 
  },
  { 
    path: 'clinic-history', 
    label: "👤 Mis historias clínicas", 
    component: ClinicHistory,
    children: [
      {
        path: '',
        component: ClinicHistoriesTable
      },
      {
        path: ':id',
        component: ClinicHistoryTemplate
      },
      {
        path: 'create-clinic-history',
        component: AddClinicHistory
      },
      {
        path: 'edit',
        component: EditClinicHistory
      },
    ]
  },
  { 
    path: 'admin', 
    label: "👑 Admin", 
    component: AdminView,
    children: [
      {
        path: '',
        component: AdminInfo
      },
      {
        path: 'info',
        component: AdminInfo
      },
      {
        path: 'contact-messages',
        component: ContactMessagesTable
      },
      {
        path: 'users',
        component: UsersTable
      },
    ]
  }
]
