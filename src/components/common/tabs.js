import { useRouter } from 'next/router';

function Tabs({ activeTab }) {
    const router = useRouter()
    return (
        <div className="flex gap-2">
            <Tab title="Products" onClick={() => router.push('/?tab=products', undefined, { shallow: true })} isActive={!activeTab || activeTab === "products"} />
            <Tab title="Designs" onClick={() => router.push('/?tab=designs', undefined, { shallow: true })} isActive={activeTab === "designs"} />
        </div>
    )
}

function Tab({ title, onClick, isActive }) {
    const classNames = `${isActive && "bg-neutral-900 border border-neutral-800"} focus:border-neutral-800 focus:outline-none focus:ring-0 hover:bg-neutral-900 border-neutral-800 transition rounded-lg text-neutral-400 flex justify-center items-center px-4 py-2 gap-2 text-sm`
    return (
    <button onClick={onClick} className={classNames}>
        <span>{title}</span>
    </button>
    )
}

export default Tabs;