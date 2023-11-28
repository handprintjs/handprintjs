declare global {
  interface Window { handprint: any; }
}

window.handprint = window.handprint || { id: {}, q: [], callbacks: [] };

export const handprint = {
  identify: (id: string, props: Record<string, any> = {}, type: string = "account") => {
    window.handprint.id = { "id": id, "properties": props, "type": type };
  },
  track: (event_type: string, event_properties: Record<string, any> = {}) => {
    if (window.handprint.track) {
      window.handprint.track(event_type, event_properties);
    } else {
      window.handprint.q.push([event_type, event_properties]);
    }
  },
  on: (event_name: string, callback_fn: (...args: any[]) => void) => {
    if (window.handprint.on) {
      window.handprint.on(event_name, callback_fn);
    } else {
      (window.handprint.callbacks[event_name] ??= []).push(callback_fn);
    }
  },
  get: () => {
    return new Promise((resolve, reject) => {
      let t = Date.now();
      const e = () => {
        if (window.handprint && window.handprint.honey) {
          resolve(window.handprint.honey);
        } else if (Date.now() - t >= 5000) {
          reject(new Error("Handprint could not be retrieved"));
        } else {
          setTimeout(e, 100);
        }
      };
      e();
    });
  },
  load: (url: string) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = url;
    document.head.appendChild(script);
  },
};

export default handprint;