import React, { useState } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'

import { dialogStyles } from '../../../styles'
import { CloseIcon } from '../../DescriptionTable'
import { useTranslation } from 'react-i18next'

const CopyCatalogDialog = ({ onCancel, onConfirm, onExited, open }: any) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const style = dialogStyles()

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      onExited={onExited}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: { borderRadius: 30 },
      }}
    >
      <DialogTitle>
        <Box
          component="div"
          mb={1}
          display="flex"
          justifyContent="space-between"
        >
          <span className={style.dialogTitleText}>
            {t('admin.editCatalogs.copyCatalog')}
          </span>
          <IconButton className={style.closeButton} onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          autoFocus
          fullWidth
          label={t('admin.editCatalogs.nameOfNewCatalog')}
          variant="outlined"
          error={name === ''}
          helperText={name === '' && t('nameCantBeEmpty')}
          value={name}
          className={style.textField}
          onChange={(e: any) => setName(e.target.value)}
        />
      </DialogTitle>
      <DialogActions className={style.alertButtons}>
        <Button
          disabled={name === ''}
          onClick={() => onConfirm(name)}
          className={style.confirmButton}
        >
          <span className={style.buttonText}>
            {t('admin.editCatalogs.copy')}
          </span>
        </Button>
        <Button onClick={onCancel} className={style.cancelButton}>
          <span className={style.buttonText}>{t('abort')}</span>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CopyCatalogDialog
