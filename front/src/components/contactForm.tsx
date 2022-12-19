import React, { FormEvent, useRef, useState } from "react";
import { FormInput, FormSelect, FormTextArea, FormButton } from "./formComponents"

interface formValues {
    name: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    // Create state variables to store the form values
    const [formValues, setFormValues] = useState<formValues>({
        name: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    // sets the selected option possible
    const SelectOptions = [
        {
            className: "text-gray-400",
            value: "Pourquoi nous contactez-vous ?",
            isDisabled: true
        },
        {
            className: "",
            value: "j'ai une idée a vous partager",
            isDisabled: false
        },
        {
            className: "",
            value: "je souhaite rejoindre l'équipe",
            isDisabled: false
        },
        {
            className: "",
            value: "j'ai un bug à remonter",
            isDisabled: false
        },
    ]

    // handles the submit call when button is pressed
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // this part will be used as a data submission logic

        //debug purpose
        console.log(formValues);
    }


    return (
        <div className="flex flex-col w-full">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row">
                    <FormInput
                        type="text"
                        placeholder="Votre Prénom"
                        className="p-2 m-2 w-full rounded-xl"
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    />

                    <FormInput
                        type="text"
                        placeholder="Votre Nom"
                        className="p-2 m-2 w-full rounded-xl"
                        value={formValues.lastName}
                        onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                    />

                    <FormInput
                        type="email"
                        placeholder="Votre Adresse Email"
                        className="p-2 m-2 w-full rounded-xl"
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    />

                    <FormSelect
                        className="p-2 m-2 w-full rounded-xl font-semibold"
                        value={formValues.subject}
                        options={SelectOptions}
                        onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
                    />
                </div>

                <div className="flex flex-row flex-wrap justify-end">
                    <FormTextArea
                        className="h-32  p-2 m-2 rounded-xl w-full"
                        placeholder='Écrire ici...'
                        value={formValues.message}
                        onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    />

                    <FormButton
                        className="bg-Secondary text-Dominant px-4 py-2 m-2 w-1/6 text-xl font-semibold rounded-xl"
                        value="Envoyer"
                        type="submit"
                        onClick={() => { }}
                    />

                </div>
            </form>
        </div>
    );
};

export default ContactForm;