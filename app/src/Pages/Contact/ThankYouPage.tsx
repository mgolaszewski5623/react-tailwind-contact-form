import { useParams } from "react-router-dom";

export function ThankYouPage() {
    const { name } = useParams<{ name: string }>();
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
            <div
                role="alert"
                className="max-w-md bg-white rounded-2xl shadow-lg p-8 text-center"
            >
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                    Thank you, {name}!
                </h2>
                <p className="text-gray-700">
                    We appreciate you reaching out to us. We will get back to you shortly.
                </p>
            </div>
        </div>
    );
}
