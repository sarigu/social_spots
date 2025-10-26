import { useEffect } from "react";

export function useExternalScript(
  scriptSrc: string,
  condition: boolean,
  initFn: () => void
) {
  useEffect(() => {
        if (!condition) return;

        const timer = setTimeout(() => {
            const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
            if (existingScript) {
            initFn();
            } else {
            const script = document.createElement("script");
            script.src = scriptSrc;
            script.async = true;
            script.onload = initFn;
            document.body.appendChild(script);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [scriptSrc, condition, initFn]);
}
