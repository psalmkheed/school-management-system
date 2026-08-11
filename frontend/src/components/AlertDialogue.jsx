import {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function AlertDialogue({
      title,
      description,
      actionFunction,
      actionText,
      open,
      onOpenChange,
}) {
      return (
            <AlertDialog open={open} onOpenChange={onOpenChange}>
                  <AlertDialogContent>
                        <AlertDialogHeader>
                              <AlertDialogTitle>
                                    {title}
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                    {description}
                              </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                              <AlertDialogCancel>
                                    Cancel
                              </AlertDialogCancel>

                              <AlertDialogAction onClick={actionFunction}>
                                    {actionText}
                              </AlertDialogAction>
                        </AlertDialogFooter>
                  </AlertDialogContent>
            </AlertDialog>
      );
}