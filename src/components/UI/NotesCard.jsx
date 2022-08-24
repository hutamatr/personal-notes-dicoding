import React from "react";
import { showFormattedDate } from "../../utils";

const Card = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDeleteNotes,
  onNotesArchivedHandler,
  onIsNotesArchived,
}) => {
  return (
    <div
      className={`grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-y-3 items-start rounded bg-custom-green p-4 shadow-material-shadow min-h-full ${
        onIsNotesArchived ? "ring-2 ring-custom-black" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-x-3">
        <h2 className="text-md font-semibold overflow-auto break-all">
          {title}
        </h2>
        {onIsNotesArchived && (
          <span className="text-xs font-medium uppercase bg-custom-black text-custom-green p-1 rounded-sm">
            Archived!
          </span>
        )}
      </div>
      <p className="text-sm overflow-auto break-words">{body}</p>
      <div className="flex flex-row items-center justify-between">
        <span className="text-xs bg-custom-black text-custom-green p-1 rounded-sm">
          {showFormattedDate(createdAt)}
        </span>
        <div className="flex items-center gap-x-3 text-3xl">
          <button
            onClick={onNotesArchivedHandler.bind(this, id)}
            className={`text-sm font-medium ${
              onIsNotesArchived
                ? "text-custom-green px-1 rounded-sm bg-custom-black"
                : "text-custom-black"
            }`}
          >
            Archive
          </button>
          <button
            onClick={onDeleteNotes.bind(this, id)}
            className="text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
