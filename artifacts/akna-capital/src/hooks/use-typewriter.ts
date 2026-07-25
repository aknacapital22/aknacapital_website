import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // cursor blink
  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words, speed, pause]);

  return {
    text: words[index].substring(0, subIndex),
    cursor: blink ? "|" : " ",
  };
}
