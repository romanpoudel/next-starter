"use client";
import { useEffect } from "react";
// react-scan must be imported before react
import { scan } from "react-scan";

export function ReactScan() {
  useEffect(() => {
    scan({
      enabled: true,
      showToolbar: true,
    });
  }, []);

  return null;
}
