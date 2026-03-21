import classNames from "classnames";

function Timeline({ children }) {
  return <div>{children}</div>;
}

function TimelineEvent({ active, children, last }) {
  return (
    <div
      className={classNames("flex justify-start gap-6 border-neutral-200", {
        "border-l": !last,
        "pb-10": !last,
      })}
    >
      <div className="relative">
        <div
          className={classNames(
            "absolute top-[0px] left-[-6.5px] w-3 h-3 rounded-full aspect-square",
            {
              "bg-neutral-900": active,
              "bg-neutral-300": !active,
              "w-2 h-2": !active,
              "left-[-3.5px]": !active,
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                "absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-neutral-400 animate-ping aspect-square"
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
  return <p className="text-sm text-neutral-600">{children}</p>;
}

function TimelineEventDescription({ label }) {
  return (
    <p>
      <span className="text-neutral-700 block">{label}</span>
    </p>
  );
}

TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export { Timeline, TimelineEvent };
