import type {NextPage} from 'next';

const Chats: NextPage = () => {
    return <div className="py-10 divide-y-[1px]">
        <div className="flex mb-3 px-4 cursor-pointer pb-3 items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
          <p className="text-xs font-medium text-gray-500">
            See you tomorrow in the corner a
          </p>
        </div>
      </div>
    </div>;
}

export default Chats;