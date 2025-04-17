import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-shop', 
  imports: [NgIf],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  isPanelOpen = false;
  isLoading = true;
  panelView: 'a' | 'b' | 'c' | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  openPanel(view: 'a' | 'b' | 'c'): void {
    this.panelView = view;
    this.isPanelOpen = true;
    this.isLoading = true;
  
    // Let Angular render the panel before trying to access the container
    setTimeout(() => {
      const paypal = (window as any).paypal;
  
      if (!paypal?.HostedButtons) {
        console.error('PayPal HostedButtons not available.');
        this.isLoading = false;
        return;
      }
  
      let containerId = '';
      let buttonId = '';
  
      if (view === 'a') {
        containerId = '#paypal-container-TCHG6EJ98LZFY';
        buttonId = 'TCHG6EJ98LZFY';
      } else if (view === 'b') {
        containerId = '#paypal-container-5TPKVMNH6MQT6';
        buttonId = '5TPKVMNH6MQT6';
      } else if (view === 'c') {
        containerId = '#paypal-container-MZREY6KBL8PRS';
        buttonId = 'MZREY6KBL8PRS';
      }
  
      // Clear any previous content (just in case)
      const container = document.querySelector(containerId);
      if (container) container.innerHTML = '';
  
      paypal.HostedButtons({
        hostedButtonId: buttonId,
      }).render(containerId).then(() => {
        this.isLoading = false;
      }).catch((err: any) => {
        console.error('PayPal render error:', err);
        this.isLoading = false;
      });
    });
  }

  closePanel(): void {
    this.isPanelOpen = false;
    this.panelView = null;
  }
}
