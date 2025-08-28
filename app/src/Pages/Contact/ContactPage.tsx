import { useForm, FieldError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from './ValidationError';

type Contact = {
    name: string;
    email: string;
    reason: string;
    notes: string;
};

export function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Contact>({ mode: 'onBlur', reValidateMode: 'onBlur' });
    const navigate = useNavigate();

    function onSubmit(contact: Contact) {
        console.log(contact);
        navigate(`/thank-you/${contact.name}`);
    }

    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500';
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact with us</h2>
                <p className="text-gray-600 mb-6">
                    We would love to hear from you! Please reach out with any questions or feedback.
                </p>

                <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'You must provide a name' })}
                            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${getEditorStyle(errors.name)}`}
                        />
                        <ValidationError fieldError={errors.name} />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'You must provide a e-mail',
                                pattern: { value: /\S+@\S+\.\S+/, message: 'You must provide a correct e-mail' }
                            })}
                            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${getEditorStyle(errors.email)}`}
                        />
                        <ValidationError fieldError={errors.email} />
                    </div>

                    {/* Reason */}
                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                            Reason for Contact
                        </label>
                        <select
                            id="reason"
                            {...register('reason', { required: 'You must provide a reason' })}
                            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${getEditorStyle(errors.reason)}`}
                        >
                            <option value="">Select a reason</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>
                        <ValidationError fieldError={errors.reason} />
                    </div>

                    {/* Notes */}
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            {...register('notes')}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        />
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
