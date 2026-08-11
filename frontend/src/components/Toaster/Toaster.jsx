import {toast } from '@/components/ui/toast'
export function showToast(title, description, type) {
toast.add({
  title: title,
  description: description,
  type: type,
})
}
