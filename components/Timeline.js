import classNames from "classnames";

function TimelineEvent({ active, children }) {
  return (
    <div className='flex justify-start gap-6 py-6'>
      <div
        className={classNames("relative w-4 h-4 rounded-full aspect-square", {
          "bg-green-300": active,
          "bg-neutral-700": !active,
          "w-3 h-3": !active,
        })}
      >
        {active && (
          <div
            className={classNames(
              "absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-green-300 animate-ping aspect-square"
            )}
          ></div>
        )}
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
