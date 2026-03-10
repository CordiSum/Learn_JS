import React, { useEffect, useMemo, useState } from "react";
import "./BestEmojiVotePage.css";

import { EMOJIS } from "./emojis";
import { clearVotes, getDefaultVotes, loadVotes, saveVotes } from "./storage";
import EmojiItem from "./components/EmojiItem";

export default function BestEmojiVotePage() {
  const [votes, setVotes] = useState(() => loadVotes());
  const [showResults, setShowResults] = useState(false);

  // сохраняем в localStorage при каждом изменении votes
  useEffect(() => {
    saveVotes(votes);
  }, [votes]);

  const totalVotes = useMemo(() => {
    return Object.values(votes).reduce((sum, v) => sum + v, 0);
  }, [votes]);

  const winner = useMemo(() => {
    // если никто не голосовал — победителя нет
    if (totalVotes === 0) return null;

    let bestId = null;
    let bestCount = -1;

    for (const e of EMOJIS) {
      const c = votes[e.id] ?? 0;
      if (c > bestCount) {
        bestCount = c;
        bestId = e.id;
      }
    }

    const emoji = EMOJIS.find((e) => e.id === bestId);
    return emoji ? { ...emoji, count: bestCount } : null;
  }, [votes, totalVotes]);

  function handleVote(id) {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
    // можно оставить результаты на экране, а можно скрывать при новом голосе:
    // setShowResults(false);
  }

  function handleShowResults() {
    setShowResults(true);
  }

  function handleClear() {
    clearVotes(); // удаляем из localStorage
    setVotes(getDefaultVotes()); // сбрасываем в 0
    setShowResults(false);
  }

  return (
    <div className="votePage">
      <h1 className="title">Голосування за найкращий смайлик</h1>

      <div className="emojiRow">
        {EMOJIS.map((e) => (
          <EmojiItem
            key={e.id}
            symbol={e.symbol}
            count={votes[e.id] ?? 0}
            onVote={() => handleVote(e.id)}
          />
        ))}
      </div>

      <div className="buttonsRow">
        <button type="button" className="btn btnPrimary" onClick={handleShowResults}>
          Show Results
        </button>

        <button type="button" className="btn btnGhost" onClick={handleClear}>
          Очистити результати
        </button>
      </div>

      <div className="results">
        <h2 className="subtitle">Результати голосування:</h2>

        {showResults ? (
          winner ? (
            <>
              <div className="winnerLabel">Переможець:</div>
              <div className="winnerEmoji" aria-label="winner">
                {winner.symbol}
              </div>
              <div className="winnerCount">Кількість голосів: {winner.count}</div>
            </>
          ) : (
            <div className="emptyState">Пока нет голосов — нажми на смайлик 🙂</div>
          )
        ) : (
          <div className="emptyState">Нажми “Show Results”, чтобы увидеть победителя.</div>
        )}
      </div>
    </div>
  );
}