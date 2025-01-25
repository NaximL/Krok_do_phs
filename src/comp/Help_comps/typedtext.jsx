import React, { useState, useEffect } from 'react';


function Txt({ txt, t, onEnd }) {
  const [disp, setDisp] = useState('');

  useEffect(() => {
    if (disp.length < txt.length) {
      const id = setTimeout(() => {
        setDisp(prev => prev + txt[prev.length]);
      }, t);
      return () => clearTimeout(id);
    } else {
      setTimeout(onEnd, 13000);
    }
  }, [disp, txt, t, onEnd]);

  return (
    <b className='cur'>
      {disp}
      {disp !== txt && <span className="crs">|</span>}
    </b>
  );
}

function Del({ txt, t, onEnd }) {
  const [disp, setDisp] = useState(txt);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (disp.length > 0) {
      const id = setTimeout(() => {
        setDisp(prev => prev.slice(0, -1));
      }, t);
      return () => clearTimeout(id);
    } else {
      setBlink(true);
      const blinkTimeout = setTimeout(onEnd, 3000);
      return () => clearTimeout(blinkTimeout);
    }
  }, [disp, t, onEnd]);

  return (
    <b className='cur'>
      {disp}
      {disp.length === 0 && <span className={`crs ${blink ? 'blnk' : ''}`}>|</span>}
    </b>
  );
}

function TypingTexts({text,d}) {
  const txtArr = [
    "Як ти почуваєшся сьогодні? Ми готові допомогти.",
    "Потрібна підтримка? Ми тут, щоб тебе вислухати.",
    "Готовий/готова зробити перший крок до зцілення?",
    "Відчуваєш, що тебе ніхто не чує?",
    "Важко знайти вихід? Давай знайдемо його разом.",
    "Тобі боляче, але не знаєш, куди звернутись?",
    "Потребуєш розуміння та підтримки?"
  ];

  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (d) {
      setTxt(text)
    }
    else {
    if (!del) {
      setTxt(txtArr[Math.floor(Math.random() * txtArr.length)]);
    }
    }

  }, [del, txtArr]);

  return (
    <div>
      {!del ? (
        <Txt txt={txt} t={100} onEnd={() => setDel(true)} />
      ) : (
        <Del txt={txt} t={50} onEnd={() => setDel(false)} />
      )}
    </div>
  );
}

export default TypingTexts;