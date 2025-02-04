import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ErrorIcon from '@material-ui/icons/Error'

import { dialogStyles } from '../../styles'
import { OrganizationInfo } from './SuperAdminTypes'
import { t } from 'i18next'

interface DeleteOrganiationDialogProps {
  open: boolean
  onConfirm: (arg: OrganizationInfo) => void
  onCancel: () => void
  organization: OrganizationInfo
}

const DeleteOrganizationDialog: React.FC<DeleteOrganiationDialogProps> = ({
  open,
  onConfirm,
  onCancel,
  organization,
}) => {
  const style = dialogStyles()

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: { borderRadius: 30 },
      }}
    >
      <DialogTitle className={style.dialogTitle}>
        <ErrorIcon fontSize="large" className={style.errorIcon}></ErrorIcon>
        <span className={style.dialogTitleText}>
          {t('superAdmin.editOrganizations.removeOrganization', {
            organization: organization.name,
          })}
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t(
            'superAdmin.editOrganizations.areYouSureYouWantToRemoveTheOrganization',
            { organization: organization.name }
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={style.alertButtons}>
        <Button
          onClick={() => onConfirm(organization)}
          className={style.cancelButton}
        >
          <span className={style.buttonText}>{t('remove')}</span>
        </Button>
        <Button onClick={onCancel} className={style.confirmButton}>
          <span className={style.buttonText}>{t('abort')}</span>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteOrganizationDialog
