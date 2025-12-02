import classNames from "classnames";

function Timeline({ children }) {
  return <div>{children}</div>;
}

function TimelineEvent({ active, children, last }) {
  return (
    <div
      className={classNames("flex justify-start gap-6 border-neutral-800", {
        "border-l": !last,
        "pb-10": !last,
      })}
    >
      <div className="relative">
        <div
          className={classNames(
            "absolute top-[-2px] left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black",
            {
              "bg-cyan-400": active,
              "bg-neutral-800": !active,
              "w-3 h-3": !active,
              "left-[-5.5px]": !active,
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                "absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-cyan-200 animate-ping aspect-square"
              )}
            />
          )}
        </div>
      </div>
      <div className="mt-[-4px] flex flex-col gap-1">{children}</div>
    </div>
  );
}

function TimelineEventTitle({ children }) {
  return <p className="text-xs text-neutral-400">{children}</p>;
}

function TimelineEventDescription({ label, children }) {
  return (
    <p>
      <span className="text-neutral-300 block">{label}</span>
      <span className="text-neutral-400 block mt-1 text-sm">{children}</span>
    </p>
  );
}

TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export { Timeline, TimelineEvent };
