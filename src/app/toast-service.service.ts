import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from './toast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  pop(type:string, title:string, message:string) {
    this.toasts.push(new Toast(type, title, message));
  }

  remove(toast:Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

