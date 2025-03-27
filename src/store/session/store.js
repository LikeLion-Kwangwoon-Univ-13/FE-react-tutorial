import { create } from "zustand";

const useSessionStore = create((set) => ({
  part: 0,
  setPart: (part) => {
    if (part < 0) return;
    return set({
      part,
    });
  },
  titles: {
    title: undefined,
    subtitle: undefined,
  },
  setTitles: (titles) =>
    set({
      titles,
    }),
}));
export default useSessionStore;
