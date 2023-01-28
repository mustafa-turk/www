import classNames from "classnames";

function TimelineEvent({ active, children, last }) {
  return (
    <div
      className={classNames("flex justify-start gap-6 border-neutral-800", {
        "border-l": !last,
        "pb-16": !last,
      })}
    >
      <div className='relative'>
        <div
          className={classNames(
            "absolute top-0 left-[-8px] w-4 h-4 rounded-full aspect-square outline-black",
            {
              "bg-green-300": active,
              "bg-neutral-800": !active,
              "w-3 h-3": !active,
              "left-[-6px]": !active,
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                "absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-green-300 animate-ping aspect-square"
              )}
            />
          )}
        </div>
      </div>
      <div className='mt-[-4px] flex flex-col gap-2'>{children}</div>
    </div>
  );
}

function TimelineEventTitle({ children }) {
  return <p className='text-sm text-neutral-500'>{children}</p>;
}

function TimelineEventDescription({ children }) {
  return <p className='text-md text-neutral-400'>{children}</p>;
}

TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export { TimelineEvent };
