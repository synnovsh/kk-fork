import React from 'react'

import EditOrganizations from './EditOrganizations'
import EditOrganizationAdmins from './EditOrganizationAdmins'
import EditSuperAdmins from './EditSuperAdmins'
import style from '../AdminPanel/AdminPanel.module.css'

type SuperAdminPanelProps = {
  activeSubmenuItem: string
}

enum SubmenuCategory {
  HIDDEN = 'hidden',
  EDIT_ORGANIZATIONS = 'editOrganizations',
  EDIT_SUPER_ADMINS = 'editSuperAdmins',
  EDIT_ORGANIZATION_ADMINS = 'editOrganizationAdmins',
}

const SuperAdminPanel = ({ activeSubmenuItem }: SuperAdminPanelProps) => {
  return (
    <div className={style.container}>
      {activeSubmenuItem === SubmenuCategory.EDIT_ORGANIZATIONS && (
        <EditOrganizations />
      )}
      {activeSubmenuItem === SubmenuCategory.EDIT_SUPER_ADMINS && (
        <EditSuperAdmins />
      )}
      {activeSubmenuItem === SubmenuCategory.EDIT_ORGANIZATION_ADMINS && (
        <EditOrganizationAdmins />
      )}
    </div>
  )
}

export { SuperAdminPanel, SubmenuCategory }
