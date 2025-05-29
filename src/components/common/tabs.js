import { useRouter } from "next/router";

function Tabs({ activeTab }) {
  const router = useRouter();
  return (
    <div className="flex gap-1 justify-center">
      <Tab
        title="Products"
        onClick={() =>
          router.push("/?tab=products", undefined, { shallow: true })
        }
        isActive={!activeTab || activeTab === "products"}
      />
      <Tab
        title="Designs"
        onClick={() =>
          router.push("/?tab=designs", undefined, { shallow: true })
        }
        isActive={activeTab === "designs"}
      />
    </div>
  );
}

function Tab({ title, onClick, isActive }) {
  return (
    <button
      className={`rounded-full px-6 py-2 hover:bg-neutral-900 transition-all text-neutral-400 ${
        isActive && "bg-neutral-900"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Tabs;
