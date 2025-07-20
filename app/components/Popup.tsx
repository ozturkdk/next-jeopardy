import Question from "./Question";

type PopupProps = {
    onClose: () => void;
};

export default function Popup({ onClose }: PopupProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/5 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <Question />
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Close
                </button>
            </div>
        </div>
    );
}