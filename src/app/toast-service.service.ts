import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from './toast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  pop(type:ToastType, title:string, message:string) {
    this.toasts.push(new Toast(type, title, message));
  }

  remove(toast:Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

export interface ToastType{
  name:string;
  class:string;
}
export const TOAST_TYPE:Record<string, ToastType> = {
  DANGER:{name: "danger", class: "toast-danger"},
  WARNING:{name: "warning", class: "toast-warning"},
  SUCCESS:{name: "success", class: "toast-success"}

};
