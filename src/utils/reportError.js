import { database, ref, set } from "../config";

const sanitize = (value) => {
  if (!value) return "";
  return String(value).slice(0, 5000);
};

const reportError = async (error, info = {}) => {
  try {
    const id =
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.floor(Math.random() * 100000)}`;

    const payload = {
      message: sanitize(error?.message),
      stack: sanitize(error?.stack),
      componentStack: sanitize(info?.componentStack),
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    await set(ref(database, `clientErrors/${id}`), payload);
  } catch (e) {
    console.error("Error reporting failed:", e);
  }
};

export default reportError;
