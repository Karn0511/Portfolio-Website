import { Injectable, signal } from '@angular/core';

export interface Alert {
  id: number;
  type: 'success' | 'info' | 'warn' | 'error';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SystemNarrationService {
  alerts = signal<Alert[]>([]);
  private counter = 0;

  notify(title: string, message: string, type: Alert['type'] = 'info') {
    const id = ++this.counter;
    const newAlert: Alert = { id, title, message, type };
    
    this.alerts.update(prev => [...prev, newAlert]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      this.alerts.update(prev => prev.filter(a => a.id !== id));
    }, 5000);
  }

  // Simulated system events
  simulateRandomEvents() {
    const events = [
      { title: 'DEPLOYMENT_STABLE', message: 'Region: US-EAST-1 updated successfully.', type: 'success' },
      { title: 'TRAFFIC_SPIKE', message: 'Detected 125% increase in ingress traffic.', type: 'info' },
      { title: 'CACHE_FLUSH', message: 'Invalidating edge caches for CDN optimization.', type: 'info' },
      { title: 'SECURITY_SCAN', message: 'Background vulnerability check complete. 0 issues found.', type: 'success' },
      { title: 'MEMORY_OPTIMIZATION', message: 'GC cycle completed. Recovered 420MB.', type: 'success' }
    ];

    setInterval(() => {
      if (Math.random() > 0.8) {
        const e = events[Math.floor(Math.random() * events.length)];
        this.notify(e.title, e.message, e.type as any);
      }
    }, 15000);
  }
}
