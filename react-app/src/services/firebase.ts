// Firebase తీసేశాం — Dummy auth use చేస్తున్నాం

type AuthCallback = (user: any) => void;

let currentUser: any = null;
let authCallbacks: AuthCallback[] = [];

export const auth = {
  onAuthStateChanged: (callback: AuthCallback) => {
    authCallbacks.push(callback);
    callback(currentUser);
    return () => {
      authCallbacks = authCallbacks.filter((cb) => cb !== callback);
    };
  },
};

export function setDummyUser(user: any) {
  currentUser = user;
  authCallbacks.forEach((cb) => cb(currentUser));
}