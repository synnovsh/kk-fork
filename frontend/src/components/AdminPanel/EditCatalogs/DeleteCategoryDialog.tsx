import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ErrorIcon from '@material-ui/icons/Error'

import { dialogStyles } from '../../../styles'
import { useTranslation } from 'react-i18next'

const DeleteCategoryDialog = ({
  category,
  categoryContainsQuestions,
  onCancel,
  onConfirm,
  onExited,
  open,
}: any) => {
  const { t } = useTranslation()
  const style = dialogStyles()

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      onExited={onExited}
      PaperProps={{
        style: { borderRadius: 30 },
      }}
    >
      <DialogTitle className={style.dialogTitle}>
        <ErrorIcon fontSize="large" className={style.errorIcon}></ErrorIcon>
        <span className={style.dialogTitleText}>
          {t('admin.editCatalogs.removeTheCategoryQuestion', {
            categoryName: category.text,
          })}
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {!categoryContainsQuestions
            ? t('admin.editCatalogs.areYouSureYouWantToRemoveThisCategory')
            : t(
                'admin.editCatalogs.cantRemoveCategoryAsItStillContainsQuestions'
              )}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={style.alertButtons}>
        <Button
          onClick={onConfirm}
          className={style.cancelButton}
          disabled={categoryContainsQuestions}
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

export default DeleteCategoryDialog
