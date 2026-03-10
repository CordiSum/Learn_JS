import React from "react";

export default function EmojiItem({ symbol, count, onVote }) {
  return (
    <button type="button" className="emojiCard" onClick={onVote} aria-label="vote">
      <span className="emojiIcon" aria-hidden="true">
        {symbol}
      </span>
      <span className="emojiCount">{count}</span>
    </button>
  );
}